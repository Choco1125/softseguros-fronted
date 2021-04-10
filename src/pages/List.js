import { useEffect, useState } from 'react';
import './gradien.css';
import { Link } from 'react-router-dom'
import CardClient from './../components/CardClient';


function List() {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getClients() {
      const res = await fetch('http://localhost:3100/api/clients');
      const data = await res.json();
      setClients(data);
    }
    getClients();
  }, [])

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
              <CardClient {...client} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default List
