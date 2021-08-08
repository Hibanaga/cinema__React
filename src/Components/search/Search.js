import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_FILM, ADD_GENRES } from "../../key/namesDispatch";
import fetchingData from "./utils/fetchingByNames";
import CardFilm from "../trending/Components/trendingFilm/Components/CardFilm";
import * as _ from "lodash";
import PaginationSearch from "./Components/PaginationSearch";
import "./search.scss";

function Search({ films, genres, addFilmsHandler, addGenresHandler }) {
  const location = useLocation();
  const [currPage, setCurrPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const [currWidth, setCurrWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", _.debounce(resize, 100));

    function resize(event) {
      setCurrWidth(event.target.innerWidth);
    }

    return () => window.removeEventListener("resize", resize);
  }, [currWidth]);

  useEffect(() => {
    let isComponentMounted = true;

    fetchingData
      .fetchingByNames(location.pathname.split("/").reverse()[0], currPage)
      .then((data) => {
        if (isComponentMounted) {
          addFilmsHandler(data.results);
          setAllPages(data.total_pages);
        }
      });

    if (genres.length === 0 && isComponentMounted) {
      fetchingData
        .fetchingGenres()
        .then((data) => addGenresHandler(data.genres));
    }

    return () => {
      isComponentMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currPage]);

  const changeCurrPageHandler = (currPage) => {
    setCurrPage(currPage);
  };

  return (
    <main className="main__search">
      <div className="wrapper__catalod--search">
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
              allPages={allPages}
            />
          )
        )}
      </div>

      <PaginationSearch
        totalPages={allPages}
        onChangeCurrPageHandle={changeCurrPageHandler}
      />
    </main>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  addFilmsHandler: (filmsArr) =>
    dispatch({ type: ADD_FILM, payload: filmsArr }),
  addGenresHandler: (genresArr) =>
    dispatch({ type: ADD_GENRES, payload: genresArr }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
