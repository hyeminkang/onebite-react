// 1. if조건문 (if문)
let num = 10;
if (num > 10) {
  /*console.log("num은 10 이상입니다");
  console.log("조건은 참입니다"); */
} else if ( num >= 5) {
  /*console.log('num은 5 이상입니다'); */
} else {
  /* console.log("거짓임"); */
}
// {}안으로 여러가지의 코드 넣기 가능
// 만약 상단 num값을 9로 바꿔버리면 조건은 실행되지않음 
// 조건이 거짓일때 실행시키고자 할 경우네는 else 문 사용
// 여러가지의 조건을 추가로 할수잇음 else if 문 사용 
// ㄴ 갯수의 제한은 없음
// 대신 조건문은 if 로 시작해서 else 로 끝나야함!
// ㄴ else if 로 시작하면 당연히 오류! else 가 else if 위에 있어도 오류!



// 2. switch 문
// ㄴ if문과 기능자체는 동일함 
// 다수의 조건을 처리할때 if 보다 더 직관적
// switch 문 소괄호 안에는 변수가 들어감!
// 이후 각각 case별로 수행하고 싶은 코드를 작성해주면됨

let animal = "bear";
switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog":{
    console.log("강아지");
    break;
  }
  case "bear":{
    console.log("곰");
    break;
  }
  case "snake":{
    console.log("뱀");
    break;
  }
  case "tiger":{
    console.log("호랑이");
    break;
  }
  default: {
    console.log("그런 동물없다")
  }
}
// switch 케이스는 소괄호 값에 변수를 위에서부터 차례대로 탐색을 함
// 탐색을 하다가 일치하는 케이스를 만나게되면 그 아래를 모두 출력
// 우리는 멈추고싶다 그렇다면 break;를 넣어주자
// 결론은 switch 문은 break를 필수적으로 달아줘야한다
// 변수자체에 switch문에 없는 변수를 저장한다면, 코드가 실행되지않음
// 그래서 아무것도 실행되지않을수도 있으니까, default 를 마지막에 써줌
