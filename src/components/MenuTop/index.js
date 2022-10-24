import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {
  HiMenuAlt2,
  HiUser,
  HiOutlineLogin
} from "react-icons/hi";
import matheus from './../../assets/photos/matheus.jpg'

import { AuthContext, signOut } from './../contexts/AuthContext';

import './menuTop.scss'
export function MenuTop() {
  const { user } = useContext(AuthContext);

  return (<nav className="navbar navbarTop bg-light ps-4 pe-4">
    <div className="container-fluid">
      <div className='d-flex'>
        <button type="button" className="btn">
          <HiMenuAlt2 />
        </button>
        <select className="form-select ms-3">
          <option value="" selected>Vereda das Flores</option>
          <option value="1">Camama</option>
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

