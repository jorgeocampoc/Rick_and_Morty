import React from "react";

export const CardChapter = ({ id, name, episode, air_date }) => {
  return (
    <>
      <div className="card -dark opacity-custom border-success ">
        <div className="card-body">
          <h5 className="card-title"><strong>{id}. </strong> {name}</h5>
          <hr />
          <p className="card-text">
            <strong>Episodio:</strong> {episode}
          </p>
          <p className="card-text">
            <strong>Estreno:</strong> {air_date}
          </p>
        </div>
      </div>
    </>
  );
};
