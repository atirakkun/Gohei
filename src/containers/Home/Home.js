import React from "react";
import Header from "../../components/Header/Header";
import Busqueda from "../../components/Busqueda/Busqueda";
import LearnPreview from "../../components/LearnPreview/LearnPreview";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Busqueda />
      <LearnPreview />
    </div>
  );
}
