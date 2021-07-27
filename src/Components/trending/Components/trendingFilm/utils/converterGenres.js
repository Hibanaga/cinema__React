function converterGenres(arrGenres, arrIDs) {
  let arrToShow = [];

  for (let i = 0; i < arrIDs.length; i++) {
    if (i < 2) {
      // eslint-disable-next-line array-callback-return
      arrGenres.map(({ id, name }) => {
        if (arrIDs[i] === id) {
          arrToShow.push(name);
        }
      });
    }
  }

  return arrToShow;
}

export default converterGenres;
