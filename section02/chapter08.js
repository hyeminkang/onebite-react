// 5가지 요소 순회 및 탐색 메서드 
// 1. forEach 
// ㄴ 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];
arr1.forEach( function(item, idx, arr) {
console.log(idx, item * 2) // 0,2 / 1,4 / 2,6 출력
}) // 인수에 콜백함수를 넣어주면됨
// forEach가 반복문처럼 순회하면서 콜백함수를 호출하면서 
// 매개변수로 현재 요소의 값(item)과 현재 반복 카운트(idx)와, 전체배열의 값(arr )을 전달해줌 
// 콜백함수는 배열의 요소의 개수만큼 호출이 되고, 3회 호출됨 
// 매번 호출될때마다 매개변수 첫번재호출시에 1, 0, arr 들어오고
// 그다음에 2, 1, arr
// 그다음에 3, 2, arr


let doubledArr = [];
arr1.forEach( (item) => {
    doubledArr.push(item * 2)
})
console.log(doubledArr)



// 2. inclues
// 배열에 특정 요소가 있는 확인하는 그런 메서드
let arr2 = [1,2,3];
let inINclude = arr2.includes(3);
console.log(inINclude) // 3이 있으므로 true 출력



// 3. indexOf
// 특정요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index) // 1 1번인덱스에 있다는 의미 

let arr4 = [2,2,2];
let index2 = arr4.indexOf(2);
let index3 = arr4.indexOf(20);
console.log(index2); // 배열의 맨 앞부터 탐색을 하기때문에 첫번째 인덱스를 반환함
console.log(index3); // 20이 배열내에 존재하지 않기 때문에 -1을 반환함



// 4. findIndex 
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런 특정 요소의 인덱스(위치)를 반환하는 메서드 
let arr5 = [1,2,3];
const finedIndex = arr5.findIndex((item) => {
    // if( item===2) {
    //     return true;
    // }
    if( item % 2 !== 0) {
        return true // 0반환
    }
})
/** 간단히 만들어보기 **/
const finedIndex1 = arr5.findIndex((item) => item % 2 !== 0 )
console.log(finedIndex);
// 콜백함수를 전달해줌, 이렇게 콜백함수를 만족하는 요소를 배열에서 찾아서 인덱스를 반환해줌
// 콜백함수를 만족한다는건 true 값을 반환한다는것
// findIndex가 존재하는 이유는 indexOf 라는 메서드는 배열에 원시타입 값이 들어있을 때가 아니라
// 객체타입의 값들이 젖아된 배열에서는 정확한 요소의 위치를 찾아낼 수 없음

let ObjectArr = [
    {name : '이정환'},
    {name : '홍길동'},
]
console.log( ObjectArr.indexOf({name: "이정환"}) ); // 못찾음 IndexOf
// 얕은비교로 비교하기때문에 못찾음 (===)
console.log( ObjectArr.findIndex((item) => item.name === '홍길동') ) // 1출력
// 아이템의 네임이라는 프로퍼티의 값을 기준으로 비교를 시켜줄수있기 때문에 정확한 위치를 찾을 수 잇음



// 5. find메서드 
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 그 요소를 그대로 반환
let arr6 = [
    {name : "이정환"},   
    {name : "홍길동"}
];
// 객체값들을 보관하는 배열
const finded = arr6.find(
    (item) => item.name === "이정환"
);
console.log(finded) // {name: '이정환'} 객체 자체 반환