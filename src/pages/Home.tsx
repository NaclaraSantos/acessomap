import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, AlertTriangle, ArrowRight } from 'lucide-react';

export function Home() {
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
              <Link to="/login" className="text-white hover:text-blue-100">Login</Link>
              <Link to="/community" className="text-white hover:text-blue-100">Comunidade</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">Mapeando a Acessibilidade Urbana</h1>
          <p className="text-xl mb-8">Juntos podemos criar uma cidade mais acessível para todos</p>
          <Link 
            to="/login"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Começar agora
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <MapPin className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mapeamento Interativo</h3>
            <p>Registre e visualize problemas de acessibilidade em tempo real no mapa da cidade.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <Users className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comunidade Colaborativa</h3>
            <p>Participe de uma rede de cidadãos engajados em melhorar a acessibilidade urbana.</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
            <AlertTriangle className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alertas e Atualizações</h3>
            <p>Receba notificações sobre o status dos problemas reportados e melhorias realizadas.</p>
          </div>
        </div>

       
      </main>
    </div>
  );
}