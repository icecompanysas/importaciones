import { useState } from 'react';

import Footer from './Footer';

export default function Servicio() {
  const [selectedIcon, setSelectedIcon] = useState('');

  return (
    <div className="bg-purple-700 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-sm w-full relative">
        <img src="logo.png" alt="Logo de la aplicación" className="w-20 h-auto mx-auto my-4" />

        <div className="flex items-center justify-center mb-4">
            <div className={`mr-4 p-6 rounded-md focus:outline-none cursor-pointer ${selectedIcon === 'sms1' ? 'bg-blue-500' : ''}`} onClick={() => setSelectedIcon('sms1')}>
                <img src="/carro.png" alt="Icon carro" className="h-10 w-30" />
            </div>
            <div className={`mr-4 p-6 rounded-md focus:outline-none cursor-pointer ${selectedIcon === 'sms2' ? 'bg-blue-500' : ''}`} onClick={() => setSelectedIcon('sms2')}>
                <img src="/moto.png" alt="Icon Moto" className="h-10 w-30" />
            </div>
        </div>
        <div className="flex items-center justify-center mb-4">
          <input type="text" placeholder="¿A donde quiere ir?" className="text-center flex-1 bg-gray-100 p-2 rounded-full py-2 pl-10" style={{backgroundImage: `url(/icono_buscar.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center'}} />    
        </div>
        <div className="flex items-center justify-center mb-4">
            <input type="text" placeholder="¿Cambiar Sitio de Recogida?" className="text-center flex-1 bg-gray-100 p-2 rounded-full py-2 pl-10" style={{backgroundImage: `url(/icono_buscar.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: '10px center'}} />
        </div>
        
        
        <p className="text-sm text-gray-600 mb-2 text-center">Sugeridos:</p>
        <div className="flex justify-center mb-4">
          {/* Aquí puedes insertar los elementos sugeridos */}
          <div className="mr-4">Sugerido 1</div>
          <div className="mr-4">Sugerido 2</div>
          <div className="mr-4">Sugerido 3</div>
        </div>
        
        
        <input type="text" placeholder="Si tienes algún comentario" className="text-center flex-1 border-b-2 border-gray-300 p-2 mb-4 w-full" style={{backgroundImage: `url(/buscar.png)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'calc(100% - 10px) center', paddingLeft: '30px'}} />

        <div className="flex items-center justify-center mb-4">
          <button className="bg-yellow-500 text-white rounded-full m-2 px-4 py-2 block w-full text-center mb-2">Solicitar mi Duvi</button>
        </div>
        <Footer />
      </div>
      
    </div>
  );
}
