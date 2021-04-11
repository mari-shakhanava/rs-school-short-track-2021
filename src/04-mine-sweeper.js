/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const field = matrix.slice();
  const yLength = matrix.length;
  const xLength = matrix[0].length;
  const saperOutput = [];
  for (let i = 0; i < yLength; i++) {
    const saperOutputRow = [];
    for (let j = 0; j < xLength; j++) {
      let counter = 0;
      if (j !== 0 && field[i][j - 1] === true) counter++;
      if (j !== 0 && i !== 0 && field[i - 1][j - 1] === true) counter++;
      if (i !== 0 && field[i - 1][j] === true) counter++;//
      if (field[j + 1] !== undefined && i !== 0 && field[i - 1][j + 1] === true) counter++;
      if (field[i][j + 1] !== undefined && field[i][j + 1] === true) counter++;
      if (field[i + 1] !== undefined
        && field[i + 1][j + 1] !== undefined && field[i + 1][j + 1] === true) counter++;
      if (field[i + 1] !== undefined && field[i + 1][j] === true) counter++;
      if (field[i + 1] !== undefined && j !== 0 && field[i + 1][j - 1] === true) counter++;
      saperOutputRow.push(counter);
    }
    saperOutput.push(saperOutputRow);
  }
  return saperOutput;
}

module.exports = minesweeper;
