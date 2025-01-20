import './App.css';
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import { useState, useRef } from "react";

const mokData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래연습',
    date: new Date().getTime(),
  },
]; // mokDate라는 변수는 App컴포넌트가 리렌더링 될 때마다 다시 생성될 필요가없고,
// 애초에 상수기 때문에 값을 바꿀수도 없음 전부잘라내서 외부로 선언
// 객체 안에 있는 것들을 데이터모델링이라고 한다



function App() {
  const [todos, setTodos] = useState(mokData); // state가 생성됨과 동시에 Todo 데이터가 저장됨
  const idRef = useRef(3);

  const onCreate = (title) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: title,
      date: new Date().getTime(),
    }  // title 이라는 매개변수로 에디터 컴포넌트에 입력한 값을 가져와 새로 생성될 투두 아이템을 객체형태로 만들고 이제 todos에 넣어줌, todos와 같은 state값은 반드시 setTodost 즉, 상태변화 함수를 이용해서만 상태변화가 가능
    // id의 값을 기록하기 위해 래퍼런스 객체를 하나 만들어줌 useRef

    setTodos([newTodo, ...todos]) // ...todos 스프레드 연산자를 이용해서 기존 배열들을 펼쳐줌 이후에 내가 생성한 데이터추가
  } 

  return (
    <div className="App">
        <Header />
      <Editor onCreate={ onCreate } />
      <List todos={ todos } />
    </div>
    
  )
}

export default App
