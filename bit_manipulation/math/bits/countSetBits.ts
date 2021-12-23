import readline from './readLine';

export default function countSetBits(originalNumber: number) {
  let setBitsCount = 0;
  let number = originalNumber;

  while (number) {
    /**
     *
     * @param {number} number
     * @return {number}
     *
     * @abstract number를 입력받아 해당 number의 비트 가장 마지막 자리가 1인 경우
     * setBitsCount+=1을 한다. 이를 number & 1로 표현했는데 어차피 비교하는 두 대상의 각 2진 자리수가 1인 경우 1을 반환하기 때문에
     * cnt += number & (0001);로 표현하였다.
     *
     * 그 다음 >>>= 1; 을 통해 number의 비트 자리수를 우측으로 shift 한다.
     * number가 3(0011)인 경우 setBitsCount는 (0011) & (0001)에 의해 setBitsCount+1로 초기화 되고
     * 3은 한 자리수가 버려져 (0001)이 된다. >>>= 연산을 통해 while문의 조건이 깨지게 되어 루프를 탈출하게 된다.
     *
     * 이어서 0001이 된 number는 (0001) & (0001) = 1을 반환받아 setBitsCount+1로 초기화 되고
     * 따라서 setBitsCount = 2가 된다.
     *
     * number = (0011); 1 = (0001);
     * setBitsCount += 0011 & 1
     *  & 연산
     *  0011 (3)
     *  0001 (1)
     *  ----
     *  0001 (1)
     */
    setBitsCount += number & 1;
    /**
     *  a >>> b  a의 이진 표현을 b만큼 오른쪽으로 이동하고, 1 미만으로 이동한 비트는 버립니다. 왼쪽은 0으로 채웁니다.
     *
     * 0011 >>> 1 = 0001
     */
    number >>>= 1;
  }
  return setBitsCount;
}

readline.question(`input : `, (input: string) => {
  //   console.log(`hello ,`, input);

  const number = Number(input);
  if (typeof number === 'number') {
    console.log(countSetBits(number));
  }

  console.log('type error');
  readline.close();
});
