// 1. 배열의 구조 분해 할당
let arr = [1,2,3];
// 이런 배열이 있을 경우에, 배열에 원소들을 각각 변수에 일일이 다 할당해줘야한다면
/*let one = arr[0];
let two = arr[1];
let three = arr[2];
*/
// 근데 이런방식으로 각각 변수에 할당해주는건 배열 이름도 적어줘야하고 엄청 불편함
// 그럴땐 구조분해할당을 활용하면 좋음 


let [one, two, three] = arr;
// 세개의 변수를 선언해주고 초기값으로 배열을 넣어줌
// 이렇게되면 1 one / 2 two / 3 three라는 변수에 각각 할당됨 
console.log(one, two, three); // 1 2 3 출력
// 근데 만약에 세번째 원소는 배열에 저장하고싶지않다면, 세번째 변수를 지워버리면됨 !

// 만약에 원소의 갯수를 초과하여 변수를 선언하면 

let [one1, two2, three3, four4 = 4] = arr;
console.log(one1, two2, three3, four4); // 1 2 3 Undefined 출력
console.log(one1, two2, three3, four4); // 1 2 3 4 출력
// 초기화 되지않은 변수처럼 undefined 가 출력됨
// 혹시 추가적으로 four4 = 4 라고 해서 기본값을 설정하는것도 가능 



// 2. 객체의 구조분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스"
} // 객체를 저장하는 변수
// 이 객체안에 각 프로퍼티를 변수에 할당해주려고 한다면 
// let name = person.name; let age = person.age; let hobby = person.hobby;
// 이렇게 다해야하는데,구조 분해할당을 이용하여
let {name, age, hobby} = person; // 객체를 구조분해할당할때는 {} 써야함!
// 이렇게 각자 객체의 프로퍼티를 키값을 기준으로 변수에 저장할 수 잇음!
console.log(name,age,hobby); // 이정환 27 테니스 출력됨
// ex)
let {name1, age1, hobby1} = person;
console.log(name1,age1,hobby1); // Undefined Undefined Undefined 출력

// 만약에 키값의 이름이 아닌, age를 myAge로 받고싶다? 그렇다면
let person1 = {
    name_ : "이정환",
    age_ : 27,
    hobby_ : "테니스"
}
let {name_, age_ : myAge, hobby_} = person1;  // : 이용하여 적으면됨
console.log(name_, myAge, hobby_); // 이정환 27 테니스 잘 출력됨 myAge로 할당했음!



// 3. 객체 구조분해 할당을 이용해서 함수의 매개변수를 받는 방법
let personn = {
    name : '헤이미',
    home : '집'
}
const func = ({name, home}) => {
    /*
    person.name;
    person.age;
    person.hobby;
    */
    console.log(name, home); // 헤이미, 집 출력

}
func(personn);

// 구조분해 할당을 이요하면 훨씬 더 간결히 가능
// 주의사항ㅇ
// 객체를 넘겼을때만 중괄호와 함께 구조분해할당을 받을 수 있음
// 일반적인 값 10을 넘겼다면 구조분해 할당은 이뤄지지않음 