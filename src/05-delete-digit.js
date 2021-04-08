/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArr = [];
  const numToStr = n.toString();
  for (let i = 0; i < numToStr.length; i++) {
    newArr.push((numToStr.replace(numToStr[i], '')) * 1);
  }
  return Math.max(...newArr);
}

module.exports = deleteDigit;
