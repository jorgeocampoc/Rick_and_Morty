import React from 'react'

export const Footer = ({isLoading, dec, inc, counter, finalIndex}) => {
  return (
    <div className="titulo ">
        <footer className="footer  fixed">
          <nav>
            <ul className="pagination justify-content-center grid gap-3">
              <button
                type="button"
                className="btn btn-dark border border-success  "
                onClick={() => dec()}
                disabled={isLoading}
              >
                Anterior
              </button>

              <li className="page-item ">
                <span className="page-link text-dark rounded-circle " href="#">
                  {counter || 0}
                </span>
              </li>
              <li className="page-item p-2">
                <div className="container border border-dark">de</div>
              </li>
              <li className="page-item">
                <span className="page-link text-dark rounded-circle" href="#">
                  {finalIndex || 0}
                </span>
              </li>
              <li className="page-item">
                <button
                  type="button"
                  className="btn btn-dark border border-success "
                  onClick={() => inc()}
                  disabled={isLoading  }
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </footer>

        {/* <div className="d-flex align-items-center">
            <input  type="text" class="form-control"  />
            <button className="btn btn-primary go">Ir</button>
        </div> */}
      </div>
  )
}
