import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import Validacion from './components/Validacion';
import Registro from './components/Registro';
import Servicio from './components/Servicio';

const App: React.FC = () => {
  return (
  
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/validacion" element={<Validacion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/servicio" element={<Servicio />} />
      </Routes>
  
  );
};

export default App;
