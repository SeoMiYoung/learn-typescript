// 함수의 파라미터의 타입을 정의하는 방식
// function sum(a: number,b: number) {
//   return a+b;
// }
// sum(10,20);

// 함수의 반환값에도 타입을 정의할 수 있다
function add(): number {
  return 10; // number타입 반환
}

function sum(a: number,b: number): number {
  return a+b;
}
sum(10,20,30,40); // 2개의 인수(arguments)가 필요한데 4개를 넣었다고 경고 알람이 뜸 => ts

function log(a: string, b?: string) {

}

log('a', 'b');
log('a');