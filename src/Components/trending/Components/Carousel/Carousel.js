import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

import images from "./utils/imagesImport";
import dataFilm from "./assets/shows.json";
import ItemSlide from "./Components/ItemSlide";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="wrapperCarousel">
      <Slider {...settings}>
        {dataFilm.map(({ id, name, genres, year, rating }, idx) => (
          <ItemSlide
            key={id}
            img={images[idx]}
            name={name}
            genres={genres}
            year={year}
            rating={rating}
          />
        ))}
      </Slider>
    </div>
  );
}
