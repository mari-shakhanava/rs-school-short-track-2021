/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 1;
  if (!str) return str;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) {
      counter++;
    } else {
      result += `${counter}${str[i]}`;
      counter = 1;
    }
  }
  return result.split('').filter((x) => +x !== 1).join('');
}

module.exports = encodeLine;

// function encodeLine(str) {
//   const newObj = str.split('').reduce((acc, curr) => {
//     if (typeof acc[curr] === 'undefined') {
//       acc[curr] = 1;
//     } else {
//       acc[curr] += 1;
//     }
//     return acc;
//   }, {});
//   return Object.entries(newObj).map((x) =>
//   x.reverse().filter((el) => el !== 1).join('')).join('');
// }
