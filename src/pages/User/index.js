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

function User() {
  const [open1, setOpen1] = useState(false);

  return (
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className='d-flex justify-content-between'>
          <div><h4 className=''>Usuário do Sistema</h4></div>
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
              <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
              <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
              <Form.Select className='border-0 ' aria-label="Default select example">
                <option>Todas</option>
                <option value="1">Entou no condominio</option>
                <option value="2">Saiu do condominio</option>
              </Form.Select>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="text" class="form-control" placeholder="Pesquisar nome"/>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="text" class="form-control" placeholder="Pesquisar telefone"/>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="text" class="form-control" placeholder="Pesquisar email"/>
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
          <div className="card border-0  card-table">
          <div className="card-body pb-2"></div>
              <div className='table-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>Função</th>
                      <th>Telefone</th>
                      <th>Email</th>
                      <th>Estado</th>
                      <th className='text-right pe-4'>Acções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr> 
                      <th scope="row" className='ps-4'>
                        <div className="vatar-tab">
                          <img src={marisa} alt=""  className='mM-10'/>
                        </div>
                      </th>
                      <td>Marisa Francisco</td>
                      <td>Secretaria</td>
                      <td>959 999 559</td>
                      <td>marisafrancisco@gmail.com</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-success">Ativado</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={chiao} alt="" />
                      </div>
                      </th>
                      <td>Chiao Man</td>
                      <td>Maquiadora</td>
                      <td>985 989 965</td>
                      <td>chiaoman1213@gmail.com</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-danger">Desativado</span>
                      </td>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={cassia} alt="" />
                      </div>
                      </th>
                      <td>Cassia Fernandes</td>
                      <td>Empregada</td>
                      <td>989 895 965</td>
                      <td>casiafernandes324@gmail.com</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-success">Ativado</span>
                      </td>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={matheus} alt="" />
                      </div>
                      </th>
                      <td>Matheus Paulo</td>
                      <td>Pedreiro</td>
                      <td>985 998 545</td>
                      <td>matheuspaulo123@gamil.com</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-danger">Desativado</span>
                      </td>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={paula} alt="" />
                      </div>
                      </th>
                      <td>Paula Maria</td>
                      <td>Pedreiro</td>
                      <td>924 482 996</td>
                      <td>paulagralmaria7443@gmail.com</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-success">Ativado</span>
                      </td>
                      <td className='text-right pe-4'>
                         <Dropdown>
                      <Dropdown.Toggle className="btn btn-light p-0 m-0 " id="dropdown-basic">
                        <IoEllipsisHorizontal/>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='border-0 shadow-sm font-size-14'>
                        <Dropdown.Item href="#/action-1">Reenviar senha</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Activar</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Desativa</Dropdown.Item>
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

export default User;