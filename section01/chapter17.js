// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [1, 2, 3,
  true,
  "hello",
  null,
  undefined,
  () => { },
{},
[]];
console.log(arrC);

// 어떤 타입의 값이든 자유롭게 선언 가능, boolean, 문자열, null, undefined,
// 객체, 배열, 함수 다가능
// 길이의 한계도 없음 



// 2. 배열 요소 접근
// 순서대로 저장하기때문에 각각의 원소에 번호로 접근가능 
let item1 = arrC[0];
let item2 = arrC[1];
console.log(item1, item2); // 1,2 출력됨 
// 주의할점, 배열은 0부터 시작됨
// 배열의 원소 중 몇번째 원소를 가져오고 싶은지 의미하는 숫자를 인덱스라고 부름
// 인덱스를 활용하면 배열요소에 접근 가능하고 
arrC[0] = "hello";
// 특정 원소의 값을 수정하는 것도 가능
console.log(arrC);