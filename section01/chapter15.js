// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용함)



// 2. 객체 프로퍼티(객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",  // key : value 
  job: "FE Developer",
  extra: {},
  10 : 20,
};
// 프로퍼티 개수는 제한이 없으며, 자료형의 타입도 제한이 없음
// 프로퍼티 키는 문자열이나 숫자만 가능하며, 따옴표 붙이지않아도됨
// 띄어쓰기가 포함되어있는 키값을 사용하고자 한다면, 따옴표를 붙여야함



// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
//점 표기법
let name = person.name;
console.log(name);

let name2 = person.name2; // 이렇게 없는 프로퍼티를 불러올경우는 Undefined 반환
console.log(name2)

// 괄호 표기법
let age = person["age"];
// 대괄호안에 문자열로 접근하고자 하는 프로퍼티 키를 명시하는 방법,
// 꼭 쌍따옴표와 함께 문자열로 작성해야함

let property = "hobby";
let hobby = person[property];
console.log(hobby); // 테니스 출력 

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person['favoriteFood'] = "초콜릿"
console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
// delete 라는 연산자를 활용함, delete뒤로 삭제하고자하는 프로퍼티를 써줌
delete person.job;
delete person['favoriteFood'];
console.log(person);

// 3.5 프로퍼티의 존재 유무 확인하는 방법
// 존재 유무를 확인할때는 in을 활용
let result1 = "name" in person;
let result2 = "cat" in person;
// in을 기준으로 왼쪽 문자열, 프로퍼티가 오른쪽 객체안에 있냐 없냐 알아보는법
// true, false로 반환함 
console.log(result1); // true 출력
console.log(result2); // false 출력



