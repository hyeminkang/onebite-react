import './App.css'
import { useState } from "react"; // 리액트가 제공하는 내장함수


import Bulb from "./components/Bulb";
import Counter from "./components/Counter";


function App() {

  /*const [state, setState] = useState(0);*/ // useState 함수를 호출해서 반환값을 state라는 변수에 담음 
  /*console.log(state);*/ // [undefined, ƒ] 을 반환하는데 undefined 는 새롭게 생성된 state의 값, ()안에 초기값을 0을 넣게되면 [0,f]를 출력, 0이 state의 값임
  // f() 는 함수인데, state의 값을 변화시키는 함수로 "상태변화함수" 라고함
  // 그래서 보통은 state라는 변수로 함수를 받아오기보단 비구조화할당을 이용하여 [state, setState] 저장
  // state > 값이 들어올거고, setState에는 값을 변경시키는 함수가 들어옴

  return (
    <>
        <Bulb />
        <Counter />
    </>
  )
}
// props가 너무많은경우는 막 늘리지말고 상단 같은 방법 사용해보기
// ... 스프레드 연산자로 사용가능
// props는 문자열뿐만 아니라 html, react 컴포넌트도 전달가능
// <div>자식요소</div>는 children이라는 props 로 전달됨
// 임포트 한 헤더컴포넌트도 children Props로 전달가능 
// props는 부모컴포너트에서 자식컴포넌트로만 전달가능

// 이렇듯 컴포넌트 내에 새로운 스테이트를 생성하고, 해당 스테이트의 값을 버튼을 이용하여 증가시키고 리액트가 내부적으로 앱 컴포넌트의 스테이트가 변경되었다는걸 App() 자체를 리렌더링 해준다고 함
// 컴포넌트 역할을 하고있는 app함수를 다시 호출하고 새롭게 반환한다 
// 앱 컴포넌트가 최초로 렌더링 될 대는 state의 값이 초기값0 이였는데, return 문에서 0 과 + 버튼을 반환하고, 
//버튼을 눌러 증가시켜주고나면 app컴포넌트의 역할을 하는 함수가 다시 호출되면서 1, + 를 반환해줌
//컴포넌트의 스테이트값이 바뀌면 다시 리턴한다 정도로 이해하면됨 

// <button>전구 끄기/ 켜기</button> 삼항연산자로 바꿔주기 >> { light === "ON" ? "끄기" : "켜기"}

// App 내 <Bulb /> 쓰는건 자식컴포넌트로 배치

// 왜 리액트에서는 굳이 state 를 만들어서 써야할까?
// 상태변화가 일어나지않음 (컴포넌트가 리렌더링 되지않음)
// 리액트의 컴포넌트는 변수가 아니라 state의 값이 변화되어야만 리렌더링됨

export default App


// 리렌더링 되는 3가지 상황
// 1. 자신이 관리하는 state값이 변경될때 리렌더링됨
// 2. 자신이 제공받는 props의 값이 변경될때
// 3. 부모컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링됨
// Bulb 컴포넌트는 1과 3에 해당됨