import React, { useState, useEffect } from "react";
import * as _ from "lodash";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.scss";

import images from "./utils/imagesImport";
import dataFilm from "./assets/shows.json";
import ItemSlide from "./Components/ItemSlide";

export default function Carousel() {
  const [currHeight, setCurrHeight] = useState(0);
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });

  useEffect(() => {
    window.addEventListener("resize", _.debounce(resize, 100));

    setCurrHeight(window.innerWidth);

    function resize(event) {
      setCurrHeight(event.target.innerWidth);
    }

    if (currHeight >= 425) {
      setSettings({
        ...settings,
        centerMode: true,
      });
    }

    if (currHeight >= 768) {
      setSettings({
        ...settings,
        centerMode: true,
        slidesToShow: 2,
      });
    }

    if (currHeight >= 1440) {
      setSettings({
        ...settings,
        centerMode: true,
        slidesToShow: 3,
      });
    }

    return () => window.removeEventListener("resize", resize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currHeight]);

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
