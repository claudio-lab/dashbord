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
  HiOutlinePaperClip
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
function Documents_() {
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
          <div><h4 className=''>Documentos</h4></div>
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
              <input type="text" class="form-control"  placeholder="Pesquisar titulo"/>
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
          <div className="card border-0 card-table">
          <div className="card-body pb-2"></div>
              <div className='table-h'>
                <table className="table">
                  <thead>
                    <tr>
                    <th className='ps-4'>Avatar</th>
                      <th>Nome</th>
                      <th>função</th>
                      <th>Titulo</th>
                      <th>Data e hora</th>
                      <th>Anexo</th>
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
                      <td>Q32-t43 C34</td>
                      <td>20/04/2022 - 10h:30m</td>
                      <td><HiOutlinePaperClip className='HiDD'/></td>
                      <td className='text-right pe-4'>
                      <Link to="/detalheDocoment" className='btn btn-light p-0 rounded-pill'><HiOutlineEye/></Link>
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
                      <td>Q32-t43 C34</td>
                      <td>20/04/2022 - 12h:30m</td>
                      <td><HiOutlinePaperClip className='HiDD'/></td>
                      <td className='text-right pe-4'>
                         <Link to="/detalheDocoment" className='btn btn-light p-0 rounded-pill'><HiOutlineEye/></Link>                      
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
                      <td>Q32-t43 C34</td>
                      <td>10/02/2022 - 10h:20m</td>
                      <td><HiOutlinePaperClip className='HiDD'/></td>
                      <td className='text-right pe-4'>
                         <Link to="/detalheDocoment" className='btn btn-light p-0 rounded-pill'><HiOutlineEye/></Link>                      
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
                      <td>Q32-t43 C34</td>
                      <td>23/04/2022 - 22h:10m</td>
                      <td><HiOutlinePaperClip className='HiDD'/></td>
                      <td className='text-right pe-4'>
                         <Link to="/detalheDocoment" className='btn btn-light p-0 rounded-pill'><HiOutlineEye/></Link>                      
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className='ps-4'>
                      <div className="vatar-tab">
                          <img src={paula} alt="" />
                      </div>
                      </th>
                      <td>Paula Maria</td>
                      <td>Maquiadora</td>
                      <td>Q32-t43 C34</td>
                      <td>20/04/2022 - 20h:30m</td>
                      <td><HiOutlinePaperClip className='HiDD'/></td>
                      <td className='text-right pe-4'>
                         <Link to="/detalheDocoment" className='btn btn-light p-0 rounded-pill'><HiOutlineEye/></Link>                      
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

export default Documents_;