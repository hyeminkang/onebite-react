// 1. 콜백함수
/*function main(value) {
  value();
}
function sub() {
  console.log("서브함수")
}
main(sub);*/
// sub()함수가 콜백함수임! 인수로써 전달되었기 때문

function main(value) {
  console.log(value);// sub() { console.log("i am sub") } 출력
  value(); // i am sub 출력
  
}

function sub() {
  console.log("i am sub")
}
/*main(1);*/ // 1 출력
main(sub) // sub() { console.log("i am sub") } 출력됨!  숫자나 문자열과 같은 하나의 값으로 취급하기가능하기 대문
/*main(sub())*/ // 이러면 오류남! value() 함수자체를 불러오는거라

// 콜백이라는게 프로그래밍에서는 뒷전에 실행되는, 나중에 실행되는 이런 뜻

// 하단처럼도 가능 
/*
main(function sub() {
  console.log("i am sub")
});
main(function () => {
  console.log("i am sub")
});
*/



// 2. 콜백함수 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}
/*
function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2)
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3)
  }
}*/
repeat(5, (idx) => {
  console.log(idx);
});
repeat(5, (idx) => {
  console.log(idx * 2);
});
repeat(5, (idx) => {
  console.log(idx * 3);
});
/*repeatDouble(5);
repeatTriple(5);
*/
// 이런 중복코드들 방지하기 위하여 콜백함수를 활용하는것
