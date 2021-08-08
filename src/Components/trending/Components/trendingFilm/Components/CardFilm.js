import React, { useState, useEffect } from "react";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import { connect } from "react-redux";
import converterGenres from "../utils/converterGenres";
import * as _ from "lodash";
import checkerUniqItem from "../utils/checkerUniqItem";
import { Link, useLocation } from "react-router-dom";
import resizeNameString from "../utils/resizeNameString";
// import resizeAOS from "../utils/resizeAOS";

function CardFilm({
  id_film,
  id_currFilm,
  genres,
  title,
  posterPath,
  voteAverage,
  release,
  genreIDs,
  currWidth,
  allPages,
}) {
  const [isWatched, setIsWatched] = useState(false);
  const [isQueue, setIsQueue] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const localQueue = localStorage.getItem("itemsQueue");
    const localWatched = localStorage.getItem("itemsWatched");

    if (localQueue) {
      if (checkerUniqItem(id_film, JSON.parse(localQueue))) {
        setIsQueue(true);
      }
    }

    if (localWatched) {
      if (checkerUniqItem(id_film, JSON.parse(localWatched))) {
        setIsWatched(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickSaveToQueueHandler = () => {
    let local = localStorage.getItem("itemsQueue");

    if (isQueue) {
      if (Array.isArray(JSON.parse(local))) {
        let idx_itemLocal = JSON.parse(local).indexOf(id_film);

        let filtredArr = JSON.parse(local).filter(
          (item, idx) => idx !== idx_itemLocal
        );

        localStorage.setItem("itemsQueue", JSON.stringify(filtredArr));
        setIsQueue(!isQueue);
      } else {
        localStorage.setItem("itemsQueue", "");
        setIsQueue(!isQueue);
      }
    }

    if (local && !isQueue) {
      let parsedLocal = JSON.parse(local);
      let pushedItems = [parsedLocal, id_film];

      localStorage.setItem(
        "itemsQueue",
        JSON.stringify(_.uniq(pushedItems.flat()))
      );

      setIsQueue(true);
    }

    if (!local) {
      localStorage.setItem("itemsQueue", JSON.stringify(id_film));
      setIsQueue(true);
    }
  };

  const onClickSaveToWatchedHandler = () => {
    let local = localStorage.getItem("itemsWatched");

    if (isWatched) {
      if (Array.isArray(JSON.parse(local))) {
        let idx_itemLocal = JSON.parse(local).indexOf(id_film);

        let filtredArr = JSON.parse(local).filter(
          (item, idx) => idx !== idx_itemLocal
        );

        localStorage.setItem("itemsWatched", JSON.stringify(filtredArr));

        setIsWatched(!isWatched);
      } else {
        localStorage.setItem("itemsWatched", "");
        setIsWatched(!isWatched);
      }
    }

    if (local && !isWatched) {
      let parsedLocal = JSON.parse(local);
      let pushedItems = [parsedLocal, id_film];

      localStorage.setItem(
        "itemsWatched",
        JSON.stringify(_.uniq(pushedItems.flat()))
      );

      setIsWatched(true);
    }

    if (!local) {
      localStorage.setItem("itemsWatched", JSON.stringify(id_film));
      setIsWatched(true);
    }
  };

  return (
    <div
      className="wrapper__card--cardFilm"
      data-aos={allPages === undefined ? id_currFilm > 3 && "fade-up" : null}
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="icons__action--cardFilm">
        <button
          className={
            isQueue
              ? "js-btn__addToQueue js-btn__addToQueue--catalog js-btn__addToQueue__active"
              : "js-btn__addToQueue js-btn__addToQueue--catalog"
          }
          onClick={onClickSaveToQueueHandler}
        >
          <BookmarkBorderRoundedIcon />
        </button>

        <div className="rating__description--cardFilm rating__description--catalog">
          <StarOutlineRoundedIcon />{" "}
          <span className="description__rating--cardFilm">{voteAverage}</span>
        </div>
      </div>

      <button
        className="js-btn__addToWatched--catalog"
        onClick={onClickSaveToWatchedHandler}
      >
        {isWatched ? (
          <RemoveCircleOutlineRoundedIcon />
        ) : (
          <AddCircleOutlineRoundedIcon />
        )}
      </button>

      <div className="wrapper__infoFilm--cardFilm">
        <img
          src={`http://image.tmdb.org/t/p/w500` + posterPath}
          alt={title}
          className="img__card--cardFilm"
        />
      </div>

      {/* to={{ pathname: `${id_film}` }} */}
      <div className="wrapp__description--cardFilm">
        <h2 className="title__card--cardFilm">
          <Link
            to={{
              pathname: `/cinema__React/film_detail/${id_film}`,
              state: { from: location },
            }}
          >
            {resizeNameString(currWidth, title)}
          </Link>
        </h2>

        <ul className="menu__genres--cardFilm">
          {converterGenres(genres, genreIDs).map((item, idx) => (
            <li className="liItem__card--cardFilm" key={idx}>
              {item}
            </li>
          ))}
          {release && (
            <li className="liItem__card--cardFilm">{release.split("-")[0]}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genres,
});

export default connect(mapStateToProps, null)(CardFilm);

// 14 length name
//id: 19404
//title: "Dilwale Dulhania Le Jayenge"
//poster_path: "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg"
//vote_average: 8.7
//release_date: "1995-10-20"
//genre_ids: (3) [35, 18, 10749]
