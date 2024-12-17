// 1. 상수 객체
// 상수에 저장해놓은 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
// 상수를 선언하게 되면 저장된 값을 다시는 바꿀수 없다고 배웠으나, 상수객체는
animal.age = 2; // 새로 추가하는 경우 
animal.name = "까망이" // 수정
delete animal.color // 삭제 
// 생성, 수정, 삭제 가능 
console.log(animal);
// 상수라는게 새로운 값을 할당하지 못하는 그런 변수, 새로운 값을 할당하는건 문제가 되지만, 
// 저장 되어있는 객체 값의 프로퍼티를 수정하는건 문제가 되지않음



// 2. 메서드
// 메서드라는건, 객체 프로퍼티들중에 값이 함수인 프로퍼티 
const person = {
  name: "이정환",
  /*sayHi: function () {
    console.log("안녕!");
  },*/ // 메서드
  
  /*sayHi: () => {
    console.log("안녕!");
  },*/ // 화살표 함수로도 가능 

  sayHi() {
    console.log("안녕!");
  } // 메서드 선언
}

person.sayHi(); // 안녕 출력, 함수기떄문에 호출가능
// 익명함수도 가능하지만, 화살표 함수도 가능
person["sayHi"]();