import React, { useEffect } from "react";
import { connect } from "react-redux";
import getFilmsByIDs from "../watched/utils/fetchingFilmsIDs";
import CardFilmQueue from "./Components/CardFilmQueue";
import { ADD_FILM, CLEAR_FILMS, ADD_GENRES } from "../../../key/namesDispatch";
import NotFilms from "./Components/NotFilms";
import "./queue.scss";

function QueueFilms({
  films,
  loadSelectedFilmsHandler,
  clearFilmsCatalogHandler,
}) {
  useEffect(() => {
    const local = localStorage.getItem("itemsQueue");
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

  return (
    <main className="main__queue">
      <div className="wrapper__catalog--queue">
        {films.length > 0 ? (
          films.map(
            (
              { id, title, poster_path, vote_average, release_date, genres },
              idx
            ) => (
              <CardFilmQueue
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
  clearFilmsCatalogHandler: (clearArr) =>
    dispatch({ type: CLEAR_FILMS, payload: clearArr }),
  loadSelectedFilmsHandler: (loadedItems) =>
    dispatch({ type: ADD_FILM, payload: loadedItems }),
});

export default connect(mapStateToProps, mapDispatchToProps)(QueueFilms);
