import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import { Redirect, useLocation } from "react-router-dom";

export default function FormHiddenSearch() {
  const [query, setQuery] = useState("");
  // const [redirectRefer, setRedirectRefer] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    const local = localStorage.getItem("querySearch");
    setQuery(local);
  }, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // setRedirectRefer(true);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
    localStorage.setItem("querySearch", event.target.value);
  };

  return (
    <>
      {/* {redirectRefer && (
        <Redirect to={{ pathname: `${query}`, state: { from: location } }} />
      )} */}
      <form
        action=""
        className="js-form__searchBox"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          placeholder="I'm looking for..."
          className="js-input-searchBox"
          value={query}
          onChange={handleChangeQuery}
        />

        <button type="submit" className="js-btn-submit__form">
          <SearchRoundedIcon />
        </button>
      </form>
    </>
  );
}
