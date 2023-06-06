/*
  [ interface란? ]
  반복되는 타입들에 대해서 하나의 interface로 정의
  그러면, 다른 사람이 보더라도, 항상 동일한 규칙으로 쓰겠다고 약속을 할 수 있음
*/

interface User {
  age: number;
  name: string;
}

var seho: User = {
  age: 33,
  name: '세호',
}