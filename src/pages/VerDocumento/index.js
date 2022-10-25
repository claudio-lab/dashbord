import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import samplePDF from './Laytou.pdf'
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
  HiOutlinePaperClip,
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
import { Modal, Button, } from 'react-bootstrap';

import {
  Card,
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

function VerDocumento() {
  const [open1, setOpen1] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
            <div className="container">
              <div className="card w-max-1200 border-0 card-body">
                <div className='d-flex justify-content-between'>
                  <div>
                    <Link to="/documents_" className="btn btn-primary btn-sm"><HiArrowSmLeft /> voltar</Link>
                    <button type="button" className="btn btn-light me-3 ms-3 btn-sm"><HiOutlineEyeOff /> Visualizada: 20</button>
                    <button type="button" className="btn btn-light btn-sm"><HiOutlineEye /> Não visualizada: 30</button>
                  </div>
                  {/*<div><h4 className=''>Detalhes Comunicados</h4></div>*/}
                  <div>
                    <Button
                      onClick={() => setOpen1(!open1)}
                      className='btn-sm'
                      aria-expanded={open1}
                    >
                      <HiAdjustments />
                    </Button>
                    <Button className='btn-sm ms-1'>
                      <HiRefresh />
                    </Button>
                    <Button className='btn-sm ms-1'>
                      <HiOutlinePaperClip /> Baixar arquivo
                    </Button>
                  </div>
                </div>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    <div className="d-flex flex-row-reverse">
                      <div className='d-flex'>
                        <div className="input-group input-group-sm w-280px rounded mt-2 border">
                          <select className="form-select border-0">
                            <option value="">Visto</option>
                            <option value="1">Nao visto</option>
                          </select>
                        </div>
                        <div className="input-group ms-3 input-group-sm rounded mt-2 ">
                          <input type="text" className="form-control border" placeholder="Pesquisar residencia" />
                        </div>
                        <div className="input-group ms-3 input-group-sm rounded mt-2 border ">
                          <select className="form-select border-0 ">
                            <option value="">Principal</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                          <select className="form-select border-0">
                            <option value="">Agregado</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        <div className='mt-2 ms-2'>
                          <button type="button" className="btn btn-primary btn-sm"><HiOutlineSearch /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>

              <div className='mt-4'>
                <div className="btn-group border-botton-right-0">
                  <Link to="/detalheDocoment" className="btn border-botton-right-0 btn-light-tabs " >Informações</Link>
                  <Link to="/verDocumento" className="btn border-botton-right-0 btn-light-tabs active" >Abrir arquivo</Link>
                </div>
                <div className="card border-0 border-botton-right-left-0 card-table">
                  <Document file={samplePDF}>
                    <Page pageNumber={1} />
                  </Document>
                  Page {pageNumber} of {numPages}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default VerDocumento;