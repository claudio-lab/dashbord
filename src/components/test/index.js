import React, { useState, useEffect } from 'react';
import { HiOutlinePlusSm} from "react-icons/hi";
import { Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { api } from './../../services/api';


function Typology() {

  const [typologies, setTypologies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSubmitTypology, setLoadingSubmitTypology] = useState(false);
  const [typology, setTypology] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    getTypologies();
  }, []);

  {/* -------- */}
  async function getTypologies() {
    try {
      const response = await api.get('v1/listTipologias/1');
      setTypologies(response.data);

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
  {/* -------- */}

  async function handleSaveTypology(condominio_id) {
    try {
      setLoadingSubmitTypology(true);
      if (!typology) return alert('Tipologia é obrigatório!');

      const data = {
        tipologia: typology,
        condominio_id: condominio_id
      }

      const response = await api.post('v1/addTipologia', data);

      if (response.data.success) {
        alert(response.data.msg);
      }

      handleClose();
      getTypologies();
      setLoadingSubmitTypology(false);
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
      setLoadingSubmitTypology(false);
    }
  }

  return (
    <>
    {
      !loading ?
        typologies?.data?.map(employee => (
         <tr key={employee.id}>
          <th scope="row" className='ps-4'>
            {employee.name}
          </th>
        </tr>
      )):<>....</>}

    <Form.Control type="text" required placeholder="Tipologia" onChange={(event) => setTypology(event.target.value)}/>
      <Button variant="primary" onClick={() => handleSaveTypology(1)} className='btn-sm'> Adicionar </Button>
    </>
  );
}

export default Typology;