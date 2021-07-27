import React from "react";
import BookmarkBorderRoundedIcon from "@material-ui/icons/BookmarkBorderRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
import PlayCircleOutlineRoundedIcon from "@material-ui/icons/PlayCircleOutlineRounded";
import { connect } from "react-redux";
import converterGenres from "../utils/converterGenres";

function CardFilm({
  genres,
  title,
  posterPath,
  voteAverage,
  release,
  genreIDs,
}) {
  return (
    <div className="wrapper__card--cardFilm">
      <div className="icons__action--cardFilm">
        <button className="js-btn__addToQueue js-btn__addToQueue--catalog">
          <BookmarkBorderRoundedIcon />
        </button>

        <div className="rating__description--cardFilm rating__description--catalog">
          <StarOutlineRoundedIcon />{" "}
          <span className="description__rating--cardFilm">{voteAverage}</span>
        </div>
      </div>

      <button className="js-btn__addToWatched--catalog">
        <PlayCircleOutlineRoundedIcon />
      </button>

      <div className="wrapper__infoFilm--cardFilm">
        <img
          src={`http://image.tmdb.org/t/p/w500` + posterPath}
          alt={title}
          className="img__card--cardFilm"
        />
      </div>
      <div className="wrapp__description--cardFilm">
        <h2 className="title__card--cardFilm">
          {title.length > 12 ? title.substring(0, 12) + "..." : title}
        </h2>

        <ul className="menu__genres--cardFilm">
          {converterGenres(genres, genreIDs).map((item, idx) => (
            <li className="liItem__card--cardFilm" key={idx}>
              {item}
            </li>
          ))}
          {/* <li className="liItem__card--cardFilm">Action</li> */}

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
