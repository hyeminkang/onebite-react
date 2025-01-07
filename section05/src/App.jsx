import './App.css'
import Header from './components/Header'// 확장자는 생략해도 됨 vite에서 그렇게 설정해둠
import Main from "./components/Main"; 
import Footer from "./components/Footer"; 
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }
  return (
    <>
      <Button {...buttonProps} /> 
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <div>자식요소</div>
        <Header />
      </Button>
    </>
  )
}
// props가 너무많은경우는 막 늘리지말고 상단 같은 방법 사용해보기
// ... 스프레드 연산자로 사용가능
// props는 문자열뿐만 아니라 html, react 컴포넌트도 전달가능
// <div>자식요소</div>는 children이라는 props 로 전달됨
// 임포트 한 헤더컴포넌트도 children Props로 전달가능 
// props는 부모컴포너트에서 자식컴포넌트로만 전달가능

export default App
