import React, { useContext, useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  HiMenuAlt2,
  HiUser,
  HiOutlineLogin
} from "react-icons/hi";
import matheus from './../../assets/photos/matheus.jpg'
import { api } from '../../services/api';
import { AuthContext, signOut } from './../contexts/AuthContext';

import './menuTop.scss'
export function MenuTop() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAppointments();

  }, []);

  async function getAppointments() {
    try {
      const response = await api.get('v1/get_condominios');
      setAppointments(response.data.data);

      setLoading(false);
    } catch (error) {
      if (error.message === "Network Error") {
        console.log("Por favor verifique sua conexão com a internet!");
      } else if (error.message === "Request failed with status code 401") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.message === "Request failed with status code 400") {
        console.log("Erro ao carregar agendamento, por favor, tente recarregar a página!");
      } else if (error.status === 500) {
        console.log("Erro interno, por favor, contactar o suporte!");
      }
      setLoading(false);
    }
  }

  return (<nav className="navbar navbarTop bg-light ps-4 pe-4">
    <div className="container-fluid">
      <div className='d-flex'>
        <button type="button" className="btn">
          <HiMenuAlt2 />
        </button>
        <select className="form-select ms-3">
          {
            appointments?.condominio?.map(appointment => (
              <option value={appointment.id}>{appointment.nome}</option>
            ))
          }

        </select>
      </div>
      <div className="d-flex" role="search">
        <div className='avatar-mini me-2'>
          <img src={matheus} alt="" />
        </div>
        <Dropdown>
          <Dropdown.Toggle className='nameUser mt-2' id="dropdown-basic">
            {
              user?.name
            }
          </Dropdown.Toggle>
          <Dropdown.Menu className='dropUserMenu'>
            <Dropdown.Item href="#/profile"><HiUser className='me-1' /> Perfil</Dropdown.Item>
            <Dropdown.Item href="#/logout" onClick={() => signOut()}><HiOutlineLogin className='me-1' /> Sair</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  </nav>);
}

