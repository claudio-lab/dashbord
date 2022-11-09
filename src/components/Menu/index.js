import React ,  { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';
import logo from './../../assets/logo.svg'
import Collapse from 'react-bootstrap/Collapse';

import { 
  HiAdjustments,
  HiCog,
  HiDocumentText,
  HiKey,
  HiUserGroup,
  HiHeart,
  HiSpeakerphone,
  HiExclamationCircle
 } from "react-icons/hi";

export function Menu() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  return (
    <>
      <div className="menu">
        <div className="logo mt-3">
          <img src={logo} alt=""/>
        </div>
      <div className="menu-link ps-2 mt-4">

        <nav className="nav mt-2 mb-4 flex-column">
          <Link className="nav-link d-flex justify-content-between active" to="/dashboard">
            <font><HiAdjustments className='icon-hi me-2'/> Painel de controle</font>
          </Link>
          <a
            onClick={() => setOpen(!open)}
            aria-controls="collapse-portaria"
            aria-expanded={open}
            className="nav-link"
            href='#'
            >
            <HiKey className='icon-hi me-2'/> Portaria
          </a>
          <Collapse in={open}>
            <div id="collapse-portaria">
            <nav className="nav flex-column menu-sub">
                <Link className="nav-link p-1" to="/visitors">Visitantes</Link>
                <Link className="nav-link p-1" to="/employees">Funcionários das Residências</Link>
                <Link className="nav-link p-1" to="/residents">Moradores</Link>
                <Link className="nav-link p-1" to="/porters">Porteiros</Link>
              </nav>
            </div>
          </Collapse>
          <Link className="nav-link" to="/announcement">
          <HiSpeakerphone className='icon-hi me-2'/>Comunicados
          </Link>
          <a
            onClick={() => setOpen3(!open3)}
            aria-controls="collapse-reclamação"
            aria-expanded={open3}
            className="nav-link"
            href='#'
            >
            <HiExclamationCircle className='icon-hi me-2'/> Reclamação
          </a>
          <Collapse in={open3}>
            <div id="collapse-reclamação">
            <nav className="nav flex-column menu-sub">
                <Link className="nav-link p-1" to="/reclamacao">Correntes</Link>
                <Link className="nav-link p-1" to="/garantia">Garantia</Link>
              </nav>
            </div>
          </Collapse>
          <Link className="nav-link" to="/documents_">
           <HiDocumentText className='icon-hi me-2'/> Documentos
          </Link>
          <Link className="nav-link" to="/residentsc">
          <HiUserGroup className='icon-hi me-2'/> Moradores
          </Link>
          <Collapse in={open1}>
            <div id="collapse-portaria">
            <nav className="nav flex-column menu-sub">
                <Link className="nav-link p-1" to="/residentsc">Residentes</Link>
                <Link className="nav-link p-1" to="/queries">Queries</Link>
              </nav>
            </div>
          </Collapse>
          <a 
          className="nav-link"
          onClick={() => setOpen2(!open2)}
          aria-controls="collapse-portaria"
          aria-expanded={open2} 
          href="#"
          >
           <HiCog className='icon-hi me-2' /> Configurações
          </a>
          <Collapse in={open2}>
            <div id="collapse-portaria">
            <nav className="nav flex-column menu-sub">
                <Link className="nav-link p-1" to="/typology">Estrutura</Link>
                {/*<Link className="nav-link p-1" to="/area">Área</Link>*/}
                <Link className="nav-link p-1" to="/services_">Serviços</Link>
                <Link className="nav-link p-1" to="/user">Usuário do Sistema</Link>
              </nav>
            </div>
          </Collapse>
        </nav>
        </div>
      </div>
    </>
  );
}