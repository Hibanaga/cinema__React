import React from "react";
import Pagination from "@material-ui/lab/Pagination";

export default function PaginationSearch({
  totalPages,
  onChangeCurrPageHandle,
}) {
  const changePageHandler = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      return;
    }
    // console.log(event.target.nodeName);
    // console.log(event.target.textContent);

    onChangeCurrPageHandle(event.target.textContent);
  };

  return (
    <>
      {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
      <Pagination
        count={totalPages}
        hideNextButton={true}
        hidePrevButton={true}
        shape="rounded"
        onChange={changePageHandler}
        variant="outlined"
        color="primary"
      />
    </>
  );
}
