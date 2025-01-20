import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react'; 

// useEffect를 이용하면 컴포넌트 내부에서 값이 변경되었을 때, (Ex count state) 우리가 원하는 동작을 수행함

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false); // 아직 마운트 되지않았다의 의미로 false
  // return 아래에 input 내로 우리가 입력하는 값들은 해당 스테이트에 저장됨 
  // 콘솔이 안바뀌는거보니 useEffect에서 콜백함수가 실행되고 있지않고있음
  // deps에 count만 들어가있기 때문에 input값이 아무리 바뀌어도 콜백함수는 실행되지않음
  // 의존성 배열에 input추가하면 바뀜 ㅋ

  /*useEffect(() => {
    console.log(`count: ${count} / input: ${input}`); 
   }, [count, input]);
   */ // useEffects는 두번째 인수로 전달한 배열의 값이 바뀌게 되면 , 사이드이펙트로써 첫번째 인수로 전달한 콜백함수를 실행시켜줌
  // 이 배열을 의존성 배열이라고 부름 dependency array>deps
  // deps에는 값을 여러개 넣어도됨
  
  // 1. 마운트 : 생성
  useEffect(() => {
    console.log('mount');
  }, []) // 최초로 1번만 실행시키고 싶은 부분이 있다면 useEffect 호출하고, [] 빈배열쓰고 쓰면됨

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if ( !isMount.current ) {
      isMount.current = true;
      return; 
    } // 이렇게 작성해서 리렌더링 될때마다 하단이 출력되는 것
    console.log("update")
  }) // deps생략, 그러면 마운트 될때마다 계속실행됨
  // 업데이트 될때마다 실행시키고 싶으면, 플래그로써 사용되게끔 하면됨

  // 3. 언마운트 : 죽음
  
  const onClickButton = (value) => {
    setCount(count + value);
    //console.log(count) setCount함수가 비동기로 동작함! 호출만 된거지 실행된건 아님
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
        {count % 2 === 0 ? <Even /> : null}
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