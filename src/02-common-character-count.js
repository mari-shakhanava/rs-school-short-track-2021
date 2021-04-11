/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function makeObjOfRepeats(x) {
    return x.split('').reduce((acc, curr) => {
      if (typeof acc[curr] === 'undefined') {
        acc[curr] = 1;
      } else {
        acc[curr] += 1;
      }
      return acc;
    }, {});
  }

  const objRepeatsS1 = makeObjOfRepeats(s1);
  const objRepeatsS2 = makeObjOfRepeats(s2);

  let counter = 0;

  Object.keys(objRepeatsS1).forEach((key) => {
    if (objRepeatsS2[key]) {
      counter += Math.min(objRepeatsS1[key], objRepeatsS2[key]);
    }
  });
  return counter;
}

module.exports = getCommonCharacterCount;
