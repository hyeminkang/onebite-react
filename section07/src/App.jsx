import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect } from 'react'; 

// useEffect를 이용하면 컴포넌트 내부에서 값이 변경되었을 때, (Ex count state) 우리가 원하는 동작을 수행함

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  // return 아래에 input 내로 우리가 입력하는 값들은 해당 스테이트에 저장됨 
  // 콘솔이 안바뀌는거보니 useEffect에서 콜백함수가 실행되고 있지않고있음
  // deps에 count만 들어가있기 때문에 input값이 아무리 바뀌어도 콜백함수는 실행되지않음
  // 의존성 배열에 input추가하면 바뀜 ㅋ

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`); 
   }, [count, input]); // useEffects는 두번째 인수로 전달한 배열의 값이 바뀌게 되면 , 사이드이펙트로써 첫번째 인수로 전달한 콜백함수를 실행시켜줌
  // 이 배열을 의존성 배열이라고 부름 dependency array>deps 
  // deps에는 값을 여러개 넣어도됨
  
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
         }  } />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={ onClickButton } />
      </section>
    </div>
  )
}

export default App


// 카운트가 증가되는걸 보여주려면  스테이트를 만들수있는 곳이 총 3가지가 있는데,
// 1. 현재카운트 count가 있는 Viewer컴포넌트, 2. 버튼이 있는 Controller컴포넌트, 3. 부모컴포넌트 App
// 정답은 부모 컴포넌트 App 
// ㄴ Viewer와 Component가 아닌 이유는 서로 부모자식 관계를 갖지않기 때문
// (어떠한 값도 서로 공유할수 없음)


// count={count1} 이거 자체가 Props인데 
// count는 Viewer 컴포넌트가 받을 props의 이름이고, count1은 부모 컴포넌트에서 전달된 값
// count={count1}에서 **count**는 Viewer 컴포넌트에서 받는 props의 이름이고, **count1**은 부모 컴포넌트에서 전달하는 값


// 구조분해할당으로 객체구조분해할당으로~ 