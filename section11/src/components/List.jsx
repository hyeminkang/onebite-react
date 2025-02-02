import './List.css';
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from '../App';

const List = () => {
  const todos = useContext(TodoStateContext); // 이제 객체구조분해할당이 아니기때문에 {} 제거
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredDate = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()) 
    );
  };

  const filteredTodos = getFilteredDate();

  const getAnalyzedData = () => {
   
  }

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    } 
   }, [todos]);

  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <div>
        <div>total : {totalCount}</div>
        <div>done : {doneCount}</div>
        <div>notdone : { notDoneCount }</div>
      </div>
      <input value={search} onChange={ onChangeSearch } type="" placeholder="검색어를 입력하세요" />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem key={todo.id} {...todo} />
          ); 
        })}  

      </div>
    </div>
  )
}; 

export default List;