/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrDomainsReversed = domains.map((x) => x.split('.').reverse().map((y) => `.${y}`));
  const objCounter = {};
  arrDomainsReversed.forEach((element) => {
    let domain = '';
    for (let i = 0; i < element.length; i++) {
      domain += `${element[i]}`;
      if (objCounter[domain]) {
        objCounter[domain]++;
      } else {
        objCounter[domain] = 1;
      }
    }
  });
  return objCounter;
}

module.exports = getDNSStats;
