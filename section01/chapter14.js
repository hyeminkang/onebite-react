// 스코프
// ㄴ 전역(전체영역)스코프, 지역(특정영역)스코프
// 전역스코프 > 전체영역에서 접근가능
// 지역스코프 > 특정영역에서 접근가능

let a = 1; // 전역 스코프
function funcA() {
  let b = 2; // 지역  스코프
  console.log(a);

  function funcB() {

  } // 함수안에 선언했으므로, funcB() 는 호출할수 없음, 그러나 조건문이나 반복문에선 지역스코프를 갖지않아 호출가능
}
funcA();
/*console.log(b);*/ // 오류남! B가 지역스코프이기 때문임

if (true) {
  let c = 1; // 이 또한 지역스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {
    console.log("B함수");
  }
}

console.log(funcB())
/*console.log(d);  */ // d가 지역스코프로 오류