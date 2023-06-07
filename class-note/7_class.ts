// js의 class와 다른 점

class Person1 {
  // 1. ts에서는, class 상단에 클래스의 멤버변수를 모두 정의해줘야 함
  // 2. public, private등을 사용해서 변수의 접근범위 설정 가능
  private name: string;
  public age: number;
  readonly log: string;

  constructor(name: string, age: number) {  // 3.type설정
    this.name = name;
    this.age = age;
  }
}

/*
  class형태는 사실 앞으로 볼 일이 그렇게는 많지 않음.
  따라서 기본적인 문법정도만 알아두길.
*/