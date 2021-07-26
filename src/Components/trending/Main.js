import React from "react";
import Carousel from "./Components/Carousel/Carousel";
import MenuSelectFilm from "./Components/selectFilm/MenuSelectFilm";
import FilmsCatalog from "./Components/trendingFilm/FilmsCatalog";

export default function Main() {
  return (
    <main>
      <Carousel />
      <MenuSelectFilm />
      <FilmsCatalog />
    </main>
  );
}
