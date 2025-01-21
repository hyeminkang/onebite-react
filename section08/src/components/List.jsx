import './List.css';
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete  }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => // 모든 todoItem을 순회하면서 하단 연산값이 참이되는 투두의 아이템만 필터링
      todo.content.toLowerCase().includes(search.toLowerCase()) //t o dos 배열에 필터 메서드를 호출하고 그 결과값을 반환함 
      // content의 includes라는 메서드 호출 content 는 제목의 값 React 공부하기, 빨래하기 등등
    );
  };

  const filteredTodos = getFilteredDate();  // 이 컴포넌트가 리렌더링 될때마다 호출해주고, 결과값을 저장
  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input value={search} onChange={ onChangeSearch } type="" placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
          ); // 하나의 콜백함수를 받은 다음에 배열의 모든 요소에 대해서 콜백 함수를 수행한 뒤에 이 콜백함수가 리턴한 반환 값들을 모아서 새로운 배열로 반환하는 그런 메서드
          // 리스트로 어떠한 컴포넌트를 렌더링 할때는 모든 아이템은 컴포넌트에 key라는 프롭을 고유한 값으로 전달해야함
        })}  

      </div>
    </div>
  )
}; 

export default List;