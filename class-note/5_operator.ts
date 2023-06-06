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

/* --------------------------------- [섹션7-3] -------------------------------- */
interface Developer {
  name: string;
  skill: string; // Developer만이 가지는 고유 속성
}

interface Person {
  name: string;
  age: number; // Person만이 가지는 고유한 속성
}

function askSomeone(someone: Developer | Person) {
  /*
    [섹션7-2]강의에 의하면, Developer와 Person의 모든 속성에 합쳐서 접근 가능하다고 생각 할 확률이 높다.
    그러나, 이럴 경우, 오직 someone.name밖에 접근할 수 없다.

    [유니온 타입의 특징]
    인터페이스나 어떤 구조체를 여러개 유니온 타입을 쓸 경우,
    보장된 속성, 즉 공통된 속성에 대해서만 제공을 합니다.

    [만약에, name뿐만 아니라, skill과 age에 모두 접근하고 싶다면?]
    type가드로, 특정 타입을 제한해서 ㄱㄱ => 타입가드는 강의 후반부에 다룰 예정이므로 생략
  */
}