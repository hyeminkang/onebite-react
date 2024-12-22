// 1, 배열순회
let arr = [1,2,3];

// 1-1. 배열 인덱스를 이용하여 순회
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}
let arr2 = [4,5,6,7,8]
for ( i =0; i<arr2.length; i++) {
    console.log(arr2[i]);
}
// arr.length >> 모든 배열이 가지고 있는 기본적인 프로퍼티로써 배열의 길이를 저장하는 프로퍼티
// 배열이나 함수도 객체이기 때문에 프로퍼티나 메서드를 가진다

// 1-2. for of 반복문
// 오직 배열을 순회하기 위해서만 존재하는 그런 특수한 반복문
for ( let item of arr) {
    console.log(item)
} // for of 라는 반복문은 of 뒤에 있는 배열 값을 하나씩 순서대로 꺼내서 변수 item에 저장함

// 두 반복문의 차이는 for문은 인덱스를 이용하여 무언가를 할 수 있지만, for of는 인덱스를 저장하지않고, 배열안의 값들을 순회만 해준다



// 2. 객체순회
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
}
// 객체의 값들을 순회하는 방법 3가지
// 2-1. Object.keys 사용
// ㄴ 객체에서 key 값들만 뽑아서 새로운 배열로 반환해주는 내장함수  
let keys = Object.keys(person); // 인수로 person이라는 변수전달
console.log(keys) //  ['name', 'age', 'hobby'] 출력
// 이렇게하면 Key 값들만 모아서 배열로 반환을 해줌
for (let i =0; i<keys.length; i++){
    console.log(keys[i]) // name ~ hobby
}
for (let item of keys){
    const value = person[item];
    console.log(item, "," ,value)  // name , 이정환 ~ obby , 테니스
} // value값도 순회를 같이 시키고 싶다면 괄호표기법 이용 person[key]
// 좀 더 깔끔하게 하고실다면 value 변수선언해서~ 

// 2-2. Object.values 사용 
// ㄴ 객체에서 value값들만 뽑아서 새로운 배열로 반환 
let values = Object.values(person);
console.log(values) //  ['이정환', 27, '테니스'] 출력
for ( let item of values) { 
console.log(item)
}

// 2-3. for in 
// ㄴ for of 처럼 이건 객체만을 위해서 존재하는 특수한 반복문
for ( let key in person) { // person 객체의 프로퍼티를 Key에 할당해줌
    const value = person[key]// 
    console.log(key, value)
}

// 쉽게 기억하기 
// 객체 떠올릴땐 in / 배열은 of