function resizeNameString(sizeScreen, name) {
  if (sizeScreen <= 325) {
    return name.substring(0, 12) + "...";
  }

  if (sizeScreen <= 375) {
    return name.substring(0, 14) + "...";
  }

  if (sizeScreen <= 425) {
    return name.substring(0, 16) + "...";
  }

  if (sizeScreen <= 768) {
    return name.substring(0, 14) + "...";
  }

  if (sizeScreen <= 1024) {
    return name.substring(0, 13) + "...";
  }

  if (sizeScreen <= 1440) {
    return name.substring(0, 15) + "...";
  }

  if (sizeScreen <= 1920) {
    return name.substring(0, 13) + "...";
  }

  return name;
}

export default resizeNameString;
