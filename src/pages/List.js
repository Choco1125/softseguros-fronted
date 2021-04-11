import { useEffect, useState } from 'react';
import './gradien.css';
import { Link } from 'react-router-dom'
import CardClient from './../components/CardClient';
import ModalDelete from './../components/ModalDelete';
import route from './../helpers/apiroute';

function List() {

  const [clients, setClients] = useState([]);
  const [currentDocument, setCurrentDocument] = useState('');
  const [update, setUpdate] = useState(false)

  const handleDocument = (document) => {
    setCurrentDocument(document);
  }

  const willUpdate = () => {
    setUpdate(!update);
  }

  useEffect(() => {
    async function getClients() {
      const res = await fetch(route);
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        setClients(data);
      } else {
        setClients([]);
      }
    }
    getClients();
  }, [update]);

  return (
    <div className="app">
      <div className="container">
        <div className="row justify-content-around pt-4">
          <h1 className="text-white mt-5 col-md-10 is-h4">Listado de clientes</h1>
          <Link className="col-lg-2 mt-5" to="/client/create">
            <button className="btn btn-primary">
              <i className="bi bi-plus"></i>
                Nuevo cliente
            </button>
          </Link>
        </div>
        <div className="row card justify-content-center p-2">
          <div className="col-11 mx-auto my-1 p-1">
            <input type="search" className="form-control p-2" placeholder="Buscar..." />
          </div>
          {
            clients.map(client => (
              <CardClient
                document={client.document}
                fullname={client.fullname}
                birthdate={client.birthdate}
                created_at={client.created_at}
                email={client.email}
                handleDocument={handleDocument}
              />
            ))
          }
        </div>
      </div>
      <ModalDelete
        document={currentDocument}
        willUpdate={willUpdate}
      />
    </div>
  )
}

export default List
