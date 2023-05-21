
function add(a: number,b: number): number { // a와 b는 숫자여야 한다
  return a+b;
}

var result = add(10, 20); // 타입스크립트가 오류를 잡아줌
// number에서 제공하는 API들을 활용할 수 있게 됨
// API들이 자동완성으로 뜨기 때문에 오타를 낼 확률 낮아짐
result.toLocaleString(); 