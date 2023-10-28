import React from 'react'

export const FooterSearch = ({counter, dec, inc, info}) => {

    const { pages, next, prev } = info
  
    

    const disabledNext = () =>{
        if( pages === 1){
            return true;
        }else if( next === null ){
            return true
        }
    }

    const sidablePrev = () =>{
        if( pages == 1 ){
            return true;
        }else if( prev === null ){
                return true
        }
    }

  return (
   <>
    <footer className="footer fixed  ">
          <nav className=''>
            <ul className="pagination justify-content-center grid gap-3">
              <button
                type="button"
                className="btn btn-dark border border-success  "
                onClick={() => dec()}
                disabled= {sidablePrev()}
              >
                Anterior
              </button>

           
              <li className="page-item">
                <button
                  type="button"
                  className="btn btn-dark border border-success "
                  onClick={() => inc()}
                  disabled = {disabledNext()}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </footer>
   </>
)}
