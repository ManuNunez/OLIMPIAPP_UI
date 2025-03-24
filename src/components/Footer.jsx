import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Olimpiapp. Todos los derechos reservados.</p>
    </footer>
  );
}