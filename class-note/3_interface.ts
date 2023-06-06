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