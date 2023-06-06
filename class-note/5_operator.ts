/* ------------------------------- 타입의 장점이 없어짐 ------------------------------ */

/*
function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(3);
*/

/* --------------------- Union Type을 쓰자(두개 이상의 타입 설정 가능) -------------------- */

function logMessage(value: string | number) {
  console.log(value);
}

logMessage('hello');
logMessage(3);
logMessage(true); // boolean type은 없음