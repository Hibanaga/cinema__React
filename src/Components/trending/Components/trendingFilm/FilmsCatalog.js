import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardFilm from "./Components/CardFilm";
import * as _ from "lodash";

import { ADD_FILM, ADD_LOADMORE } from "../../../../key/namesDispatch";
import requestAPI from "./utils/fetchingFilms";

import AOS from "aos";
import "aos/dist/aos.css";
import "./filmCatalog.scss";

import getMoviesGenres from "../selectFilm/utils/getMoviesGenres";
import { ADD_GENRES } from "../../../../key/namesDispatch";

function FilmsCatalog({
  films,
  currGenre,
  addFilmsHandler,
  addLoadMoreFilmsHandler,
  setGenresHandler,
}) {
  const [currPage, setCurrPage] = useState(1);
  const [currWidth, setCurrWidth] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getMoviesGenres().then((data) => setGenresHandler(data));
    setCurrWidth(window.innerWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("resize", _.debounce(resize, 100));

    function resize(event) {
      setCurrWidth(event.target.innerWidth);
    }

    return () => window.removeEventListener("resize", resize);
  }, [currWidth]);

  useEffect(() => {
    setCurrPage(1);

    if (currGenre === "Featured") {
      requestAPI
        .getTopRatedMovieDB()
        .then((data) => addFilmsHandler(data.results));
    }

    if (currGenre === "Popular") {
      requestAPI
        .getPopularMovieDB()
        .then((data) => addFilmsHandler(data.results));
    }

    if (currGenre === "Newest") {
      requestAPI
        .getNewestMovieDB()
        .then((data) => addFilmsHandler(data.results));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currGenre]);

  useEffect(() => {
    if (currPage > 1 && currGenre === "Featured") {
      requestAPI
        .getTopRatedMovieDB(currPage)
        .then((data) => addLoadMoreFilmsHandler(data.results));
    }

    if (currPage > 1 && currGenre === "Popular") {
      requestAPI
        .getPopularMovieDB(currPage)
        .then((data) => addLoadMoreFilmsHandler(data.results));
    }

    if (currPage > 1 && currGenre === "Newest") {
      requestAPI
        .getNewestMovieDB(currPage)
        .then((data) => addLoadMoreFilmsHandler(data.results));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  const handleClickLoadMore = () => {
    setCurrPage(currPage + 1);
  };

  return (
    <>
      <section className="wrapper__filmCatalog">
        {films.map(
          (
            { id, title, poster_path, vote_average, release_date, genre_ids },
            idx
          ) => (
            <CardFilm
              key={id}
              id_currFilm={idx}
              id_film={id}
              title={title}
              posterPath={poster_path}
              voteAverage={vote_average}
              release={release_date}
              genreIDs={genre_ids}
              currWidth={currWidth}
            />
          )
        )}
      </section>

      <button className="js-btn__loadMore" onClick={handleClickLoadMore}>
        Load more
      </button>
    </>
  );
}

//id: 19404
//title: "Dilwale Dulhania Le Jayenge"
//poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
//vote_average: 8.7
//release_date: "1995-10-20"
//genre_ids: (3) [35, 18, 10749]
// http://image.tmdb.org/t/p/w500

const mapStateToProps = (state) => ({
  films: state.films,
  currGenre: state.actions.currGenre,
});

const mapDispatchToProps = (dispatch) => ({
  addFilmsHandler: (films) => dispatch({ type: ADD_FILM, payload: films }),
  addLoadMoreFilmsHandler: (films) =>
    dispatch({ type: ADD_LOADMORE, payload: films }),
  setGenresHandler: (arrGenres) =>
    dispatch({ type: ADD_GENRES, payload: arrGenres }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsCatalog);
