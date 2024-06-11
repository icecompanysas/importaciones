import React from 'react';
import { Link } from 'react-router-dom'; 
export default function Registro() {
  return (
    <div className="bg-purple-700 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
      <img src="logo.png" alt="Logo de la aplicación" className="w-20 h-auto mx-auto my-4" /> 
        <h2 className="text-xl font-bold mb-4 text-center">Bienvenido a DUVI</h2>
        <p className="text-sm text-gray-600 mb-2">Ingresa tu nombre y apellido</p>
        <div className="flex items-center justify-center mb-4">
          <input type="text" placeholder="Nombre y Apellidos" className="text-center flex-1 bg-gray-100 p-2 rounded-full py-2" />
        </div>
        <p className="text-sm text-gray-600 mb-2">Correo</p>
        <div className="flex items-center justify-center mb-4">
          <input type="text" placeholder="correo@correo.com" className="text-center flex-1 bg-gray-100 p-2 rounded-full py-2" />
        </div>
        <div className="flex items-center justify-between mb-4">
          <input type="checkbox" className="mr-2" />
          <label htmlFor="terms" className="text-sm flex-1">Acepto los términos de uso y la política de privacidad</label>
        </div>
        <Link to="/servicio">
        <button className="bg-yellow-500 text-white rounded-full px-4 py-2 block w-full text-center mb-4">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}
