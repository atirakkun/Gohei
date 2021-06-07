import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Busqueda() {
  return (
    <div className="row justify-content-center mb-4">
      <div className="col-auto">
        <button className="btn text-white btn-info p-1">
          <span className="fs-3 row justify-content-center">部</span>
          Radicales
        </button>
      </div>
      <div className="col-7 d-flex align-items-center">
        <div className="input-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Significado, kanji o lectura"
            aria-label="Search field"
          ></input>
          <button className="btn btn-lg btn-primary text-white">
            <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
