// 1. 묵시적 형 변환
// ㄴ 자바스크립트 엔진이 알아서 바꿔주는것

let num = 10;
let str = "20";

const result = num + str;
/*console.log(result); */ // 1020 출력
// num에 저장되어있는 숫자값 10이 string 으로 변환되어 1020 출력
// 오류를 발생시키게 하지 않기 위해서 숫자를 문자열로 암묵적으로 변환
// num처럼 하나의 값만 형변환 했을때 오류가 발생하지않고 연산이 잘 종료될 수 있는 경우에만 형 변환이 일어남



// 2. 명시적 형 변환
// ㄴ 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// > 문자열 > 숫자 
let str1 = 10;
let strToNum1 = Number(str1); // Number라는 내장함수 호출하여 형변환하고 싶은 값을 넣어줌
/*console.log(10 + strToNum1); */ // 20 출력
// 문자열을 숫자로 형 변환하기 위해서는 Number라는 내장함수를 사용할 수 있다

let str2 = "10개"; // 숫자 외에 다른 문자열 값이 포함되어 있는 문자열을 변환할때는 Number로 사용해서 변경할 수 없음
let strToNum2 = Number(str2);
/*console.log(strToNum2)*/ // NaN 출력, 수치연산 실패
// Number 내장함수는 오류가 남, ParseInt 라는 내장함수를 사용해야함
// ParseInt 내장함수는 문자열도 숫자값으로 잘 변환해줌 
let strToNum3 = parseInt(str2); 
console.log(strToNum3); // 10 출력
// 한가지 주의사항은 let str2 = "sfds10개"; 식으로 문자가 앞에있으면 안됨!!

// 숫자 > 문자열 
let num1 = 20;
let numToStr1 = String(num1)
console.log(numToStr1 + "입니다"); // 20입니다 출력, 20이 문자열이 되어서 이어져서 20입니다가 나오는 것

