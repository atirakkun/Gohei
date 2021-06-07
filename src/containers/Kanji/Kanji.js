import React from "react";
import { Link } from "react-router-dom";
import Popper from "../../components/Popper/Popper";
import Header from "../../components/Header/Header";
import Busqueda from "../../components/Busqueda/Busqueda";
import Strokes from "../../assets/strokes/都.svg";

export default function Kanji() {
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      e.target.parentElement.scrollLeft += 100;
    } else {
      e.target.parentElement.scrollLeft -= 100;
    }
  };
  const raw =
    "Cuando estás en una **ciudad** tan grande que la *muralla* que la rodea tiene que ser protegida por *marionetas*, estás en una **metrópolis**.";
  const mnemotecnia = raw
    .replace(
      /\*{2}([A-Za-zÁÉÍÓÚáéíóúñÑ]+)\*{2}/gu,
      '<span class="kanji-meaning">$1</span>'
    )
    .replace(
      /\*([A-Za-zÁÉÍÓÚáéíóúñÑ]+)\*/g,
      '<span class="kanji-radical">$1</span>'
    );
  return (
    <div className="container text-white">
      <Header />
      <Busqueda />
      <div className="row justify-content-center mt-5">
        <div className="col-3 col-lg-2 d-flex flex-column align-items-center">
          <div className="kanji fw-bold mb-4">都</div>
          <div className="fs-5 kanji-bar">
            <span className="fw-bold">Partes:</span> 者 阝
          </div>
          <div className="fs-5 kanji-bar">
            <span className="fw-bold">Radical:</span> 阝
          </div>
          <div className="fs-5 kanji-bar">
            <span className="fw-bold">Trazos:</span> 11
          </div>
          <div className="fs-5 kanji-bar">
            <span className="fw-bold">JLPT:</span> N3
          </div>
          <div className="kanji-bar dropdown mt-2">
            <button
              className="btn btn-secondary dropdown-toggle text-white"
              type="button"
              id="dropdownFollow"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Aprendiendo
            </button>
            <ul
              className="dropdown-menu dropdown-menu-dark"
              aria-labelledby="dropdownFollow"
            >
              <li>
                <button className="dropdown-item">Aprendiendo</button>
              </li>
              <li>
                <button className="dropdown-item secundario">Estudiado</button>
              </li>
              <li>
                <button className="dropdown-item exito">Perfeccionado</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-7">
          <div className="fs-1 fw-bold">Metrópolis</div>
          <div className="fs-3 text-white-50">Ciudad, Capital</div>
          <div
            className="lh-lg mt-2"
            dangerouslySetInnerHTML={{ __html: mnemotecnia }}
          ></div>
          <div className="mt-3">
            <div className="fs-4 mb-1">Orden:</div>
            <div className="w-100 strokes" onWheel={handleScroll}>
              <img src={Strokes} alt="strokeOrder" />
            </div>
          </div>
          <div className="mt-4">
            <h3 className="fw-bold border-bottom border-info border-2">
              LECTURAS
            </h3>
            <div className="d-flex">
              <h4 className="me-2">Onyomi: </h4>
              <p className="fs-5">ト, ツ</p>
            </div>
            <div className="d-flex">
              <h4 className="me-2">Kunyomi: </h4>
              <p className="fs-5">みやと</p>
            </div>
          </div>
          <div className="">
            <div className="mt-3">
              <h3 className="fw-bold border-bottom border-info border-2">
                VOCABULARIO
              </h3>
              <div className="d-flex flex-wrap">
                <Link
                  to="/vocabulario/都市"
                  className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                >
                  都市
                </Link>
                <Link
                  to="/vocabulario/都会"
                  className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                >
                  都会
                </Link>
                <Link
                  to="/vocabulario/都心"
                  className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                >
                  都心
                </Link>
                <Link
                  to="/vocabulario/都営"
                  className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                >
                  都営
                </Link>
                <Popper name="Algo">
                  <Link
                    to="/vocabulario/都立"
                    className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                  >
                    都立
                  </Link>
                </Popper>
                <Link
                  to="/vocabulario/都庁"
                  className="btn btn-primary d-inline-flex justify-content-center m-1 previewBox fs-3 text-white rounded"
                >
                  都庁
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
