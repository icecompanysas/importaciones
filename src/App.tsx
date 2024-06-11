import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Validacion from './components/Validacion';
import Registro from './components/Registro';
import Home from './components/Home';
import MaquinasSelladoras from './components/MaquinasSelladoras';

const App: React.FC = () => {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validacion" element={<Validacion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/maquinasselladoras" element={<MaquinasSelladoras />} />
      </Routes>
  
  );
};

export default App;
