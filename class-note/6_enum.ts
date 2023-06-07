/*
  enum은 특정 값들의 집합을 의미하는 자료형
  ts에서는 문자형 enum과 숫자형 enum을 지원함
*/

// 숫자형 enum
enum Shoes {
  Nike,  // 0
  Adidas,  // 1
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0이 출력됨 + 별도의 값을 넣지 않는다면, 기본적으로 숫자형 enum으로 취급함


// 문자형 enum
enum Shoes2 {
  Nike = '나이키', 
  Adidas = '아디다스', 
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // '나이키'가 출력됨


enum Answer {
  Yes = 'Y',
  No = 'N',
};

function askQuestion(answer: Answer) {
  if(answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if(answer === Answer.No) {
    console.log("오답입니다");
  }
}
// askQuestion('Y'); // 에러
askQuestion(Answer.Yes); // enum에서 제공되는 값만 넘길 수 있음
