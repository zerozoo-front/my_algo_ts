/**
 * @param {number} A augend
 * @param {number} B augend
 * @return {[number, number]} [carry, sum]
 */

/**
 * half adder = 반가산기
 * 반가산기는 이진수 한 자리수를 연산하고,
 * 답을 sum, carry를 carry로 출력한다.
 *
 * 0001
 * 0001
 * ----
 * 0010
 */

export default function halfAdder(A: number, B: number) {
  const sum = A ^ B; // XOR
  const carry = A & B; // AND

  return [carry, sum];
}
console.log(halfAdder(1, 1));
