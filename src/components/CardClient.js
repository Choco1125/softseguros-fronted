import React from 'react'
import { Link } from 'react-router-dom';

function CardClient({ document, fullname, created_at, email, birthdate, handleDocument }) {
  return (
    <div>
      <div className="card col-12 my-2 border-0 border-bottom col-md-11 mx-auto">
        <div className="card-body">
          <div className="row justify-content-around">
            <span className="col-md-9 h5">{fullname}</span>
            <span className="col-md-3 text-end">{created_at.split('T')[0]} | {birthdate.split('T')[0]}</span>
          </div>
          <div className="row justify-content-around">
            <span className="col-md-10">{email}</span>
            <span className="col-md-2 text-end d-flex justify-content-around">
              <button
                className="btn btn-btn-sm btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => { handleDocument(document) }}
              >
                <i class="bi bi-trash"></i>
              </button>
              <Link to={`/client/edit/${document}`} className="btn btn-btn-sm btn-primary">
                <i class="bi bi-pencil"></i>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardClient
