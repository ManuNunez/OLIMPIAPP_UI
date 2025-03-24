import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">MyApp</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/login" className="text-white">Login</Link>
        </div>
      </nav>
    </header>
  );
}