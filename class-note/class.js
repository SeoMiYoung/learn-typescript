/*
  js에서의 class가 어떤 문법을 지니고 있고, 이 class를 왜 사용하는가에 대해 살펴보자
  start from ES2015(ES6)
*/

/* ----------------------------------- 방법1 ---------------------------------- */
// Java개발자들이나, 객체지향언어에 익숙한 사람들이 js에 쫌 더 쉽게 접근하려고, class기반의 문법을 제공했음
class Person { // 클래스 로직
  // constructor라는 초기화 메서드
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}
var student1 = new Person('미영', 24); // 콘솔창에 '생성되었습니다.'가 찍힘

/* ----------------------------------- 방법2 ---------------------------------- */
// 충분히 class를 이용하지 않고도, 생성자 함수를 계속 만들어 나갈 수 있다.
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var student2 = new Person('태영', 21);


/*
  [자바스크립트 프로토타입 소개]
  javascript는 프로토타입 기반의 언어이다.
*/