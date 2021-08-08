import React, { useEffect } from "react";
import "./oneCard.scss";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import AddCommenratyForm from "./Components/AddCommenratyForm";
import { useLocation } from "react-router-dom";
import fetchingCurrFilm from "./utils/fetchingCurrFilm";
import { connect } from "react-redux";
import { ADD_FILM } from "../../key/namesDispatch";

function OneCardFilm({ addCurrFilmHandler, films }) {
  const location = useLocation();
  useEffect(() => {
    fetchingCurrFilm(location.pathname.split("/").reverse()[0]).then((data) =>
      addCurrFilmHandler([data])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    films.length === 1 && (
      <>
        <article className="wrapper__oneCard--film">
          <div className="section__card__bg--film">
            <img
              src={`https://image.tmdb.org/t/p/w500` + films[0].poster_path}
              alt="test"
              className="img__card--film"
            />
          </div>
          <div className="wrapper__info__card--film">
            <h1 className="title_infoCard--film">{films[0].title}</h1>

            <ul className="ulMenu__category--film">
              <li className="liItem__category--film">
                <StarBorderRoundedIcon /> {films[0].vote_average}
              </li>

              {films[0].genres.map(({ id, name }) => (
                <li className="liItem__category--film" key={id}>
                  {name}
                </li>
              ))}

              <li className="liItem__category--film">
                {films[0].release_date.split("-")[0]}
              </li>

              <li className="liItem__category--film">
                {films[0].adult ? "16+" : "18+"}
              </li>
            </ul>

            <span className="description__oneCard--film">
              {films[0].overview}
            </span>

            <h2 className="subTitle__oneCard--film">Genres</h2>

            <div className="wrapper__genres__list--film">
              {films[0].genres.map(({ id, name }) => (
                <span className="description__genres__oneCard--film" key={id}>
                  {name}
                </span>
              ))}
            </div>

            <div className="wrapper__actions">
              <div className="wrapper__commntary--film">
                <div className="titles__commentary--film">
                  <h2 className="title__commentary--film">
                    Commentary <span className="icon_count--commentary">0</span>{" "}
                  </h2>
                  <h2 className="title__commentary--film">
                    Reviews <span className="icon_count--commentary">0</span>
                  </h2>
                </div>
              </div>

              <AddCommenratyForm />
            </div>
          </div>
        </article>{" "}
      </>
    )
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  addCurrFilmHandler: (currObjFilm) =>
    dispatch({ type: ADD_FILM, payload: currObjFilm }),
});

export default connect(mapStateToProps, mapDispatchToProps)(OneCardFilm);
