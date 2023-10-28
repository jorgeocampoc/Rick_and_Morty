
export const CardCharacter = ({ status, name, image, gender, origin, img }) => {
  return (
    <>
      <div>
        <div className="card">
          <div className="img1">
            <img src={img} alt="" className="card-img-top" />
          </div>
          <div className="img2">
            <img src={image} alt="" className="card-img-top" />
          </div>

          <div className="main-text ">
            <p className="card-text text-center  "><strong className="text-uppercase">{name} </strong></p>
            <p className="card-text"><strong className="text-uppercase">Genero:</strong> {gender} </p>
            <p className="card-text  ">
              <strong className="text-uppercase">Status:</strong>{" "}
              {status == "Alive" ? (
                <span  className="mt-2 ms-0 pe-2  ">
                  Alive
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="red"
                    className="bi bi-balloon-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      fill="red"
                      d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Z"
                    />
                    <path
                      fillRule="evenodd"
                      fill="red"
                      d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Z"
                    />
                  </svg>
                </span>
              ) : (
                <span className="mt-2 ms-0 pe-2">
                  {" "}
                  Dead
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="black"
                    className="bi bi-balloon-heart"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      fill="black"
                      d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Z"
                    />
                    <path
                      fillRule="evenodd"
                      fill="black"
                      d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Z"
                    />
                  </svg>
                </span>
              )}{" "}
            </p>
            <p>
              <strong className="text-uppercase">Origen:</strong>
              </p>
            <p className="card-text">{origin} </p>
          </div>
        </div>
      </div>
    </>
  );
};
