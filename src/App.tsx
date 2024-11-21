import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Map } from './components/Map';
import { ReportForm } from './components/ReportForm';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Community } from './pages/Community';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';

function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden">
          <Map />
        </div>
        <div className="md:col-span-1">
          <ReportForm />
        </div>
      </div>
    </div>
  );
}

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;