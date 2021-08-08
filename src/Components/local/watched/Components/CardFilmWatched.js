import React, { useState, useEffect } from "react";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import RemoveCircleOutlineRoundedIcon from "@material-ui/icons/RemoveCircleOutlineRounded";
import * as _ from "lodash";
import { Link, useLocation } from "react-router-dom";
import { REMOVE_SELECTED } from "../../../../key/namesDispatch";
import checkerUniqItem from "../../../trending/Components/trendingFilm/utils/checkerUniqItem";
import { connect } from "react-redux";

function CardFilmWatched({
  id_film,
  genres,
  title,
  posterPath,
  voteAverage,
  release,
  removeSelectedItem,
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
    removeSelectedItem(id_film);

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
    <div className="wrapper__card--cardFilm">
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
          src={`https://image.tmdb.org/t/p/w500` + posterPath}
          alt={title}
          className="img__card--cardFilm"
        />
      </div>
      <div className="wrapp__description--cardFilm">
        <h2 className="title__card--cardFilm">
          <Link
            to={{
              pathname: `/cinema__React/film_detail/${id_film}`,
              state: { from: location },
            }}
          >
            {title.length > 12 ? title.substring(0, 12) + "..." : title}
          </Link>
        </h2>

        <ul className="menu__genres--cardFilm">
          {genres !== undefined &&
            genres.map(({ id, name }) => (
              <li className="liItem__card--cardFilm" key={id}>
                {name}
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

const mapDispatchToProps = (dispatch) => ({
  removeSelectedItem: (id_film) =>
    dispatch({ type: REMOVE_SELECTED, payload: id_film }),
});

export default connect(null, mapDispatchToProps)(CardFilmWatched);
