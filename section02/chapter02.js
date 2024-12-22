function returnFalse () {
    console.log("Fasle 함수");
    return false;   
}

function returnTrue () {
    console.log("True 함수");
    return true;   
}

console.log(returnFalse() && returnTrue()) // false 출력, 
console.log(returnTrue() && returnFalse()) // true 함수, false 함수, false 출력, 
// ㄴ 단락평가 작동하지않음, 첫번째 피연산자가 True 였기 때문! 

// returnFalse() 와 returnTrue() 함수의 console이 둘다 찍혀야 한다고 생각하지만,
// False함수만 출력되었음
// returnTrue 함수가 아예 호출자체가 안된 것 처럼 보임, 이유는 단락평가가 작동을 했기 때문임
// && 첫번째 피연산자의 값으로 결과를 확정할 수 있다면, 두번째 피연산자로는 접근조차 하지않음 
// console.log의 값이 returnFalse()의 함수가 false를 출력 
// false and  true >> false 이므로, 두번째 피연산자에는 접근조차 하지않음

console.log(returnTrue() || returnFalse()) // True 함수, true 출력
// 둘중하나만 True여도 True 이므로, 두번째 피연산자에 접근하지않고 바로 출력

// 특정조건에 맞춰서 함수를 아예 호출하지않도록 방지할 수 있는 방식을 가지고있음
// blooean 값말고 truely falsy 값에도 적용됨

function returnFalse2 () {
    console.log("Fasle 함수");
    return undefined;   // falsy
}

function returnTrue2 () {
    console.log("True 함수");
    return 10;    // truthy
}
console.log(returnTrue2() || returnFalse2()) // True 함수, 10 출력
// 첫번째 피연산자인 returnTrue2 함수를 호출해서 true함수라는 메시지 출력
// 첫번째 피연산자가 truthy한 값이라 두번째 피연산자에는 접근할 필요가없음!

// 추가로 알수잇는 부분 : 논리연산식에 truthy 하거나 또는 falsy한 값이 사용되었을 경우
// truthy, falsy 값이 되어버린다!

console.log(returnFalse2() && returnTrue2()) // false 함수, undefined 출력됨
// 두번째 피연산자에 접근안하고 바로 종료됨



// 단락평가 활용 사례
function printName(person){
    /*if(!person){
        console.log("값 없음");
        return;
    }*/
    console.log(person && person.name)
}

// person 매개변수가 undefined 라면, falsy 한 값이라서 단락평가에 의해서
// 두번째 피연산자에는 접근하지않음 undefined 출력함

printName();

function printName2(person){
    const name = person && person.name;
    console.log(name || "person의 값이 없음")
}
printName2(); // undefined를 전달하였을 대는 person의 값이 없음이 출력되지만, 
printName2({name : "이정환"}) // 이정환 출력

// printName2의 사례로 보면
// person의 값으로 undefined이 전달되는데, 그럼 두번째 피연산자에 접근하지않고 
// name = undefined 가 됨
// 그리고 console.log 로 가서 undefined(falsy 값) || "person 이 없음" (truthy 값)
// 근데 or 연산자니까 person이 없음이 출력되는것

// 근데 name : 이정환의 객체값을 정상적으로 인수로 전달하면, 
// person 은 truthy 가 되고, person.name 이 truthy 가 되어 이정환이 잘 전달됨
// name 은 이정환이 되었고 둘다 truthy 한 값이 되어서 첫번째 truthy인 이정환이 출력되는 것 

// 이해하기
// truthy || truthy 면, 첫번째 truthy 한 값이 저장되고
// truthy && truthy 면, 두번째 truthy 한 값이 저장됨

//https://ella951230.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-truthy-falsy-%EB%8B%A8%EC%B6%95%ED%8F%89%EA%B0%80%EB%8B%A8%EB%9D%BD%ED%9A%8C%EB%A1%9C%ED%8F%89%EA%B0%80