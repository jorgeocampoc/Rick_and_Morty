
export const Pagination = () => {
  return (
    <div className="titulo">
      <nav >
        <ul class="pagination justify-content-center">
          <button type="button" className="btn btn-primary" >
              Anterior
            </button>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link active" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <button type="button" className="btn btn-primary" >
              
              Siguiente
            </button>
          </li>
        </ul>
      </nav>

      {/* <div className="d-flex align-items-center">
            <input  type="text" class="form-control"  />
            <button className="btn btn-primary go">Ir</button>
        </div> */}
    </div>
  );
};
