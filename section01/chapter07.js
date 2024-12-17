// 1. 대입 연산자 
// 대입 연산자는 변수의 값을 저장할때 사용하는 가장 기본적인 연산자
let var1 = 1; 



// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
// 곱셈, 나눗셈, 모듈러 연산자가 덧셈 뺄셈보다 우선순위가 높음

let num6 = 1 + 2 * 10;   
console.log(num6); // 21 출력, 곱셈이 먼저 계산되기때문에

let num7 = (1 + 2) * 10;   
console.log(num7); // 30 출력, 3이 먼저 더해지고 다음에 10 곱해져서 



// 3. 복합 대입 연산자
// 산술 연산자와 대입 연산자가 복합되어있다는 의미
let num8 = 10;
// num8 = num8 + 10; 이렇게 쓰지말고 복합대입 연산자를 활용하여 아랫처럼 이용하기
num8 += 10;
console.log(num8) // 20 출력
num8 -= 10;
console.log(num8) // 10 출력
num8 *= 10;
console.log(num8) // 100 출력
num8 /= 10;
console.log(num8) // 10 출력 (위에 100 / 10 이라서 10)



// 4. 증감 연산자
// 1씩 늘리거나, 1씩 줄일때 사용하는 연산자
let num9 = 10;
num9++;
console.log(num9); // 11 출력
// 증감연산자를 변수명 뒤에 쓰게되면, 이 라인이 끝난후에 1이 추가가 되는 것
let num10 = 10;
console.log(num10++); // 10 출력되고, 이 후에 11로 출력됨
console.log(num10); // 11 출력
// 먼저 연산하고 싶다면 ++ 을 앞에붙여주면 가능 
// ++ 앞에 붙이는건 전위 연산자 
// ++ 뒤에 붙이는건 후위 연산자
// -- 뺄셈도 가능 



// 5. 논리 연산자
// boolean 타입의 값을 사용하는 연산자
let or = true || false;  // 하나만 참이어도 참
let and = true && false; // 둘다 참이여야 참
let not = !true; // 참이라면 거짓, 거짓이라면 참을 노출
console.log(or, and, not)



// 6. 비교 연산자
// 두개의 값을 서로 비교하는 연산자
let comp1 = 1 === 2; // 동등 비교연산자
let comp2 = 1 !== 2; // 비동등 비교연산자
console.log(comp1, comp2); // false true 출력 
// == 두개만 써도 가능은 하나, 값의 자료형까지 같은지는 비교가 되지않음
// === 세개를 사용하면 자료형의 값까지 비교하는 것
// 상단 comp1 = 1 == "1" 로 한다면 자료형이 비교가 되지않아서 true 로 출력됨

let comp3 = 2 > 1; // 대소비교
let comp4 = 2 < 1; // 대소비교
console.log(comp3, comp4)  //  true, false
// 같거다 크다, 작거나 같다
let comp5 = 2 >= 2;
let comp6 = 2 <= 2; 
console.log(comp5, comp5) // true, true 출력 
