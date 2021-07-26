import React, { useState, useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import "./selectFilm.scss";
import getMoviesGenres from "./utils/getMoviesGenres";
import { connect } from "react-redux";
import { ADD_GENRES } from "../../../../key/namesDispatch";
import SlideText from "./SlideText";

function MenuSelectFilm({ genres, addGenresHandler }) {
  const [toggleMenuRadio, setToggleMenuRadio] = useState(false);
  const [currGenre, setCurrGenre] = useState("All Genres");
  const [selectedMovie, setSelectedMovie] = useState("Featured");

  const handleToggleMenu = () => {
    setToggleMenuRadio(!toggleMenuRadio);
  };

  const actionClickWindow = (event) => {
    if (event.target.nodeName === "SPAN") {
      return;
    }
    if (!event.target.value) {
      setToggleMenuRadio(false);
      return;
    }
  };

  const changeCurrGenreHandler = (event) => {
    setCurrGenre(event.target.textContent);
  };

  const onChnageHandleToggle = (currContent) => {
    setSelectedMovie(currContent);
  };

  window.addEventListener("click", actionClickWindow);

  useEffect(() => {
    getMoviesGenres().then((data) => addGenresHandler(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("click", actionClickWindow);
    };
  });

  return (
    <div className="wrapper__menu--selectFilm">
      <div className="row__menu--selectFilm">
        <div className="wrapp__customSelect--selectFilm">
          <button
            className="js-btn__toggleSelect--selectFilm"
            onClick={handleToggleMenu}
            value="false"
          >
            {currGenre}
            <input
              type="checkbox"
              id="arrow"
              className="js-input__checkbox--selectFilm"
              checked={toggleMenuRadio}
              onChange={handleToggleMenu}
            />{" "}
            <label htmlFor="arrow" className="arrow__dropDown--selectFilm">
              <KeyboardArrowDownRoundedIcon />
            </label>
          </button>
        </div>

        <div className="slide__radio--selectFilm">
          <SlideText
            selectedMovie={selectedMovie}
            onChnageHandleToggle={onChnageHandleToggle}
          />
        </div>

        <aside
          className={
            toggleMenuRadio
              ? "hidden__selectGenre--selectFilm hidden__selectGenre__active--selectFilm"
              : "hidden__selectGenre--selectFilm"
          }
        >
          <span
            className={
              currGenre === "All Genres"
                ? "liItem__genre--selectFilm liItem__genreActive--selectFilm"
                : "liItem__genre--selectFilm"
            }
            onClick={changeCurrGenreHandler}
          >
            All Genres
          </span>

          {genres.length > 0 &&
            genres.map(({ id, name }) => (
              <span
                key={id}
                className={
                  currGenre === name
                    ? "liItem__genre--selectFilm liItem__genreActive--selectFilm"
                    : "liItem__genre--selectFilm"
                }
                onClick={changeCurrGenreHandler}
              >
                {name}
              </span>
            ))}
        </aside>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  addGenresHandler: (genresList) =>
    dispatch({ type: ADD_GENRES, payload: genresList }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuSelectFilm);
