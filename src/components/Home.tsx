import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Logo from '../images/LOGO.png';

export default function Home() {
  return (
    <div className="bg-white mx-auto p-2 font-poppins">
      <nav className="flex justify-between lg:justify-center items-center mb-4">
        <img src={Logo} alt="Logo Ohana Importaciones" className="w-36 h-auto my-4 lg:mr-8" />
        <div className='links lg:block hidden '>
          <ul className="menu flex space-x-4 lg:space-x-8">
            <li><Link to="/" className='font-bold block p-5'>Inicio</Link></li>
            <li><Link to="/maquinasselladoras" className='font-bold block p-5'>Maquinas Selladoras</Link></li>
            <li><Link to="/rollosselladoras" className='font-bold block p-5'>Rollos Selladoras</Link></li>
            <li><Link to="/mesasdebillar" className='font-bold block p-5'>Mesas de Billar</Link></li>
            <li><Link to="/contacto" className='font-bold block p-5'>Contactanos</Link></li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
}
