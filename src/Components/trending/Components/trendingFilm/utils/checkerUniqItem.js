function checkerUniqItem(item, arrItems) {
  if (Array.isArray(arrItems)) {
    for (let el of arrItems) {
      if (el === item) {
        return true;
      }
    }
  } else {
    if (item === arrItems) {
      return true;
    }
  }
  return false;
}

export default checkerUniqItem;
