import { useEffect, useState } from "react";

export const ModalForm = ({ formStater}) => {
  const [formState, setFormState] = useState({
    name: "",
    gender: "",
    status: "",
  });
  const { name, status, gender } = formState;

  const handleinput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const onSave = () =>{
    formStater(formState);
 
  }


  return (
    <div className="container text-center">
      <button
        type="button"
        className="btn btn-primary "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Buscar
      </button>

      <div
        className="modal fade border "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-secondary">
            <div className="modal-header ">
              <h1 className="">Busca tu personaje</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body text-start ">
              <div className="container b-2">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control "
                  value={name || ""}
                  onChange={handleinput}
                  // value={name || ''}
                />
              </div >

              {/* <div className="container pt-3 pb-2 row  ">
                <label htmlFor=""> Genero: </label>
                <div className="col">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleinput}
                />
                <label className="px-2" htmlFor="female">Femenino</label>
                </div>

                <div className="col">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleinput}
                />
                <label className="px-2" htmlFor="male">Masculino</label>
                </div>
              </div> */}

              <div className="container row  ">
                <label  htmlFor="">Status:</label>
                <div className="col ">
                <input
                  type="radio"
                  name="status"
                  id="alive"
                  value="alive"
                  checked={status === "alive"}
                  onChange={handleinput}
                  className=" "
                />
                <label className=" px-2" htmlFor="alive">Vivo</label>
                </div>

               <div className="col">
               <input
                  type="radio"
                  name="status"
                  id="dead"
                  value="dead"
                  checked={status === "dead"}
                  onChange={handleinput}
                />
                <label className="px-2" htmlFor="dead">Muerto</label>
               </div>
              </div>
            </div>

            <div className="modal-footer ">
              <div className="container">
              <button type="button" onClick={onSave} className="btn btn-primary" data-bs-dismiss="modal">
                Buscar
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
