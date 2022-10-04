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
  HiOutlineEyeOff,
  HiArrowSmLeft,
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

function DetalhesComunicado() {
  const [open1, setOpen1] = useState(false);
  return (
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className="card border-0 card-body">
          <div className='d-flex justify-content-between'>
            <div>
              <Link to="/announcement" class="btn btn-primary btn-sm"><HiArrowSmLeft/> voltar</Link>
              <button type="button" class="btn btn-light me-3 ms-3 btn-sm"><HiOutlineEyeOff/> Visualizada: 20</button>
              <button type="button" class="btn btn-light btn-sm"><HiOutlineEye/> Não visualizada: 30</button>
            </div>
          {/*<div><h4 className=''>Detalhes Comunicados</h4></div>*/}
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
              <div className="input-group input-group-sm w-280px rounded mt-2 border">
                  <select class="form-select border-0">
                  <option selected>Visto</option>
                  <option value="1">Nao visto</option>
                </select>
                </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 ">
              <input type="text" class="form-control border"  placeholder="Pesquisar residencia"/>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 border ">
              <select class="form-select border-0 ">
                <option selected>Principal</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select class="form-select border-0">
              <option selected>Agregado</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
              </div>
              <div className='mt-2 ms-2'>
              <button type="button" class="btn btn-primary btn-sm"><HiOutlineSearch/></button>
              </div>
              </div>
              </div>
            </div>
          </Collapse>
          </div>

          <div className='mt-4'>
            <div className="container p-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card border-0 card-table">
                    <div className="card-body">
                      <h4 className='mb-3'>Informações</h4>
                      <b>Assunto:</b> MonzoYeto <br />
                      <b>Comunicado por:</b> Daniel Filipe <br /><br />
                      <b>Descrição:</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque dolorum deleniti, earum laboriosam reiciendis ad facilis quisquam quidem aperiam tempore iste itaque asperiores vel fugiat placeat optio totam? Illum, voluptate. <br /><br />

                      <b>Data da comunicação:</b> 03/09/2022
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                <div className="card border-0 card-table">
          <div className="card-body pb-2"></div>
              <div className='tale-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>Tipo</th>
                      <th className='text-right pe-4'>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={cassia} alt="" />
                      </div>
                      </th>
                      <td>Cassia Fernandes</td>
                      <td>Agregado</td>
                      <td className='text-right pe-4'>20/03/2022</td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={marisa} alt="" />
                      </div>
                      </th>
                      <td>Marisa Francisco</td>
                      <td>Principal</td>
                      <td className='text-right pe-4'><span class="badge bg-secondary rounded-pill">Não visualizou</span></td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={paula} alt="" />
                      </div>
                      </th>
                      <td>Paula Maria</td>
                      <td>Principal</td>
                      <td className='text-right pe-4'>20/03/2022</td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={matheus} alt="" />
                      </div>
                      </th>
                      <td>Matheus Paulo</td>
                      <td>Agregado</td>
                      <td className='text-right pe-4'><span class="badge bg-secondary rounded-pill">Não visualizou</span></td>
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
          </div>
        </div>
      </div>
      </section>
    </main>
  </div>
  );
}

export default DetalhesComunicado;