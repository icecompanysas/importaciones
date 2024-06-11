import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Validacion from './components/Validacion';
import Registro from './components/Registro';
import Servicio from './components/Servicio';


const App: React.FC = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validacion" element={<Validacion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/servicio" element={<Servicio />} />
      </Routes>
  
  );
};

export default App;
