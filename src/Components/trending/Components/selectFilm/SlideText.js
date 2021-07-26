import React from "react";

export default function SlideText({ selectedMovie, onChnageHandleToggle }) {
  const changeHandlerToggle = (event) => {
    onChnageHandleToggle(event.target.textContent);
  };

  return (
    <>
      <span
        className={
          selectedMovie === "Featured"
            ? "description__films--slideText description__films__active--slideText"
            : "description__films--slideText"
        }
        onClick={changeHandlerToggle}
      >
        Featured
      </span>

      <span
        className={
          selectedMovie === "Popular"
            ? "description__films--slideText description__films__active--slideText"
            : "description__films--slideText"
        }
        onClick={changeHandlerToggle}
      >
        Popular
      </span>

      <span
        className={
          selectedMovie === "Newest"
            ? "description__films--slideText description__films__active--slideText"
            : "description__films--slideText"
        }
        onClick={changeHandlerToggle}
      >
        Newest
      </span>
      <div
        className={
          selectedMovie === "Featured"
            ? "swipping__part--slideText"
            : selectedMovie === "Popular"
            ? "swipping__part--slideText swipping__part--medium"
            : selectedMovie === "Newest"
            ? "swipping__part--slideText swipping__part--large"
            : "swipping__part--slideText"
        }
      ></div>
    </>
  );
}
