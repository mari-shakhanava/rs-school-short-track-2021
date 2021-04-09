/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newMatrix = matrix.slice();
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] === 0) {
        for (let z = i + 1; z < newMatrix.length; z++) {
          newMatrix[z][j] = 0;
        }
      }
    }
  }
  return [].concat(...newMatrix).reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
