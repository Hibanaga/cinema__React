import React from "react";

export default function AddCommenratyForm() {
  return (
    <form className="js-form__addCommentary">
      <textarea
        type="text"
        className="js-input__commentary"
        placeholder="Add comment"
      />

      <button type="submit" className="js-submit__addCommentary">
        send
      </button>
    </form>
  );
}
