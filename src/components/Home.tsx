
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Logo from '../images/LOGO.png';
export default function Home() {
  return (
    <div className="bg-purple-700 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full">
      <img src={Logo} alt="Logo de la aplicación" className="w-20 h-auto mx-auto my-4" /> 
        <h2 className="text-xl font-bold mb-4 text-center">Introduce tu número de teléfono</h2>
        <div className="flex items-center justify-center">
          <img src="/bandera-colombia.png" alt="Colombia Flag" className="h-10 ml-2" />
          <select className="text-gray-700 bg-gray-100 rounded-full px-4 py-2">
            <option value="+57">+57</option>
            {/* Aquí puedes agregar más opciones si es necesario */}
          </select>
          <input type="text" placeholder="Número de teléfono" className="text-center flex-1 ml-2 bg-gray-100 p-2 rounded-full py-2" />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button className="mr-4 focus:outline-none">
            <img src="/sms.png" alt="SMS Icon" className="h-10 w-10" />
            <p className="text-sm mt-1">SMS</p>
          </button>
        </div>
        {/* Usa Link en lugar de link */}
        <Link to="validacion">
          <button className="bg-yellow-500 text-white rounded-full px-4 py-2 block w-full text-center mb-4">Enviar código</button>
        </Link>
        <p className="text-sm text-gray-600 mb-2">
          Al registrarte a nuestra aplicación, aceptas nuestros términos de uso y política de privacidad.
        </p>
        <p className="text-sm text-gray-600">
          <a href="#" className="underline">Términos de uso</a> y <a href="#" className="underline">Política de privacidad</a>
        </p>
      </div>
    </div>
  );
}
