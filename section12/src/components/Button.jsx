import './Button.css';

const Button = ({text, type, onClick}) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>{ text}</button>
  )
}
// props를 객체 구조분해할당을 이용해서 여러개 받아올예정
// 첫번째는 버튼 내부에 내부 텍스트영역에 쓰여질 프롭스인 text 값
// type (긍정적 버튼인지, 일반적인 버튼인지,부정적버튼인지)
// onClick 버튼 클릭시, 실행할 이벤트함수

// className={`Button Button_${type}`} 이렇게 씀으로 인해서 app.jsx에서 type을 설정한대로 받아와짐

export default Button;