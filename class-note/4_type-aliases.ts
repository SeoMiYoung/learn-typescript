/* ----------------------- 타입 별칭, 인터페이스 방식과 타입 방식의 차이? ---------------------- */

// 인터페이스 -> interface라고 뜸
interface Person {
  name: string;
  age: number;
}

// 타입 -> cursor를 올렸을 때, type형태를 박스처럼 보여주는 듯!
// type Person = {
//   name: string;
//   age: number;
// }

var seho: Person = {
  name: 'seho',
  age: 30,
}

// 사실상 타입을 정의할 수 있는 모든 곳에다가는 별칭을 정의할 수 있다
type MyString = string;
var str: MyString = 'hello';

// in 첫번째 플젝
type Todo = { id: string; title: string; done: boolean };
function getToDo(todo: Todo) {

};
