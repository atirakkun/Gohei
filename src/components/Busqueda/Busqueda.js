import React from "react";

export default function Busqueda() {
  return (
    <div className="row justify-content-md-center mb-4">
      <div className="col-auto">
        <div className="text-white">
          <div className="fs-3 row justify-content-md-center">部</div>Radicales
        </div>
      </div>
      <div className="col-6 my-2">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Significado, kanji o lectura"
          aria-label="Search field"
        ></input>
      </div>
      <div className="col-auto my-2">
        <button className="btn btn-lg btn-primary text-white">Buscar</button>
      </div>
    </div>
  );
}
