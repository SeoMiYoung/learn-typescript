// js에서의 class가 어떤 문법을 지니고 있고, 이 class를 왜 사용하는가에 대해 살펴보자
// start from ES2015(ES6)

class Person {
  // 클래스 로직

  // constructor라는 초기화 메서드
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

new Person('미영', 24); // 콘솔창에 '생성되었습니다.'가 찍힘

