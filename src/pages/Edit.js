import React from 'react'
import FormClient from './../components/FormClient';

function Edit() {
  return (
    <div className="app">
      <div className="container">
        <div className="row pt-4">
          <h1 className="text-white mt-5 col-md-10 is-h4">Editar cliente</h1>
        </div>
        <FormClient
          isCreate={false}
        />
      </div >
    </div>
  )
}

export default Edit
