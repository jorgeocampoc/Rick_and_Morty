import { UseCounter } from "../hooks/Counter";
import { UseFetchCharacters } from "../hooks/UseFetchCharacters";


 export  const  Pagination =  () => {
          const {counter, dec, inc} = UseCounter(); 
          const { characters, isLoading } = UseFetchCharacters(counter);

  return (
    <div className="titulo ">
      
      <nav>
        <ul className="pagination justify-content-center grid gap-3">
          <button type="button" className="btn btn-dark border border-success " onClick={()=>dec()}  disabled={isLoading}>
              Anterior
            </button>
          <li className="page-item ">
            <span className="page-link text-dark rounded-circle " href="#">
              {counter}
            </span>
          </li>
          <li className="page-item p-2" >
          <div className="container border border-dark">de</div>
          </li>
          <li className="page-item">
            <span className="page-link text-dark rounded-circle" href="#" >
              42
            </span>
          </li>
          <li className="page-item">
            <button type="button" className="btn btn-dark border border-success" onClick={()=>inc()} disabled={isLoading} >
              
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
