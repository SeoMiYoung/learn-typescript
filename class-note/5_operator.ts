/* ------------------------------- 타입의 장점이 없어짐 ------------------------------ */

/*
function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(3);
*/

/* --------------------- Union Type을 쓰자(두개 이상의 타입 설정 가능) -------------------- */

function logMessage(value: string | number ) {
  if (typeof value === 'number') {
    value.toLocaleString(); // 이러면 number에 대한 속성들을 사용하기 좋음
  }
  if (typeof value === 'string') {
    value.toString(); // 이러면 number에 대한 속성들을 사용하기 좋음
  }
  // string과 number가 아닌 type에 대해서 에러를 발생시킬 수 있다!
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(3);
logMessage(true); // boolean type은 선택지에 없음 -> 에러 발생