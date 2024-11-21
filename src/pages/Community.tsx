import React from 'react';
import { MapPin, ThumbsUp, MessageCircle, Clock, User } from 'lucide-react';

const reports = [
  {
    id: 1,
    user: "Maria Silva",
    type: "Calçada Irregular",
    address: "Av. Paulista, 1000",
    description: "Calçada com buracos e desníveis, difícil para cadeirantes.",
    image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=600",
    likes: 23,
    comments: 5,
    timeAgo: "2 horas atrás",
    status: "Em análise"
  },
  {
    id: 2,
    user: "João Santos",
    type: "Rampa Inacessível",
    address: "Rua Augusta, 500",
    description: "Rampa muito íngreme e sem corrimão de apoio.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=600",
    likes: 45,
    comments: 12,
    timeAgo: "5 horas atrás",
    status: "Confirmado"
  }
];

export function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <nav className="bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">AcessoMap</span>
            </div>
            <div className="flex gap-4">
              <a href="/" className="text-white hover:text-blue-100">Início</a>
              <a href="/dashboard" className="text-white hover:text-blue-100">Dashboard</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Comunidade AcessoMap</h1>

        <div className="space-y-6">
          {reports.map(report => (
            <div key={report.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <User className="w-10 h-10 text-gray-400 bg-gray-100 rounded-full p-2" />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-800">{report.user}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {report.timeAgo}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{report.type}</h3>
                  <p className="text-gray-600 mb-2">{report.description}</p>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {report.address}
                  </p>
                </div>

                <img 
                  src={report.image} 
                  alt={report.type}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <ThumbsUp className="w-5 h-5 mr-1" />
                      <span>{report.likes}</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-blue-600">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span>{report.comments}</span>
                    </button>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium
                    ${report.status === 'Confirmado' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {report.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}