import React from "react";
import Header from "../../components/Header/Header";
import Strokes from "../../assets/strokes/都.svg";

export default function Kanji() {
  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      e.target.parentElement.scrollLeft += 100;
    } else {
      e.target.parentElement.scrollLeft -= 100;
    }
  };

  return (
    <div className="container text-white">
      <Header />
      <div className="row">
        <div className="col-3 d-flex flex-column">
          <div className="kanji fw-bold mb-4 align-self-center">都</div>
          <div className="fs-5">Componentes: 阝,者</div>
          <div className="fs-5">Radical: 阝</div>
          <div className="fs-5">Trazos: 11</div>
          <div className="fs-5">JLPT Noken: 3</div>
        </div>
        <div className="col-9">
          <div className="fs-1 fw-bold">Metropolis</div>
          <div className="fs-3">Ciudad, Capital</div>
          <div className="">
            Cuando tienes una ciudad tan grande que la muralla que la rodea
            tiene que ser protegida por marionetas, estás en una metrópolis.
          </div>
          <div className="mb-3">
            Orden: <br />
            <div className="w-100 strokes" onWheel={handleScroll}>
              <img src={Strokes} alt="strokeOrder" />
            </div>
          </div>
          <div className="fs-4">Onyomi: ト, ツ</div>
          <div className="fs-4">Kunyomi: みやと</div>
          <div className="">
            <div className="fs-3">Vocabulario</div>
          </div>
        </div>
      </div>
    </div>
  );
}
