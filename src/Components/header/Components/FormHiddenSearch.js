import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

export default function FormHiddenSearch() {
  return (
    <form action="" className="js-form__searchBox">
      <input
        type="text"
        placeholder="I'm looking for..."
        className="js-input-searchBox"
      />

      <button type="submit" className="js-btn-submit__form">
        <SearchRoundedIcon />
      </button>
    </form>
  );
}
