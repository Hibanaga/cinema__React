import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardFilm from "./Components/CardFilm";
import "./filmCatalog.scss";
import { ADD_FILM, ADD_LOADMORE } from "../../../../key/namesDispatch";
import requestAPI from "./utils/fetchingFilms";

function FilmsCatalog({
  films,
  currGenre,
  selectedCategory,
  addFilmsHandler,
  addLoadMoreFilmsHandler,
}) {
  const [currPage, setCurrPage] = useState(1);

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
    <section className="wrapper__filmCatalog">
      {films.map(
        (
          { id, title, poster_path, vote_average, release_date, genre_ids },
          idx
        ) => (
          <CardFilm
            key={idx}
            title={title}
            posterPath={poster_path}
            voteAverage={vote_average}
            release={release_date}
            genreIDs={genre_ids}
          />
        )
      )}

      <button className="js-btn__loadMore" onClick={handleClickLoadMore}>
        Load more
      </button>
    </section>
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
  selectedCategory: state.actions.selectedCategory,
});

const mapDispatchToProps = (dispatch) => ({
  addFilmsHandler: (films) => dispatch({ type: ADD_FILM, payload: films }),
  addLoadMoreFilmsHandler: (films) =>
    dispatch({ type: ADD_LOADMORE, payload: films }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmsCatalog);
