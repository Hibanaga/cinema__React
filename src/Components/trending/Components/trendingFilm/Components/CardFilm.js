import React from "react";
import img from "../1.png";

export default function CardFilm() {
  return (
    <div className="wrapper__card--cardFilm">
      <div className="wrapper__infoFilm--cardFilm">
        {/* <div className="icons__action--cardFilm">

        </div> */}

        <img src={img} alt="" className="img__card--cardFilm" />
      </div>
      <div className="wrapp__description--cardFilm">
        <h2 className="title__card--cardFilm">The Dictator</h2>

        <ul className="menu__genres--cardFilm">
          <li className="liItem__card--cardFilm">Free</li>
          <li className="liItem__card--cardFilm">Action</li>
          <li className="liItem__card--cardFilm">2019</li>
        </ul>
      </div>
    </div>
  );
}

// 14 length name
