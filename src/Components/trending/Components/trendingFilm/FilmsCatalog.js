import React from "react";
import CardFilm from "./Components/CardFilm";
import "./filmCatalog.scss";

export default function FilmsCatalog() {
  return (
    <section className="wrapper__filmCatalog">
      <CardFilm />
      <CardFilm />
    </section>
  );
}
