// 기본적인 ts의 타입에 대해 알아보자

/* ----------------------------------- js ----------------------------------- */
// 문자열
let str = 'hello';
// 배열
let arr = [1,2,3];
// 객체
let obj = {};

/* ----------------------------------- ts ----------------------------------- */
// 문자열
let str: string = 'hello'; 
// 숫자
let num: number = 10;
// 배열
let arr: Array<number> = [1,2,3]; // 배열인데, 숫자만 넣을 수 있는 배열
let heroes: Array<string> = ['Captin', 'Thor', 'Hulk', 10]; // 10은 에러가 띄워짐 (tslint에 의해)
// 배열 리터럴(배열을 선언하는 편한 방법)
let items: number[] = [1,2,3]; 
// 튜플(배열의 특정 인덱스의 타입까지 결정하는 것)
let address: [string, number] = ['gangnam', 'pangyo']; 
// 객체
let obj: object = {};

// 간단 ver.
// let person: object = {
//   name: 'capt',
//   age: 100,
// };

// 구체적 ver.
let person: {name: string, age: number} = {
  name: 'thor',
  age: 1000,
}

// 진위값
let show: boolean = true;
