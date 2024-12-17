// 1. Number Type
// 존재할 수 있는 모든 숫자값들을 포함

let num1 = 27;
let num2 = 1.5;
let num3 = -20;
// number type은 기본적인 사칙연산을 모두 지원함

/*
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지 구하는 연산자, 모듈러 연산!
*/

// 숫자로 보이지않는 독특한 값들
let inf = Infinity; // 양의 무한대숫자
let mInf = -Infinity // 음의 무한대숫자

let nan = NaN; // Not a number 로 NaN으로 부르며 수치연산을 실패했을 때 결과값으로 사용

/*console.log(1 * "hello"); */



// 2. string Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce)
// 문자열은 무조건 "" 나 '' 로 감싸줘야함
// '' "" 을 쓰지않으면 변수명으로 취급을 해서 오류가 발생함
// 자바스크립트 문자열은 독특하게 문자열을 지원함
 
let introduceTest = ``;
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
/*console.log(introduceText) */
// backtick 도 가능 ``으로 만들어도 문자열과 동일하지만 $ {} 안으로 변수값을 동적으로 넣기 가능
// 템플릿 리터럴 문법 이라고 부름 (중요)



// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;
// 참이나 거짓만을 저장하는 타입



// 4. Null Type (아무것도 없다)
let empty = null; // empty에 아무것도 없다



// 5. Undefined Type
// undefined 단 하나의 값만 포함하는 특수한 타입
// 변수를 선언하고 그 변수에 어떠한 값도 집어넣지 않았을 때 자동으로 할당되는 것
let none;
console.log(none)

// 의미는 같지만 좀 다름
// null 과 undefined 의 차이는 undefined 는 변수를 선언하고 값을 할당하지 않은 상태(자료형이 없는상태), 미처 초기화하지 못했거나 존재하지 않는 어떤 값을 불러오려고 할때 발생하는 그런 값 
// null은 변수를 선언하고 빈값을 할당한 상태 (빈객체)

