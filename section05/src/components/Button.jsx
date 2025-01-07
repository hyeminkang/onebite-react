// 객체구조분해할당
const Button = ({ text, color, children }) => {
  // 이벤트객체
  const onClickButton = (e) => {
    console.log(e); // SyntheticBaseEvent 라는 객체출력
    console.log(text);
  }
  return (
    <button
      /*onClick={() => {
        console.log(text)
      }} */
      onClick={onClickButton}
      /*onMouseEnter={onClickButton}*/  style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};


//onCick 함수를 이벤트핸들러 라고 부름
// onClick 에서 함수를 불러올땐 () 를 붙여서 값을 불러오는게 아니고, 콜백함수를 전달하듯이 전달함

/* 점표기법
const Button = (props) => {
  console.log(props); // 객체형태로 담김 {text: '메일'} / {text: '카페'} / {text: '블로그'}
  return <button style={{ color: props.color }}>
    {props.text} - {props.color.toUpperCase()}
  </button>; 
}
*/

Button.defaultProps = {
  color: "black",
} // 기본값 설정 props

export default Button;


// App.jsx 자식컴포넌트들 (Button text={"메일"}) props를 전달해주면 이 값들은 객체로 묶여서 const Button = (props) => { ~~ 의 매개변수로 제공됨
// Button.jsx의 props 라는 매개변수에는 객체가 제공될 것이고, 해당객체 내에는 프로퍼티로 하나씩 들어갈 것  

// 점 표기법 말고 객체구조분해할당으로도 가능