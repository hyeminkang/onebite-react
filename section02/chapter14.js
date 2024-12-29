// async
// 함수앞에 키워드임
// 어떤함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 반환하도록 변환해주는 그런 키워드

async function getData() {
  /*return {
    name: "이정환",
    id:"winterlood",
  }*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
          id:"winterlood"
      });
    }, 1500);
  });
} // async 키워드로 인해서 비동기함수가 되었음!
// 객체를 그대로 반환하는 함수가 아니라 객체를 결과값으로 갖는 새로운 Promise 반환하는 함수로 변환됨
console.log(getData()); // promise 객체가 반환됨

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  console.log(data) // 
} // async, await 를 쓰면 promise 가 종료되도록 기다려줌

printData(); // 1.5초 뒤에 {name: "이정환", id:"winterlood"}객체 반환됨 

/** 원래라면 하단 코드처럼 했어야함 **/
// function printData() {
//   getData().then((result) => {
//     console.log(result)
//   });
// }
// printData(); // 1.5초 뒤에 {name: "이정환", id:"winterlood"}객체 반환됨 
// async, await를 사용하면 then 메서드를 저렇게 쓸 필요가없음 
