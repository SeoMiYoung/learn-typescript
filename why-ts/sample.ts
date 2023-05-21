
function sum(a: number,b: number): number { // a와 b는 숫자여야 한다
  return a+b;
}

sum(1, '2'); // 타입스크립트가 오류를 잡아줌
