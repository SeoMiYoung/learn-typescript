/*
  [ interface란? ]
  반복되는 타입들에 대해서 하나의 interface로 정의
  그러면, 다른 사람이 보더라도, 항상 동일한 규칙으로 쓰겠다고 약속을 할 수 있음
*/

interface User {
  age: number;
  name: string;
}

// 변수에 활용한 interface
var seho: User = {
  age: 33,
  name: '세호',
}

// 함수에 interface 활용
function getUser(user: User) {
  console.log(user); 
}

const capt = {
  name: '캡틴',
  age: 18,
}

getUser(capt);

// -------------------------------------------------------------------------------
// 함수의 스펙(구조)에 인터페이스를 활용 (함수의 전체적인 모습을 interface로 정의)
// 여러명이서 동시에 협업할 때, 라이브러리 만들 때

interface SumFunction {
  // 인자를 괄호를 쳐서 정의 가능
  (a: number, b: number): number;
}

// var sum = function(a,b) {
//   return a+b;
// }

var sum: SumFunction;
sum = function(a: number, b: number): number {
  return a+b;
};

// 배열에 접근하는 방식 정하기
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 10;  // 숫자값을 넣을 수 없음
arr[1] = 'ming';  // string을 넣을 수 있음
