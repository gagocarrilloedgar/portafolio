import React from "react";
import "../../styles/views/index.css";

const IndexMain = () => {
  return (
    <div className="card-title">
      <div className="box-index">
        <div className="title-index">El único portfolio que vas a necesitar</div>

        <div className="description-index">
          Crea una un CV online único para destacar
        </div>
        <div className="subtitle-index">
          Comparte todos tus proyectos de forma fácil con solo un link y en una
          página simple y elegante
        </div>
        <button
          onClick={() => (window.location = "/login")}
          className="button-index"
        >
          Empieza ahora gratis
        </button>
      </div>
    </div>
  );
};

export default IndexMain;
