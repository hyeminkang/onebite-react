import './App.css';
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import Exam from "./components/Exam"

import { useState, useRef, useReducer, useCallback, createContext } from "react";

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
]; 


function reducer(state, action) { 
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
    
  }
}

export const TodoContext = createContext();
console.log(TodoContext) // 엄청나게 많은 프로퍼티가 나옴 provider만 제대로 알면됨!

// provider가 공급할 데이터를 설정하거나 이 컨텍스트의 데이터를 공급받을 컴포넌트들을 설정하기 위해서 사용하는 프로퍼티
// 사실은 컴포넌트임
// context는 보통 컴포넌트 외부에 선언, 이유는 앱컴포넌트 안에서 리렌더링될떄마다 생성될 필요는없음, 그냥 외부에서 데이터 전달만 해주면되기떄문에

function App() {
  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  const onCreate = useCallback((title) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: title,
        date: new Date().getTime(),
      }
    })
  }, []) 

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    })
}, []);

  
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId : targetId
    })
  }, [])

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <TodoContext.Provider value={
        {
          todos, onUpdate, onDelete, onCreate
        }
      } >
        <Editor />
        <List />
      </TodoContext.Provider>
    </div>
    
  )

  /*
  <TodoContext.Provider>
    <Editor onCreate={ onCreate } />
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
  </TodoContext.Provider>
  이렇게 설정하면, provider 컴포넌트 아래에 있는 모든 컴포넌트들은 전부 TodoContext의 데이터를 공급받을수있음
  데이터를 공급받는 데이터는 value={} 라고 프롭스를 전달해주면됨 =
  */
}

export default App
