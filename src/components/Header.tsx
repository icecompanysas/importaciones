import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGO.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white mx-auto p-2 font-poppins">
      <nav className="flex justify-between lg:justify-center items-center shadow-lg mb-4 rounded-lg relative">
        <div className='logo p-2 w-1/2'>
          <img src={Logo} alt="Logo Ohana Importaciones" className="w-36 h-auto my-4 lg:mr-8" />
        </div>
        <div className='links lg:block w-1/6 md:w-4/6 hidden lg:flex'>
          <ul className="menu flex space-x-4 lg:space-x-8">
            <li><Link to="/" className='link'>Inicio</Link></li>
            <li><Link to="/maquinasselladoras" className='link'>Maquinas Selladoras</Link></li>
            <li><Link to="/rollosselladoras" className='link'>Rollos Selladoras</Link></li>
            <li><Link to="/mesasdebillar" className='link'>Mesas de Billar</Link></li>
            <li>
              <Link to="/contacto" className='p-2 bg-emerald-500 rounded-full text-white font-bold block 
                           hover:bg-white hover:text-black hover:border-emerald-500 
                           transition duration-500 border-2 border-transparent'>
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
        <div className='block lg:hidden w-1/6 lg:w-4/6'>
          <button onClick={toggleMenu} className='link' id='mobile-menu'>
            Menu
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center animate-[fade-in_1s_ease-in-out]">
          <button onClick={toggleMenu} className="absolute top-4 right-8 text-white text-2xl font-bold">
            X
          </button>
          <ul className="menu flex flex-col space-y-4 text-center animate-[fade-in-down_1s_ease-in-out]">
            <li><Link to="/" className='link text-white text-xl' onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/maquinasselladoras" className='link text-white text-xl' onClick={toggleMenu}>Maquinas Selladoras</Link></li>
            <li><Link to="/rollosselladoras" className='link text-white text-xl' onClick={toggleMenu}>Rollos Selladoras</Link></li>
            <li><Link to="/mesasdebillar" className='link text-white text-xl' onClick={toggleMenu}>Mesas de Billar</Link></li>
            <li>
              <Link to="/contacto" className='p-2 bg-emerald-500 rounded-full text-white font-bold block 
                           hover:bg-white hover:text-black hover:border-emerald-500 
                           transition duration-500 border-2 border-transparent'
                           onClick={toggleMenu}>
                Contactanos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
