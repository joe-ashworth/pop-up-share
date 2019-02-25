const arrayToMapOver = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function timesFive(value) {
  return value * 5;
}
const newArray = arrayToMapOver.map(timesFive);
// newArray is now [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// arrayToMapOver is still [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arrayToFilter = [1, 3, 6, 8, 11];
function isMoreThanFive(value) {
  return value > 5;
}
const newArray = arrayToFilter.filter(isMoreThanFive);
// newArray is now [6, 8, 10]
// arrayToFilter is still [1, 3, 6, 8, 11]
