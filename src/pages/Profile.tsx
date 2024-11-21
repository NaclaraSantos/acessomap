import React from 'react';
import { User, MapPin, Bell, Settings, Award, Calendar } from 'lucide-react';

export function Profile() {
  const userStats = {
    reportsSubmitted: 15,
    reportsValidated: 32,
    memberSince: 'Janeiro 2024',
    reputation: 'Colaborador Ativo'
  };

  const recentActivity = [
    {
      id: 1,
      type: 'Problema Reportado',
      description: 'Calçada irregular na Av. Paulista',
      date: '2 dias atrás',
      status: 'Em análise'
    },
    {
      id: 2,
      type: 'Validação',
      description: 'Confirmou problema na Rua Augusta',
      date: '5 dias atrás',
      status: 'Confirmado'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">AcessoMap</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</a>
              <a href="/community" className="text-gray-600 hover:text-blue-600">Comunidade</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-full p-4">
                <User className="w-16 h-16 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Maria Silva</h1>
                <p className="text-gray-600">maria.silva@email.com</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>Relatórios</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{userStats.reportsSubmitted}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Award className="w-5 h-5" />
                  <span>Validações</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{userStats.reportsValidated}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 text-gray-600 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span>Membro desde</span>
                </div>
                <p className="text-2xl font-bold text-gray-800">{userStats.memberSince}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Atividade Recente</h2>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">{activity.type}</h3>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                      <span className="text-sm text-gray-500">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}