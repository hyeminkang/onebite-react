import './App.css';
import Header from "./components/Header"
import Editor from "./components/Editor"
import List from "./components/List"
import Exam from "./components/Exam"

import { useState, useRef, useReducer } from "react";

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


function App() {
  /*const [todos, setTodos] = useState(mokData); */ // state가 생성됨과 동시에 Todo 데이터가 저장됨
  const [todos, dispatch] = useReducer(reducer, mokData);
  const idRef = useRef(3);

  const onCreate = (title) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: title,
        date: new Date().getTime(),
      }
    })
    /*const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: title,
      date: new Date().getTime(),
    } */
    // title 이라는 매개변수로 에디터 컴포넌트에 입력한 값을 가져와 새로 생성될 투두 아이템을 객체형태로 만들고 이제 todos에 넣어줌, todos와 같은 state값은 반드시 setTodost 즉, 상태변화 함수를 이용해서만 상태변화가 가능
    // id의 값을 기록하기 위해 래퍼런스 객체를 하나 만들어줌 useRef

    setTodos([newTodo, ...todos]) // ...todos 스프레드 연산자를 이용해서 기존 배열들을 펼쳐줌 이후에 내가 생성한 데이터추가
  } 

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId : targetId
    })

    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 바꾼 새로운 배열 
    /*setTodos(todos.map((todo) => {
      if (todo.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone
        }    
      }
      return todo
    }))*/
    /*
    setTodos(todos.map((todo) =>
      todo.id === targetId
        ? { ...todo, isDone: !todo.isDone }
        : todo
      )
    );*/
  } // 매개변수 targetId로 현재 업데이트하고자 하는 체크박스가 클릭된 toDoItem의 아이디를 받아와서 
  //함수 내부에서 toDos State의 값들 중 targetId와 일치하는 아이디를 갖는 toDoItem의 isDone 프로퍼티를 변경

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId : targetId
    })
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제하고 새로운 배열로
    // 조건을 만족하는 요소만 딱 제외하고 나머지 요소들로 필터링 ToDos의 Filter메서드 사용
    /*setTodos(todos.filter((todo) => todo.id !== targetId));*/

  }

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={ onCreate } />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
    
  )
}

export default App
