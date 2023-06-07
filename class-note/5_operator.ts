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
// logMessage(true); // boolean type은 선택지에 없음 -> 에러 발생

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

// 유니온의 경우, Developer 또는 Person타입의 데이터를 제공해주면 됨
askSomeone({ name: '디벨롭퍼', skill: '웹 개발' });
askSomeone({ name: '캡틴', age: 100 });

function askSomeone2(someone: Developer & Person) {
  /*
    [섹션7-4]
    인터섹션(&)은 유니온(|)과 다르다.
    이 경우, someone은 name/age/skill에 모두 접근 가능하다.

    [유니온 타입 VS 인터섹션 타입]
    유니온 타입: skill과 age를 보장할 수 없기 때문에 추가로 type guard에 대한 처리가 필요했음.
    인터섹션 타입: type guard가 별도로 필요없고, Developer와 Person이 가지고 있는 모든 속성을 사용 가능.

    [실무에서 더 많이 쓰이는 타입?]
    유니온 타입이 더 많이 쓰인다...!
  */
}