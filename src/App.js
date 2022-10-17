import React from 'react';
import {
  BrowserRouter as
    Router,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react';

import './style/global.scss'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Visitors from './pages/Visitors';
import Announcement from './pages/Announcement';
import Employees from './pages/Employees';
import Residents from './pages/Residents';
import Porters from './pages/Porters';
import Documents_ from './pages/Documents_';
import Residentsc from './pages/Residentsc';
import Typology from './pages/Typology';
import Area from './pages/Area';
import Services_ from './pages/Services_';
import User from './pages/User';
import Agendadas from './pages/Agendadas';
import NoCondominio from './pages/NoCondominio';
import Erro400 from './pages/Erro400';
import Concluido from './pages/Concluido';
import Cancelados from './pages/Cancelados';
import Expiradas from './pages/Expiradas';
import ToRecover from './pages/ToRecover';
import Agregado from './pages/Agregado';
import Funcionario from './pages/Funcionario';
import ChangePassword from './pages/ChangePassword';
import Quadra from './pages/Quadra';
import DetalheDocoment from './pages/DetalheDocoment';
import DetalhesComunicado from './pages/DetalhesComunicado';
import VerDocumento from './pages/VerDocumento';

import { AuthProvider } from './components/contexts/AuthContext';

function App() {
  return (
    <>

      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<Erro400 />} />
            <Route path="/" element={<Login />} />
            <Route path="/toRecover" element={<ToRecover />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/visitors' element={<Visitors />} />
            <Route path='/funcionario' element={<Funcionario />} />
            <Route path='/detalheDocoment' element={<DetalheDocoment />} />
            <Route path='/detalhesComunicado' element={<DetalhesComunicado />} />
            <Route path='/verDocumento' element={<VerDocumento />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/agregado' element={<Agregado />} />
            <Route path='/residents' element={<Residents />} />
            <Route path='/porters' element={<Porters />} />
            <Route path='/documents_' element={<Documents_ />} />
            <Route path='/residentsc' element={<Residentsc />} />
            <Route path='/typology' element={<Typology />} />
            <Route path='/area' element={<Area />} />
            <Route path='/quadra' element={<Quadra />} />
            <Route path='/services_' element={<Services_ />} /> NoCondominio
            <Route path='/agendadas' element={<Agendadas />} />
            <Route path='/condominio' element={<NoCondominio />} />
            <Route path='/concluido' element={<Concluido />} />
            <Route path='/cancelados' element={<Cancelados />} />
            <Route path='/expiradas' element={<Expiradas />} />
            <Route path='/user' element={<User />} />
            <Route path="/announcement" element={<Announcement />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
