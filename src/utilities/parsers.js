export const getTimeFromTimestamp = fromTimestamp => {
  return `${fromTimestamp.getHours()}:${
    fromTimestamp.getMinutes() < 10
      ? "0" + fromTimestamp.getMinutes()
      : fromTimestamp.getMinutes()
  }`;
};

export const getDateFromTimestamp = fromTimestamp => {
  const day =
    fromTimestamp.getDate() < 10
      ? "0" + fromTimestamp.getDate()
      : fromTimestamp.getDate();
  const month = fromTimestamp.getMonth();
  const monthForTime = month + 1 < 10 ? "0" + (month + 1) : month + 1;
  const year = fromTimestamp.getFullYear();
  return `${day}.${monthForTime}.${year}`;
};
