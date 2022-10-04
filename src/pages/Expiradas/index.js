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
  HiOutlineEye
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



function Expiradas() {
  const [open1, setOpen1] = useState(false);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu/>
        <section className='w-100 h-100 height-overflow'>
          <MenuTop/>
        <div className="p-4">
            <div className="container">
            <div className='d-flex justify-content-between'>
            <div><h4 className=''>Visitantes</h4></div>
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
                  <option>Todos moradores</option>
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
            <div className='mt-4'>
            <div className="btn-group border-botton-right-0">
              <Link to="/visitors" className="btn border-botton-right-0 btn-light-tabs" >Todas</Link>
              <Link to="/agendadas" className="btn border-botton-right-0 btn-light-tabs">Agendadas</Link>
              <Link to="/condominio" className="btn border-botton-right-0 btn-light-tabs">No condomínio</Link>
              <Link to="/concluido" className="btn border-botton-right-0 btn-light-tabs">Concluido</Link>
              <Link to="/cancelados" className="btn border-botton-right-0 btn-light-tabs">Cancelados</Link>
              <Link to="/expiradas" className="btn border-botton-right-0 btn-light-tabs active">Expiradas</Link>
            </div>
            <div className="card border-0 border-botton-right-left-0 card-table">
            <div className="card-body pb-2"></div>
                <div className='table-h'>
                  <table className="table">
                    <thead>
                      <tr>
                      <th className='ps-4'>Avatar</th>
                        <th>Morador</th>
                        <th>Visitante</th>
                        <th>Residencia</th>
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
                        <td>Marco Mateus</td>
                        <td>Q20 - t23</td>
                        <td>20/09/2022</td>
                        <td>
                        <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                        </td>
                        <td className='text-right pe-4'>
                        <Button className="btn btn-light p-0 m-0 " onClick={handleShow2}>
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
                        <td>Carla fernandes</td>
                        <td>Q24 - T23</td>
                        <td>20/08/2022</td>
                        <td>
                        <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                        </td>
                        <td className='text-right pe-4'>
                        <Button className="btn btn-light p-0 m-0 " onClick={handleShow2}>
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
                        <td>Danel Filipe</td>
                        <td>Q34 - T21</td>
                        <td>20/09/2022</td>
                        <td>
                        <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                        </td>
                        <td className='text-right pe-4'>
                        <Button className="btn btn-light p-0 m-0 " onClick={handleShow2}>
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
                        <td>Ana Maria</td>
                        <td>Q23 - T23</td>
                        <td>29/09/2022</td>
                        <td>
                        <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                        </td>
                        <td className='text-right pe-4'>
                        <Button className="btn btn-light p-0 m-0 " onClick={handleShow2}>
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
                        <td>Maria fernandes</td>
                        <td>Q20 - T33</td>
                        <td>20/09/2022</td>
                        <td>
                        <span class="badge rounded-pill estado-bg-warning">Expirado</span>
                        </td>
                        <td className='text-right pe-4'>
                        <Button className="btn btn-light p-0 m-0 " onClick={handleShow2}>
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

      <Modal show={show2}  size="lg" backdrop="static" centered onHide={handleClose2} className='border-0'>
        <Modal.Header closeButton className='border-0 pb-1'>
          <div>
          <h5 className='mt-1'>Detalhes</h5>
          <div className="ss"><span class="badge rounded-pill estado-bg-warning">Expirado</span></div>
          </div>
        </Modal.Header>
        <Modal.Body className='border-0'>
          <div className="container p-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="card border">
                  <div className="card-body">
                    <div className=""><span class="badge rounded-pill estado-bg-primary">Agendado</span></div>
                    <div className='d-flex mt-3 mb-3'>
                      <div className="avatar-mini">
                        <img src={cassia} alt="" />
                      </div>
                      <div className=' ms-2'>
                        <b>Cassia Fernandes</b><br />
                        <div className='font-size-12'>Morador</div>
                      </div>
                    </div>
                    <IoCalendarOutline/> <font className='font-size-14'>24/05/2022</font> <IoTimeOutline className='ms-3'/> <font className='font-size-14'> 13h:30m</font><br />
                    <IoPersonOutline/> <font className='font-size-14'>Carla Fernandes</font><br />
                    <IoAlertCircleOutline/> <font className='font-size-14'>visita familiar</font><br />
                    <IoClipboardOutline/> <font className='font-size-14'>Sem obs</font>
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

export default Expiradas;