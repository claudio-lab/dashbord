import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Menu } from '../../components/Menu';
import {
  Link
} from "react-router-dom";
import { format } from 'date-fns';
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
import { Modal, Button, } from 'react-bootstrap';

import {
  Card,
  Table,
  Dropdown,
  Collapse,
  Form,
  Spinner
} from 'react-bootstrap';

import { api } from '../../services/api';

function DetalhesReclamacao() {

const [appointments, setAppointments] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  getAppointments();
}, []);

async function getAppointments() {
  try {
    const response = await api.get('v1/list_reclamacao_c/1/0000');
    setAppointments(response.data);

    setLoading(false);
  } catch (error) {
    if (error.message === "Network Error") {
      console.log("Por favor verifique sua conexão com a internet!");
    } else if (error.message === "Request failed with status code 401") {
      console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
    } else if (error.message === "Request failed with status code 400") {
      console.log("Erro ao carregar cursos, por favor, tente recarregar a página!");
    } else if (error.status === 500) {
      console.log("Erro interno, por favor, contactar o suporte!");
    }
    setLoading(false);
  }
}
 

  return (
    <div className="dashboard">
      <main className='d-flex'>
        <Menu />
        <section className='w-100 h-100 height-overflow'>
          <MenuTop />
          <div className="p-4">
          
            <div className="container">
            <div><h4 className='mb-3'>Detalhe reclamacao</h4></div>
            {
            !loading ?
            appointments?.data?.map(appointment => (
              <div key={appointment.id} className="card border-0 card-body mb-5">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={appointment.foto} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{appointment.nome}</h5>
                    <p className="card-text">
                      <b>Titulo</b>: {appointment.title} <br />
                      <b>Descrição</b>: {appointment.description} <br />
                      <b>Departamento</b>: {appointment.department} <br />
                      <b>Numero</b>: {appointment.telefone} <br />
                      <b>Estado</b>: {
                                    (appointment.status === '0') ?
                                      <span className="badge rounded-pill estado-bg-danger">Cancelado</span>
                                      : (appointment.status === '1') ? <span className="badge rounded-pill estado-bg-warning">Expirado</span>
                                        : (appointment.status === '2') ? <span className="badge rounded-pill estado-bg-primary">Agendado</span>
                                          : (appointment.status === '3') ? <span className="badge rounded-pill estado-bg-secondary">No condomínio </span>
                                            : <span className="badge rounded-pill estado-bg-success">Concluído</span>
                                  }<br />
                    <b>Anexo</b>: {appointment.reclamacoes_anexo} <br />
                    <b>Historico</b>: {appointment.historico}
                    </p>
                    <p className="card-text"><small className="text-muted">Numero de ocorrencia: {appointment.occurrence_number}</small></p>
                  </div>
                </div>
              </div>
              </div>
            )):<>....</>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetalhesReclamacao;