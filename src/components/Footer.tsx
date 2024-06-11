
import React from 'react';

export default function Footer() {

    return (
        <footer className="flex justify-around items-center  text-slate-500 py-4">
            <div className="flex flex-col items-center">
            <img src="/home.png" alt="Icono de inicio" className="h-8 w-8" />
            <span className="text-xs">Inicio</span>
            </div>
            <div className="flex flex-col items-center">
            <img src="/girar.png" alt="Icono de viajes" className="h-8 w-8" />
            <span className="text-xs">Mis Viajes</span>
            </div>
            <div className="flex flex-col items-center">
            <img src="/ajustes.png" alt="Icono de configuración" className="h-8 w-8" />
            <span className="text-xs">Configuración</span>
            </div>
            <div className="flex flex-col items-center">
            <img src="/ayuda.png" alt="Icono de soporte" className="h-8 w-8" />
            <span className="text-xs">Soporte</span>
            </div>
        </footer>
    )
    
}

