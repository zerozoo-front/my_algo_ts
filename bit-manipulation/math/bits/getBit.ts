/**
 *  @param {number} number
 *  @param {number} bitPosition
 *  @return {number}
 */
const log = console.log;
export default function getBit(number: number, bitPosition: number) {
  return (number >> bitPosition) & 1;
}
/**
 * ss
 * dec를 2진수로 나타냄
 * >>> = a의 이진 표현을 b만큼 오른쪽으로 이동하고,
 *  1 미만으로 이동한 비트는 버립니다. 왼쪽은 0으로 채웁니다.
 *
 *
 * @param {number} dec
 * @return {string}
 */
function decToBin(dec: number) {
  return (dec >>> 0).toString(2);
}

log(decToBin(13)); // 1101

log(getBit(13, 2)); // 1101의 2^1 번 째의 bit 값은?
