// 이제 타입 정의해야 됨(타이핑)

let todoItems: object[]; // 배열인데, object로 구성

// api
function fetchTodoItems(): object[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: object): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  // index위치에 있는 값부터 1개를 삭제한다
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: object): void {
  // todo라는 object안에 done이라는 속성이 있는지, ts가 인식을 못하고 있음
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
// 할 일 목록에서 가장 첫번째 할 일을 반환
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted(): object[] {
  // 아~ filter는 반환이 true인 item만 반환하구나~
  // 그래서, 지금 할 일을 완료한 목록만 보고 싶다면, item.done이 true인것만 보면 되겠군..!
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  const item1 = {
    id: 4,
    title: '아이템 4',
    done: false,
  };

  addTodo(item1);
  addTodo({
    id: 5,
    title: '아이템 5',
    done: false,
  });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems(); // todoItems는 배열이겠구나~
addTwoTodoItems();
log();
