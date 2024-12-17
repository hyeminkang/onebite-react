// 1. 함수표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA; // 자바스크립트에서는 함수도 숫자나 문자열과 같은 하나의 값으로 취급하기가능
console.log(varA) // funcA() { console.log("funcA")} 가 출력
// 이후에는 
varA();
// 이렇게 출력도 가능 ( 함수 자체를 담았기 때문에 )

// 자바스크립트에서는 굳이 함수를 선언하지 않고, 그냥 변수에 담기 가능
let varB = function /*funcB*/() {
  console.log("funcB");
} // 이름 없는건 익명함수

varB(); // funcB 출력
console.log(varB) // function funcB() { console.log("funcB"); } 출력
// 한가지 주의사항은 funcB는 함수를 선언한게 아니고, 
// 선언식이라는건 어떤 변수의 값으로써 담기지 않은 상태로 유지가 되어야함
// funcB는 값으로써 함수가 생성된 거기 때문에 함수의 이름으로는 호출이 불가함
/*funcB(); */ // is not defined 출력됨 선언된겐 아니기때문에
// 그래서 funcB는 이름없이 선언하여도 전혀 문제가 되지않음!

// funcA처럼 함수 선언문을 이용해서 함수를 만들지 않고
// varB처럼 값으로써 함수를 생성하는 이럼 방식을 자바스크립트에서는 특별히
// 함수표현식이라고 부르고, 값으로써 취급이 되었기에 호이스팅의 대상이 되지않음!



// 2. 화살표함수
// 함수를 이전보다 더 빠르고 간결하게 생성할수 있도록 도와줌
let varC1 = function () {
  return 1;
}
let varC = () => {
  return 1;
}
// function 을 지우고, => 만 넣으면됨
console.log(varC()) // 1 출력
// console.log(varC)를 하면 함수자체 출력
// 더 간결하게 하고싶다면

let varC_1 = () => 2;
console.log(varC_1());

let varC11 = (value) => value + 1;
console.log(varC11(10)) // 11 출력됨

// 추가작업이 필요하다면 
let varC12 = (value) => {
  console.log(value);
  return value + 1;
}

console.log( varC12(12 )); // 13 출력
