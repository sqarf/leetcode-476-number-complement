/**
 * @param {number} num
 * @return {number}
 */
const findComplement = (num) => {
  const bin = (num >>> 0).toString(2);
  return parseInt(bin.split('').map(i => (!parseInt(i)) ? 1 : 0).join(''), 2);
};

// Ex.1
console.log(
  findComplement(5)
)
// Ex.2
console.log(
  findComplement(1)
)
