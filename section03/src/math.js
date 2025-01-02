// 덧셈, 뺄셈 기능 지원
// Math 모듈

export function add(a, b) {
  return a + b;
} // a,b라는 매개변수를 받아 a+b 로 리턴

export function sub(a, b) {
  return a - b;
}

// add와 sub 함수를 내보내서 index 모듈이 사용할수 있게 해줘야함
// 이때 CJS common.js 모듈 시스템 활용

// module.exports = {
//   add: add,
//   sub: sub,
//   // add, sub 로만 써도 알아서 알아먹음
// }; // CommonJs로 내보내는 방식임

// export 키워드 뒤에 객체 리터럴 생성하고 내보내고 싶은 값들을 담아줌
// export { add, sub }; 대신에 function 앞에 export를 붙여줘도됨

// 하나의 모듈을 대표하는 디폴트 값을 내보내는 방법도 있음
export default function multiply(a, b) {
  return a * b;
} // math 모듈을 대표하는 단하나의 기본값
