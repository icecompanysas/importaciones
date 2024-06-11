import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Logo from '../images/LOGO.png';

export default function Home() {
  return (
    <div className="bg-white mx-auto p-2 font-poppins">
      <nav className="flex justify-between lg:justify-center items-center shadow-lg mb- rounded-lg  ">
        <div className='logo p-2 w-1/6'>
        <img src={Logo} alt="Logo Ohana Importaciones" className="w-36 h-auto my-4 lg:mr-8" />
        </div>
        <div className='links lg:block w-1/6 md:w-4/6 hidden '>
          <ul className="menu flex space-x-4 lg:space-x-8">
            <li><Link to="/" className='link'>Inicio</Link></li>
            <li><Link to="/maquinasselladoras" className='link'>Maquinas Selladoras</Link></li>
            <li><Link to="/rollosselladoras" className='link'>Rollos Selladoras</Link></li>
            <li><Link to="/mesasdebillar" className='link'>Mesas de Billar</Link></li>
            <li><Link to="/contacto" className='link'>Contactanos</Link></li>
          </ul>
        </div>
      </nav>
     
    </div>
  );
}
