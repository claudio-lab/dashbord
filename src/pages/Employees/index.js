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
  IoPersonOutline,
  
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

function Employees() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow= () => setShow(true);

  return (
    <div className="dashboard">
    <main className='d-flex'>
      <Menu/>
      <section className='w-100 h-100 height-overflow'>
        <MenuTop/>
      <div className="p-4">
          <div className="container">
          <div className='d-flex w-max-1200 justify-content-between'>
          <div><h4 className=''>Funcionários das Residências</h4></div>
           <div>
           <Button
          onClick={() => setOpen1(!open1)}
          className='btn-sm'
          aria-expanded={open1}
        >
          <HiAdjustments/>
        </Button>
        <Button
          onClick={() => setOpen2(!open2)}
          className='btn-sm ms-1'
          aria-expanded={open2}
        >
          <HiOutlineUserCircle/>
        </Button>
        <Button className='btn-sm ms-1'>
          <HiRefresh/>
        </Button>
          </div>            
          </div>
          <Collapse className='w-max-1200' in={open1}>
            <div id="example-collapse-text">
              <div className="d-flex flex-row-reverse">
              <div className='d-flex'>
              <div className='input-group input-group-sm  me-3 rounded mt-2 w-100px input-group-data'>
              <span className="input-group-text" id="basic-addon1"><b>Estado</b></span>
              <Form.Select className='border-0 ' aria-label="Default select example">
                <option>Todas</option>
                <option value="1">Dentro do condominio</option>
                <option value="2">Fora do condominio</option>
              </Form.Select>
              </div>
              <div className="input-group input-group-sm rounded mt-2 input-group-data">
              <span className="input-group-text" id="basic-addon1"><b>De</b></span>
              <input type="date" className="form-control" placeholder="Username" />
              <span className="input-group-text" id="basic-addon1"><b>Ate</b></span>
              <input type="date" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group ms-3 input-group-sm rounded mt-2 input-group-data">
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todas quadra</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todos lotes</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select className='border-0' aria-label="Default select example">
                <option>Todos Funcionarios</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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
          <Collapse className='w-max-1200' in={open2}>
            <div id="example-collapse-text">
              <div className="d-flex flex-row-reverse">
              <div>
              <div className='input-group w-100px input-group-sm  rounded mt-2 w-280px input-group-data'>
              <span className="input-group-text" id="basic-addon1"><b>Porteiro</b></span>
              <Form.Select className='border-0 ' aria-label="Default select example">
                <option>Todos</option>
                <option value="1">Marcio Morais</option>
                <option value="2">Antonio Martins</option>
              </Form.Select>
              </div>
              </div>
              </div>
            </div>
          </Collapse>
          <div className='mt-4'>
          <div className="card border-0 card-table">
          <div className="card-body pb-2"></div>
              <div className='table-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>Residencia</th>
                      <th>Hora</th>
                      <th>Data</th>
                      <th>Estado</th>
                      <th className='text-right pe-4'>Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className='ps-4'>
                        <div className="vatar-tab">
                          <img src={marisa} alt="" />
                        </div>
                      </th>
                      <td>Marisa Francisco</td>
                      <td>Q21 - t25</td>
                      <td>12h:30m</td>
                      <td>20/09/2022</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-primary">Dentro do condomínio</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                        <IoEllipsisHorizontal/>
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={chiao} alt="" />
                      </div>
                      </th>
                      <td>Chiao Man</td>
                      <td>Q10 - t23</td>
                      <td>12h:30m</td>
                      <td>20/08/2022</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-danger">Fora do condomínio</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                        <IoEllipsisHorizontal/>
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={cassia} alt="" />
                      </div>
                      </th>
                      <td>Cassia Fernandes</td>
                      <td>Q30 - t23</td>
                      <td>12h:30m</td>
                      <td>20/09/2022</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-primary">Dentro do condomínio</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                        <IoEllipsisHorizontal/>
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={matheus} alt="" />
                      </div>
                      </th>
                      <td>Matheus Paulo</td>
                      <td>Q09 - t03</td>
                      <td>12h:30m</td>
                      <td>29/09/2022</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-danger">Fora do condomínio</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                        <IoEllipsisHorizontal/>
                      </Button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={paula} alt="" />
                      </div>
                      </th>
                      <td>Paula Maria</td>
                      <td>Q20 - t13</td>
                      <td>12h:30m</td>
                      <td>20/09/2022</td>
                      <td>
                      <span class="badge rounded-pill estado-bg-primary">Dentro do condomínio</span>
                      </td>
                      <td className='text-right pe-4'>
                      <Button className="btn btn-light p-0 m-0 " onClick={handleShow}>
                        <IoEllipsisHorizontal/>
                      </Button>
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
    <Modal show={show}  size="lg" backdrop="static" centered onHide={handleClose} className='border-0'>
    <Modal.Header closeButton className='border-0 pb-1'>
        <div>
        <h5 className='mt-1'>Detalhes</h5>
        </div>
      </Modal.Header>
      <Modal.Body className='border-0'>
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-4">
              <div className="card border">
                <div className="card-body">
                  <div className='d-flex mt-3 mb-3'>
                    <div className="avatar-mini">
                      <img src={matheus} alt="" />
                    </div>
                    <div className=' ms-2'>
                      <b>Matheus Fernandes</b><br />
                      <div className='font-size-12'>Porteiro</div>
                    </div>
                  </div>
                  <IoCalendarOutline/> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3'/> <font className='font-size-14'> 13h:30m</font><br />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal> 
  </div>
  );
}

export default Employees;