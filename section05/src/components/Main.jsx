import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. (삼항연산자, 변수, 값 한줄의 코드가 특정값으로 평가될수 있는 식만 가능, if for 등은 올수없음  )
// 2. 숫자, 문자열, 배열 값만 정삭적으로 렌덩링됨 (boolean, undefined, null 등은 화면에 렌더링 안됨!, 객체를 반환시키려하면 화면이 하얗게 변함, 객체 렌더링 불가)
// 3. 모든 태그는 닫혀있어야 함 ex) <img>
// 4. 최상위 태그는 반드시 하나여야함 (하단 코드에서 main 같은 친구)

// JSX에서 스타일을 설정하는 방법 두가지
// 1. 요소에 직접 스타일 입력 <div style={{
//   backgroundColor:"red",
//   borderBottom:"5px solid blue"
// }}>로그아웃</div>
// 2. 파일만들기

const Main = () => {
  /*const number = 10;*/
  const user = {
    name: "이정환",
    isLogin: true,
  };
  if ( user.isLogin ) {
    // return <div style={{
    //   backgroundColor:"red",
    //   borderBottom:"5px solid blue"
    // }}>로그아웃</div>
    return <div className="logout">로그아웃</div>
  } else {
    return <div>로그인</div>
  }

  /*return (
    <>
      { user.isLogin ? (
        <div>로그아웃</div> 
      ) : (
        <div>로그인</div>
      )}
    </>
      /*<main>
  <h1>main</h1>
  <h2>{number}</h2>
  <h2>{number + 10}</h2>
  <h2>{number % 2 === 0 ? "짝수" : "홀수"}</h2>
  
  </main>
    );
  */
  
};

export default Main;
