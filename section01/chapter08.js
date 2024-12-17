// 1. null 병합 연산자
// ㄴ 존재하는 값을 추려내는 기능
// ㄴ null, undefined가 아닌 값을 찾아내는 연산자


let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; /* ??가 열병합 연산자*/ // 양쪽의 값 중에 null 이나 undefined 값이 아닌걸 찾아냄
console.log(var4); //10 출력
// var1 은 초기화하지않았기 때문에 undefined 가 들어갈 것
// var2 는 10이니까, null병합 연산자가 var2를 찾아서 var4에 저장

let var5 = var1 ?? var3;
console.log(var5); // 20 출력

let var6 = var2 ?? var3; 
console.log(var6); // 10 출력
// ㄴ null 병합 연산자에 참여하는 두가지의 조건이 모두 null 이나 undefined 가 아니라면 맨 처음값 반환됨

let userName = "이정환";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName;
console.log(displayName); // 이정환 출력, userName을 선언하지않았다면, Winterlood 출력될 것
// 두개의 변수가 있을때 화면에 표시되는 이름
// userName이 존재한다면 userName을 저장하고, userName이 없다면 userNickName을 저장



// 2. typeof 연산자
// ㄴ 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
console.log(var7)
// 이렇게 바꿀순 있지만, 현재 저장된 타입의 값이 궁금하다면
let t1 = typeof var7;
console.log(t1); //hello가 들어갔기 때문에 문자열로 반환될것
// var7 = 20이면 number, var7 = true면 boolean 출력



// 3. 삼항연산자
// ㄴ 항을 3개 사용하는 연산자라서 삼항연산자
// 항이라는건, 연산자 양쪽에 있는 아이
// 조건식을 이용해서 참이나 거짓일때의 값을 다르게 반환할때 사용
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수>"짝", 홀수>"홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
/* ?를 기준으로 앞에는 조건식을 적어주고 그 뒤에는 왼쪽일땐 참일때의 반환간, 오른쪽은 거짓일때의 반환값을 적어준다 */
console.log(res); // 짝수
