
import { Link } from 'react-router-dom'; 
export default function Validacion() {
  return (
    <div className="bg-purple-700 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full relative">
      <img src="logo.png" alt="Logo de la aplicación" className="w-20 h-auto mx-auto my-4" /> 
        <Link to="/">
        <button className="absolute top-2 right-2 font-bold">
            <img src="/cerrar.png" alt="Colombia Flag" className="h-10 ml-2" />
        </button>
        </Link>
        <h2 className="text-xl p-2 font-bold mb-4 text-center">Te enviamos un código por SMS ingresalo ahora</h2>
        <div className="flex justify-between mb-4">
          <input type="tel" className="w-1/4 text-center flex-1 ml-2 bg-gray-100 p-2 rounded-sm  py-6" />
          <input type="tel" className="w-1/4 text-center flex-1 ml-2 bg-gray-100 p-2 rounded-sm  py-6" />
          <input type="tel" className="w-1/4 text-center flex-1 ml-2 bg-gray-100 p-2 rounded-sm  py-6" />
          <input type="tel" className="w-1/4 text-center flex-1 ml-2 bg-gray-100 p-2 rounded-sm  py-6" />
        </div>
        <Link to="/registro">
          <button className="bg-yellow-500 text-white rounded-full px-4 py-2 block w-full text-center mb-4">Validar código</button>
        </Link>
      </div>
    </div>
  );
}
