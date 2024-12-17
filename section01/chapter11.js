// 함수
function greeting() {
  console.log('안녕하세요!');// 실행코드 작성
} // 함수 선언
console.log("호출전");
greeting(); // 함수호출
console.log("호출후");
// 함수선언를 선언했다고 바로 실행되는 것은 아니고, 함수호출을 했을때만 실행됨
// 함수선언 이라는건 함수가 호출되었을때, 어떤 코드들을 실행할건지 준비해두는 작업
// 함수호출시에 꼭 () 를 같이해야함! 이름만부르면 아무일도 일어나지않음
// 함수호출되면 프로그램의 실행순서가 함수내부로 넘어감

function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height; // 넓이

  console.log(area) // 200 출력
} // 해당 함수는 width, height가 고정되어 항상 같은값을 호출함

getArea();
// 동적으로 바꿔보자! 

function getArea1(width, height) { // width, height는 매개변수라고 부름
  let area = width * height; // 넓이

  function another() {
      console.log("또다름")
  }
  
  another();
  //console.log(area)
  return area; // 값을 반환, 반환값이라고 부름 함수호출의 결과값
  console.log("hi"); // 상단에 return 이 있어서 실행되지못함
}
// 함수가 return 문을 만나게 되면 종료됨, return 밑에 더 적어도 실행되지않음
// 추가적으로 함수안에 함수 선언도 가능함!, 이걸 중첩함수라고 부름


getArea1(14, 20);  // 각각 전달된 값은 인수라고 부름
getArea1(30, 50);
let area1 = getArea1(20, 60); // 
console.log(area1); // 1200 저장됨, 함수로 호출해서 계산후에 area1에 저장
let area2 = getArea1(30, 20);
console.log(area2); // 600 출력

// 자바스크립트의 함수는 함수의 호출보다 아래에 선언이 되어도 실행됨
// 이 이유는 호이스팅이라는 기능때문 (끌어올리다 라는 뜻)