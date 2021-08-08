import React, { useState, useEffect } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Redirect } from "react-router-dom";

export default function FormHiddenSearch() {
  const [query, setQuery] = useState("");
  const [redirectRefer, setRedirectRefer] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("querySearch");
    if (local) {
      setQuery(local);
    }
  }, []);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setRedirectRefer(!redirectRefer);
  };

  const handleChangeQuery = (event) => {
    setQuery(event.target.value);
    localStorage.setItem("querySearch", event.target.value);
  };

  return (
    <>
      {redirectRefer && (
        <Redirect
          to={{
            pathname: `/cinema__React/${query}`,
          }}
        />
      )}
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
