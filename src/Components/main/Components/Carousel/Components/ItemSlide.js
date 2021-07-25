import React from "react";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";

export default function ItemSlide({ img, name, genres, year, rating }) {
  console.log(genres);

  return (
    <div className="wrapperCardFilm">
      <button className="js-btn__addToQueue">
        <BookmarkBorderRoundedIcon />
      </button>

      <div className="rating__description--cardFilm">
        <StarOutlineRoundedIcon />{" "}
        <span className="description__rating--cardFilm">{rating}</span>
      </div>

      <img src={img} alt={name} className="img_film--cardFilm" />

      <div className="info__film--cardFilm">
        <h1 className="title__film--cardFilm">
          {name.length > 20 ? name.substring(0, 10) + "..." : name}
        </h1>

        <ul className="menu__genres--cardFilm">
          {genres.map((item, idx) => (
            <li className="liItem--cardFilm" key={idx}>
              {item}
            </li>
          ))}

          <li className="liItem--cardfilm year__film--cardFilm">{year}</li>
        </ul>
      </div>
    </div>
  );
}
