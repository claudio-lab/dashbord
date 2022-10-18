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
  HiOutlineUserCircle,
  HiArrowSmLeft,
  HiOutlineEyeOff
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

function DetalheDocoment() {
  const [open1, setOpen1] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className="card w-max-1200 border-0 card-body">
          <div className='d-flex justify-content-between'>
            <div>
              <Link to="/documents_" class="btn btn-primary btn-sm"><HiArrowSmLeft/> voltar</Link>
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
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <select class="form-select border-0" >
                <option selected>Todos</option>
                <option value="1">Visualizado</option>
                <option value="2">Não visualizado</option>
              </select>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <select class="form-select border-0" >
                <option selected>Todos</option>
                <option value="1">Pricipais</option>
                <option value="2">Agregados</option>
              </select>
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <input type="text" class="form-control"  placeholder="Pesquisar residencia"/>
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
          </div>

          <div className='mt-4'>
          <div className="btn-group border-botton-right-0"> 
              <Link to="/detalheDocoment" className="btn border-botton-right-0 btn-light-tabs active" >Informações</Link>
              <Link to="/verDocumento" className="btn border-botton-right-0 btn-light-tabs " >Abrir arquivo</Link>
            </div>
          <div className="card border-0 border-botton-right-left-0 card-table">
          <div className="card-body pb-2">
          </div>
              <div className='table-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Residência</th>
                      <th>Tipo</th>
                      <th>Estado</th>
                      <th className='text-right pe-4'>Data de visualização</th>
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
                      <td>952 954 964</td>
                      <td>Q32-t43 C34</td>
                      <td>Agregado</td>
                      <td>Não visualizada</td>
                      <td className='text-right pe-4'>
                      23/03/2022
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={chiao} alt="" />
                      </div>
                      </th>
                      <td>Chiao Man</td>
                      <td>952 954 964</td>
                      <td>Q32-t43 C34</td>
                      <td>Agregado</td>
                      <td>Visualizada</td>
                      <td className='text-right pe-4'>
                      23/03/2022
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={cassia} alt="" />
                      </div>
                      </th>
                      <td>Cassia Fernandes</td>
                      <td>952 954 964</td>
                      <td>Q32-t43 C34</td>
                      <td>Principal</td>
                      <td>Visualizada</td>
                      <td className='text-right pe-4'>
                      23/03/2022
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={matheus} alt="" />
                      </div>
                      </th>
                      <td>Matheus Paulo</td>
                      <td>952 954 964</td>
                      <td>Q32-t43 C34</td>
                      <td>Agregado</td>
                      <td>Não visualizada</td>
                      <td className='text-right pe-4'>
                      23/03/2022
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={paula} alt="" />
                      </div>
                      </th>
                      <td>Paula Maria</td>
                      <td>952 954 964</td>
                      <td>Q32-t43 C34</td>
                      <td>Principal</td>
                      <td>Visualizada</td>
                      <td className='text-right pe-4'>
                      23/03/2022
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

export default DetalheDocoment;