// promise 객체 생성
/*
const promise = new Promise((resolve, reject) => {
  // 비동기작업 실행하는 함수 executor 

  setTimeout(() => {
    console.log("안녕");
    resolve("안녕");
    /*reject("왜 실패했는지...")
  }, 2000)
}); // 생성자를 이용해서 Promise 생성 
// 비동기 작업을 실행해줄 콜백함수 넣기
//promise 객체가 생성됨과 동시에 자동으로 콜백함수를 호출해서 안에있는 비동기 작업 실행해줌
console.log(promise)
/*console.log(promise)*/ // promise 객체 출력
// executor 함수에는 resolve, reject 라는 매개변수가 전달됨
/*
setTimeout(() => {
  console.log(promise)
}, 3000)
*/

// promise 객체 생성
/*const promise = new Promise((resolve, reject) => {
  // 비동기작업 실행하는 함수 executor 

  setTimeout(() => {
    const num = 10;
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다")
    }
  }, 2000)
}); // 생성자를 이용해서 Promise 생성 */
// 비동기 작업을 실행해줄 콜백함수 넣기
//promise 객체가 생성됨과 동시에 자동으로 콜백함수를 호출해서 안에있는 비동기 작업 실행해줌
/*console.log(promise)*/
/*console.log(promise)*/ // promise 객체 출력
// executor 함수에는 resolve, reject 라는 매개변수가 전달됨

// then (prmoise 의 결과값을 직접 이용하기 위하여 사용)
/*promise.then(( value ) => {
  console.log(value)
})*/
// 메서드를 호출하고 인수로 callback 함수를 넣어주고 나면, 
// executor 함수에서 resolve를 호출하게 되면 then메서드에 전달한 콜백함수가 실행됨
// 동시에 resolve에서 전달한 결과값을 매개변수로 제공해줌
// value 라는 매개변수로 executor 함수의 결과값을 받아옴
// executor 함수가 reject되면 then메서드는 실행되지않음
// 이럴땐 catch 사용

// catch 
/*promise.catch(( error ) => {
  console.log(error)
})*/

// then메서드는 promise를 한번 더 반환
// then 메서드의 promise와 catch 메서드의 promise 가 같고
// then메서드가 성공이되면 그 Promise 를 다시 반환하니까 catch를 붙여서 사용할수있음
// 줄여서 사용가능
  /*promise.then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error)
  });*/
// promise 체이닝임! 
  

function add10(num) {
  const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다")
    }
  }, 2000)
  });
  return promise;
}
const p = add10(0)
p.then((result) => {
  console.log(result); // 10출력

  const newP = add10(result); 
  /**  만약 더 줄이고자 한다면 
  const newP = add10(result);  
  return newP;
  >> return add10(result)
  **/
  
  return newP; // 이렇게하면 newP는 p.then메서드의 결과값이 됨
}).then((result) => {
  console.log(result); // 20 출력 
  return add10(result);
}).then(result => {
  console.log(result); // 30 출력 
}).catch((error) => {
  console.log(error)
});