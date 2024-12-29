function add(a,b, callback) { // a와 b두개의 매개변수
  setTimeout(() => {
    const sum = a + b; // sum 에 a와 b 두개매개변수를 더한값을 저장
    callback(sum);
  }, 3000)
} 


/*add(3, 5);*/ // 함수를 호출하면서 인수로 a,b 매개변수값 전달
// 비동기 처리의 결과값이 sum이라는 변수를 add함수 바깥에서도 사용할수 있도록 만들기
// add함수를 호출할때, 비동기 처리의 결과값을 사용하고자 하는 callback 함수를 함께 전달해주면됨

add(1, 2, (value) => {
  console.log(value)
});

// 2분 43초부터~
// add함수가 호출되면서 setTimeout함수가 호출됨
// setTimeout함수는 callback함수를 3초뒤에 실행함
// 3초뒤에 실행된 콜백함수에서 sum이라는 값을 계산한 다음 매개변수로 받은 callback 함수를 안에서 다시호출하면서 sum이라는 값을 전달해줌
// 그리고 나서 (value)의 콜백함수가 한번 더 실행됨
// 매개변수로 3이라는 값이 들어오고, 그 값을 출력

// 비동기작업을 하는 함수의 결과값을 이 함수 외부에서 이용하고 싶다면 이러한 방식으로 콜백함수를
// 사용해서 비동기 함수 안에서 콜백함수를 호출하도록 설정해주면됨


//실용적인예제
// 음식을 주문하는 상황 
function orderFood( callback ) { 
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000); // 3초뒤에 음식이옴
}// 음식주문함수

function coolDownFood( food , callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000)
} // 음식을 식히는 함수

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500)
} // 식은음식 냉동

orderFood(( food ) => {
  console.log(food);
  coolDownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, ( freezedFood ) => {
      console.log(freezedFood);
    })
  });
}); // 이렇게 코드를 작성하면 가독성이 안좋아지고 이게 콜백지옥임
// 이렇게 만들어진 음식 떡볶이를 orderFood 바깥에서도 이용할 수 있게 해주려면
// 매개변수로 callback함수를 받아서 이 함수를 setTimeOut에서 호출하고
// 인수로 비동기 작업의 결과값을 전달해준다 callback(food);

