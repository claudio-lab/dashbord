import React, { useState } from 'react';
import { Menu } from '../../components/Menu';
import { 
  Link
} from "react-router-dom";
import { 
  HiOutlineUserGroup, 
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineViewGrid,
  HiDotsHorizontal,
  HiSearch,
  HiAdjustments,
  HiRefresh,
  HiOutlineSearch,
  HiOutlineEye,
  HiOutlineUserCircle
} from "react-icons/hi";
import { 
  IoEllipsisHorizontal,
  IoCalendarOutline,
  IoPeopleOutline,
  IoCarSportOutline,
  IoClipboardOutline,
  IoTimeOutline,
  IoAlertCircleOutline,
  IoPersonOutline 
} from "react-icons/io5";
import { MenuTop } from '../../components/MenuTop';
import { Modal, Button,  } from 'react-bootstrap';

import {Card, 
        Table,
        Dropdown, 
        Collapse,
        Form 
} from 'react-bootstrap';
import marisa from './../../assets/photos/marisa.jpg'
import chiao from './../../assets/photos/chiao.jpg'
import cassia from './../../assets/photos/cassia.jpg'
import matheus from './../../assets/photos/matheus.jpg'
import paula from './../../assets/photos/paula.jpg'


function Quadra() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className='d-flex justify-content-between'>
          <div><h4 className=''>Estrutura</h4></div>
           <div>
           <Button
          onClick={() => setOpen1(!open1)}
          className='btn-sm'
          aria-expanded={open1}
        >
          <HiAdjustments/>
        </Button>

        <Button className='btn-sm ms-1'>
          <HiRefresh/>
        </Button>
          </div>            
          </div>
          <Collapse in={open1}>
            <div id="example-collapse-text">
              <div className="d-flex flex-row-reverse">
              <div className='d-flex'>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="search" class="form-control border-0" placeholder="Pesquisar"/>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineSearch/></button>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineEye/></button>
              </div>
              </div>
              </div>
            </div>
          </Collapse>

          <div className='mt-4'>
          <div className="btn-group border-botton-right-0">
              <Link to="/typology" className="btn border-botton-right-0 btn-light-tabs " >Tipologias</Link>
              <Link to="/quadra" className="btn border-botton-right-0 btn-light-tabs active">Quadra</Link>
            </div>
          <div className="card border-0 border-botton-right-left-0 card-table">
          <div className="card-body pb-2"></div>
              <div className='table-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Idenfiticador</th>
                    <th>Nº de Residência</th>
                      <th className='text-right pe-4'>Acções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <th scope="row" className='ps-4'>T3</th>
                      <th>T3</th>
                      <td className='text-right pe-4'>
                      <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>T5</th>
                      <th>T3</th>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>T2</th>
                      <th>T3</th>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>T1</th>
                      <th>T3</th>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>T2</th>
                      <th>T3</th>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Apagar</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Editar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Detalhes</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="card-body pt-0">
                <div className="d-flex justify-content-between">
                  <div className='pt-2'>1-12 itens</div>
                  <div>
                  <nav className='nav-pagination'>
                        <ul className="pagination">
                          <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                          <li className="page-item"><a className="page-link border-0 activee" href="#">1</a></li>
                          <li className="page-item"><a className="page-link border-0" href="#">2</a></li>
                          <li className="page-item"><a className="page-link border-0" href="#">3</a></li>
                          <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                        </ul>
                      </nav>
                  </div>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
      </section>
    </main>
  </div>
  );
}

export default Quadra;