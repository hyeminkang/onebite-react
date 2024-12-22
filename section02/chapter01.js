// 1. Falsy 한 값 
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // Big integer 아주아주 큰 숫자를 저장할때 사용하는 값
// 위 7가지는 조건문에서 거짓으로 평가됨

/* if (!f1) { // not 을 만나서 조건식은 참이 됨
    console.log("falsy")
}*/



// 2. truth 한 값 
// ㄴ 7가지 falsy한 값들을 제외한 모든 값들
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

/*if (t4) {
    console.log("truthy");
}
*/



// 3. 활용사례
function printName(person) {
    /*if (person === undefined || person === null ) {  */
    if ( person ) {
        console.log("person 값 없음")
        return;
    }
    console.log(person.name); // 이정환 출력 
} // person 이라는 매개변수로 객체값을 받는 printName이라는 함수

 let person = {name:"이정환"}; //객체 
/* let person; */
/*let person = null;*/
 // 이걸로 하면 오류가 나는데, 그 이유는 우리가 조건에 undefined와 비교하였기때문에, 
// 이런 상황을 방지하게 위해서 조건문에 || null 을 넣으면됨 근데 이렇게하면 길어지겠찌?
//그럴때  falsy, truly 등을 쓴다

printName(person); // printName함수를 호출하고 인수로 전달해주면 name 프로퍼티값이 console 출력
// let person;으로 객체를 정의하면 인수로 전달된 person이 undefined 됨
// 매개변수로 객체를 받을 거라고 생각했는데, undefined값이 불러오는 상황 자주발생함