import { useState } from "react";
import { Footer } from "../components/Footer";
import { ModalForm } from "../components/ModalForm";
import { UseFetchSearch } from "../hooks/UseFetchSearch";
import { CardCharacter } from "../components/CardCharacter";
import { IsLoading } from "../components/IsLoading";
import { UseCounter } from "../hooks/Counter";
import { FooterSearch } from "../components/FooterSearch";

export const FindCharacter = () => {
  const [data, setData] = useState({
    name: "",
    status: "",
    gender: "",
    page: "",
  });
  const { name, status, gender, page } = data;
  const handleForm = (data) => {
    setData(data);
    reset();
  };
  const { counter, inc, dec, reset } = UseCounter();
  const { character, info, isLoading } = UseFetchSearch(
    name,
    status,
    gender,
    counter
  );
  const { pages, next, prev } = info;

  return (
    <>
      <ModalForm formStater={handleForm} />
      <div className="container ">
        <div className="container">
          {isLoading ? (
            <IsLoading />
          ) : character.length === 0 ? (
            <div
              className="alert alert-primary d-flex justify-content-center  "
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="orange"
                className="bi bi-exclamation-triangle-fill"
                viewBox="0 0 16 16"
                role="img"
                aria-label="Warning:"
              >
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.980 1.767h13.713c.889 0 1.438-.99.980-1.767L8.982 1.566zM8 5c.535 0 .954.462.900.995l-.350 3.507a.552.552 0 0 1-1.1 0L7.100 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <div className="mt-1 ms-3 ">Personaje no encontrado</div>
            </div>
          ) : (
            <div className=" row mb-5">
              {character.map((character) => {
                return (
                  <div className="col-md-3 mb-3" key={character.id}>
                    <CardCharacter
                      name={character.name}
                      image={character.image}
                      gender={character.gender}
                      status={character.status}
                      origin={character.origin}
                      img={character.img}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <FooterSearch counter={counter} dec={dec} inc={inc} info={info} />
      </div>
    </>
  );
};
