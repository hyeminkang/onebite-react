// 6가지 요소 조작 메서드
// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3]
//arr1.push(4); 이렇게추가함!
console.log(arr1); // [1, 2, 3, 4] 출력, 4라는 요소가 배열 맨뒤에 추가됨 
// 여러개의 요소를 동시에 추가하고싶다면 , 로 구분해서 넣어서 하면됨 push(,4,5,6,7)
// push 메서드는 요소를 추가한 다음에 변환된 배열의 크기를 반환함!

const newLength = arr1.push(4);
console.log(newLength); // 4 출력  



// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 그 요소를 반환해줌
let arr2 = [4,5,6]
const poppedItem = arr2.pop();
console.log(poppedItem);  // 마지막 요소인 6출력
console.log(arr2); // 6이 제거된 후, [4,5]만 출력



// 3. shift 메서드
// pop메서드처럼 하나의 요소를 제외하는 메서드인데, Pop과는 반대로 맨 앞에 있는 요소를 제거하고 반환함
let arr3 = [7,8,9];
const shiftedItem = arr3.shift();
console.log(shiftedItem); // 7 출력
console.log(arr3); // [8,9] 출력



// 4. unshift 메서드
// push메서드처럼 배열에 새로운 요소를 추가하는데, 배열의 맨앞에 요소를 추가
let arr4 = [10,11,12];
const newLength2 = arr4.unshift(0);
console.log(newLength2); // 4 (길이) 출력
console.log(arr4); // [0,11,12,13] 출력

// ** shift / unshift 는 push나 Pop보단 느리게 동작함!
// 왜그러냐면, push 나 pop같은 경우는 인덱스가 부착되어 움직이기때문에 그냥 추가하거나 삭제할때 인덱스가 바뀌면 되는부분인데
// shift 나 unshift 는 값이 사라지기때문에 오래걸림 (인덱스가 옮겨와야함)
// 인덱스가 옮겨져야하는 비효율적 동작을 하기때문에 느리고 왠만하면 push나 pop을 사용하심이..



// 5. slice 
// 마치 가위처럼, ㄷ배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5];
// 슬라이스를 사용하면 딱 특정범위를 잘라낼수있음 
let sliced = arr5.slice(2,5); // 여기 들어가는 숫자는 인덱스가 기준임! 근데 마지막은 +1을 해서 써줘야함
console.log(sliced) // [3, 4, 5] 출력
// 원본배열을 잘라냈다고 하더라도, 원본배열이 바뀌진않음
console.log(arr5)
// console.log(arr5) 치면 [1,2,3,4,5 ] 그대로 출력됨
// 배열을 끝까지 자를생각임연 두번째 인수는 그냥 끝가지 다 잘라줘서 굳이 두번째인수 안써도됨
let sliced2 = arr5.slice(2);
console.log(sliced2)
// 뒤에서부터 자른다면 그냥 인수에다가 음수값을 넣으면됨!

let sliced3 = arr5.slice(-1);
console.log(sliced3) // [5]출력
let sliced4 = arr5.slice(-3);
console.log(sliced4) // [3, 4, 5] 출력



// 6. concat 메서드 
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열을 반환 
let arr6 = [1,2];
let arr7 = [3,4];
let concatedArr = arr6.concat(arr7)
let concatedArr2 = arr7.concat(arr6)
console.log(concatedArr) //  [1, 2, 3, 4] 출력
console.log(concatedArr2) // [3, 4, 1, 2] 출력