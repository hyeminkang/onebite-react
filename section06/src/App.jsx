import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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