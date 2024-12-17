//  1. 변수
let age = 27; // 변수 선언 및 초기화
/* console.log(age) */ // 27 출력

age = 30;
/* console.log(age) */ // 30 출력, 변수 값 변경 가능

// 특수한 경우가 아니면 중복된 이름으로 재선언은 불가! 
// let age = 40; // 이러면 오류남!



// 2. 상수
// ㄴ 상수는 변수와 달리, 한번 저장된 값을 바꿀수 없음 
const birth = "1997.01.07";
/*birth = "123"; */ // 위에 1997.01.07을 선언했기 때문에 콘솔창 오류남
// 상수는 초기화가 반드시 필요함 const birth; 로 하면 오류발생함 
// 다시 바꿀수 없기때문에 초기값을 할당해줘야함



// 3. 변수 명명 규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용불가
// ex) let #name; let na#me; let name#;
let $_name;

// 3-2. 숫자로 시작할 수 없음.
let name1; // (가능) 
/*let 2name;*/ // (불가능) 숫자가 앞에오는거 불가 맨앞에 오면안됨!

// 3-3. 예약어 사용불가
// let, const 등 let let; 불가
// let if; 불가!



// 4. 변수 명명 가이드
let a = 1;
let b = 1;
let c = a - b;
// 누구도 알아볼수 없는 이름으로 짓는건 좋지못한 방식
let salesCount = 1;
let refundCoutn = 1;
let totalSalesCount = salesCount - refundCoutn;
