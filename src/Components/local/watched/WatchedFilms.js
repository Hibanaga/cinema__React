import React, { useEffect } from "react";
import { connect } from "react-redux";
// import CardFilm from "../../trending/Components/trendingFilm/Components/CardFilm";
import "./watched.scss";
import { ADD_FILM, CLEAR_FILMS, ADD_GENRES } from "../../../key/namesDispatch";
import getFilmsByIDs from "./utils/fetchingFilmsIDs";
import CardFilmWatched from "./Components/CardFilmWatched";
import NotFilms from "../queue/Components/NotFilms";

function WatchedFilms({
  films,
  loadSelectedFilmsHandler,
  clearFilmsCatalogHandler,
}) {
  useEffect(() => {
    const local = localStorage.getItem("itemsWatched");

    if (local) {
      if (Array.isArray(JSON.parse(local))) {
        getFilmsByIDs(JSON.parse(local)).then((data) =>
          loadSelectedFilmsHandler(data)
        );
      } else {
        getFilmsByIDs([JSON.parse(local)]).then((data) =>
          loadSelectedFilmsHandler(data)
        );
      }
    }

    if (!local) {
      clearFilmsCatalogHandler([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(films);
  return (
    <main className="main__watched">
      <div className="wrapper__catalog--watched">
        {films.length > 0 ? (
          films.map(
            (
              { id, title, poster_path, vote_average, release_date, genres },
              idx
            ) => (
              <CardFilmWatched
                genres={genres}
                key={id}
                id_currFilm={idx}
                id_film={id}
                title={title}
                posterPath={poster_path}
                voteAverage={vote_average}
                release={release_date}
              />
            )
          )
        ) : (
          <>
            {" "}
            <NotFilms />{" "}
          </>
        )}
      </div>
    </main>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  addGenresHandler: (genresList) =>
    dispatch({ type: ADD_GENRES, payload: genresList }),
  clearFilmsCatalogHandler: (emptyArr) =>
    dispatch({ type: CLEAR_FILMS, payload: emptyArr }),
  loadSelectedFilmsHandler: (loadedItems) =>
    dispatch({ type: ADD_FILM, payload: loadedItems }),
});

export default connect(mapStateToProps, mapDispatchToProps)(WatchedFilms);
