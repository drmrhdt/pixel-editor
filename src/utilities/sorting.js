export const sortByDateAsc = unsortedData => {
  return unsortedData.sort((a, b) => a.date - b.date);
};
