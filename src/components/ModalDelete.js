import route from './../helpers/apiroute';

function ModalDelete({ document, willUpdate }) {

  const deleteClient = async () => {
    const res = await fetch(`${route}/${document}`, {
      method: 'DELETE'
    });
    if (res.status === 200) {
      willUpdate();
    }
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">¿Deseas eliminar este cliente?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => { deleteClient() }}
              data-bs-dismiss="modal"
            >
              Sí, eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
