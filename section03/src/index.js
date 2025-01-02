

// commonJs 방식 
/* const moduleData = require("./math");
console.log(moduleData) // { add: [Function: add], sub: [Function: sub] } 출력
//내장함수 require 이용하여 모듈의 경로를 인수로 전달하여 사용
// moduleData에는 { add: [Function: add], sub: [Function: sub] } 이라는 객체가 저장됨

console.log(moduleData.add(1, 2)); // 3출력
console.log(moduleData.sub(1, 2)); // -1출력
console.log('안녕 Node.js');

// 구조분해할당 이용
//const {add, sub} = require("./math");
//console.log(add(1, 2)); // 3출력
//console.log(sub(1, 2)); // -1출력
*/

// ES모듈 방식
import mul from "./math.js"; // math모듈의 대표는 중괄호없이 새로선언해줘야함
//기본값을 불러올땐 multiply 이름을 바꿔도됨 multiply 가 싫으면 mul도 가능
import { add, sub } from "./math.js" 
//import mul, { add, sub } from "./math.js"; // 동일한곳에ㅓㅅ 불러오니까 합치기도 가능 

// math 모듈로 부터 add와 sub를 가져온다 의미
// ES모듈 방식에는 .js 확장자까지 꼭 명시해줘야함

/*
console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));
*/

import randomColor from "randomcolor"; // 라이브러리에서 어떠한 값을 가져올때는 경로명시가 아니라 라이브러리 이름만 명시하면 됨 ! 
const color = randomColor();
console.log(color);