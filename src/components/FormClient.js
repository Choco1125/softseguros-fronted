import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from './../helpers/apiroute';

function FormClient({ isCreate }) {
  const history = useHistory()
  const { document } = useParams();

  const [client, setClient] = useState({
    document: "",
    fullname: "",
    birthdate: "",
    email: ""
  });

  useEffect(() => {
    if (!isCreate) {
      async function getClient() {
        const res = await fetch(`${api}/${document}`);
        const data = await res.json();
        data[0].birthdate = data[0].birthdate.split('T')[0];
        data[0].created_at = data[0].created_at.split('T')[0];
        setClient(data[0]);

      }
      getClient();
    }
  }, []);

  const handleChange = e => {
    setClient({
      ...client,
      [e.target.name]: e.target.value
    });
  }

  const saveClient = async () => {
    let method = isCreate ? "POST" : "PUT";
    let route = isCreate ? `${api}` : `${api}/${document}`

    const res = await fetch(route, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method,
      body: JSON.stringify(client)
    });
    const data = await res.json();
    if (res.status === 200 || res.status === 201) {
      history.push('/client/list');
    }
  }

  const comeBack = () => {
    history.push('/client/list');
  }

  return (
    <div className="row card justify-content-center p-5">
      <div className="row justify-content-around mt-3">
        <div className="col-md-8">
          <label htmlFor="fullname">Nombre</label>
        </div>
        <div className="col-md-4">
          <label htmlFor="document">Número de documento</label>
        </div>
      </div>
      <div className="row justify-content-around my-1">
        <div className="col-md-8">
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Nombre"
            onChange={e => { handleChange(e) }}
            value={client.fullname} />
        </div>
        <div className="col-md-4">
          <input t
            ype="number"
            name="document"
            className=
            "form-control"
            placeholder="Número de documento"
            onChange={e => { handleChange(e) }}
            value={client.document} />
        </div>
      </div>
      <div className="row justify-content-around mt-3">
        <div className="col-md-4">
          <label htmlFor="birthdate">Fecha de nacimiento</label>
        </div>
        <div className="col-md-8">
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row justify-content-around my-1 mb-4">
        <div className="col-md-4">
          <input
            type="date"
            name="birthdate"
            className="form-control"
            placeholder="Fecha de nacimiento"
            onChange={e => { handleChange(e) }}
            value={client.birthdate.split('T')[0]} />
        </div>
        <div className="col-md-8">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            onChange={e => { handleChange(e) }}
            value={client.email} />
        </div>
      </div>
      <hr />
      <div className="row justify-content-end">
        <button
          className="btn btn-danger col-md-2 mx-1"
          onClick={() => comeBack()}
        >
          Cancelar
        </button>
        <button
          className="btn btn-primary col-md-2 mx-1"
          onClick={() => saveClient()}>
          Guardar
        </button>
      </div>
    </div>
  )
}

export default FormClient
