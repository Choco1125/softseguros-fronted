import React from 'react'
import FormClient from './../components/FormClient';

function Create() {
  return (
    <div className="app">
      <div className="container">
        <div className="row pt-4">
          <h1 className="text-white mt-5 col-md-10 is-h4">Nuevo cliente</h1>
        </div>
        <FormClient
          isCreate={true}
        />
      </div >
    </div>
  )
}

export default Create
