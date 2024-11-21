import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { Search, MapPin } from 'lucide-react';

// Fix for default marker icon
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = new Icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

interface MarkerData {
  position: [number, number];
  address: string;
  type: string;
  urgency: string;
}

function LocationMarker({ onLocationFound }: { onLocationFound: (latlng: LatLng) => void }) {
  useMapEvents({
    click(e) {
      onLocationFound(e.latlng);
    },
  });
  return null;
}

export function Map() {
  const defaultPosition: [number, number] = [-23.550520, -46.633308]; // São Paulo
  const [markers, setMarkers] = useState<MarkerData[]>([]);
  const [searchAddress, setSearchAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddressSearch = async () => {
    if (!searchAddress) return;
    
    setLoading(true);
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchAddress)}`
      );
      
      if (response.data && response.data[0]) {
        const { lat, lon, display_name } = response.data[0];
        const newMarker: MarkerData = {
          position: [parseFloat(lat), parseFloat(lon)],
          address: display_name,
          type: 'Novo Problema',
          urgency: 'Média'
        };
        
        setMarkers([...markers, newMarker]);
      }
    } catch (error) {
      console.error('Error searching address:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMapClick = async (latlng: LatLng) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`
      );
      
      if (response.data) {
        const newMarker: MarkerData = {
          position: [latlng.lat, latlng.lng],
          address: response.data.display_name,
          type: 'Novo Problema',
          urgency: 'Média'
        };
        
        setMarkers([...markers, newMarker]);
      }
    } catch (error) {
      console.error('Error reverse geocoding:', error);
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 right-4 z-[1000] bg-white rounded-lg shadow-lg p-2">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar endereço..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={searchAddress}
            onChange={(e) => setSearchAddress(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddressSearch()}
          />
          <button
            onClick={handleAddressSearch}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            {loading ? 'Buscando...' : 'Buscar'}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          <MapPin className="h-4 w-4 inline mr-1" />
          Clique no mapa ou busque um endereço para adicionar um marcador
        </p>
      </div>

      <MapContainer
        center={defaultPosition}
        zoom={13}
        className="w-full h-[calc(100vh-4rem)]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <LocationMarker onLocationFound={handleMapClick} />

        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={defaultIcon}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold">{marker.type}</h3>
                <p className="text-sm text-gray-600">Urgência: {marker.urgency}</p>
                <p className="text-sm mt-1 text-gray-700">
                  <strong>Endereço:</strong><br />
                  {marker.address}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}