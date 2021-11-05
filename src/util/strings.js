export const numberFormat = (num) => {
  if (num > 0 && num < 10) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};
