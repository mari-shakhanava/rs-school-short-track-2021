/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length;
  let middleIndex = Math.floor((startIndex + endIndex) / 2);
  for (let i = startIndex; i < endIndex; i++) {
    if (array[middleIndex] === value) return middleIndex;
    if (value < array[middleIndex]) {
      endIndex = middleIndex;
      middleIndex = Math.floor((startIndex + endIndex) / 2);
    } else {
      startIndex = middleIndex;
      middleIndex = Math.floor((startIndex + endIndex) / 2);
    }
  }
  return middleIndex;
}

module.exports = findIndex;
