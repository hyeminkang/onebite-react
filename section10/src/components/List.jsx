import './List.css';
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

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

  const getAnalyzedData = () => {
    /*
    console.log("getAnalyzedData 호출"); // 처음 렌더링시에 호출, 검색어를 쓸경우 계속 호출, 삭제 할때 노출 계속 노출됨
    const totalCount = todos.length; // 등록된 전체 ToDo아이템의 갯수 저장
    const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 Todo들 중 완료된 투두의 갯수 저장
    // ㄴ doneCount 는 todos State에 보관된 데이터 갯수가 증가하면 증가할수록 훨씬 더 오래 걸리는 함수가 될 것, filter메서드는 배열 내 전체요소들을 다 순회하면서 걸러야하기떄문에
    const notDoneCount = totalCount - doneCount; //아직 완료되지않은 투두 갯수저장 

    return {
      totalCount,
      doneCount,
      notDoneCount
    }*/
  } // useMeno를 이용하면 연산자체를 메모이제이션 할 수 있음, 그리고 특정 조건이 만족하였을 경우에만 결과값을 다시 계산하도록 설정할수도 있음

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출"); // 처음 렌더링시에 호출, 검색어를 쓸경우 계속 호출, 삭제 할때 노출 계속 노출됨
    const totalCount = todos.length; // 등록된 전체 ToDo아이템의 갯수 저장
    const doneCount = todos.filter((todo) => todo.isDone).length; // 전체 Todo들 중 완료된 투두의 갯수 저장
    // ㄴ doneCount 는 todos State에 보관된 데이터 갯수가 증가하면 증가할수록 훨씬 더 오래 걸리는 함수가 될 것, 다 순회하면서 걸러야하기떄문에
    const notDoneCount = totalCount - doneCount; //아직 완료되지않은 투두 갯수저장 

    return {
      totalCount,
      doneCount,
      notDoneCount
    } // useMemo는 이 리턴값인 totalCount, doneCount, notDoneCount 이 값을 그대로 반환해줌!
    // 결국 반환값은 {totalCount, doneCount, notDoneCount} 객체임!
   }, [todos]);
  // 두번째 [] deps임, 의존성 배열 
  // useEffect훅을 배울 때, deps에 들어가는 값이 바뀌면 콜백 함수를 다시 실행하는 훅
  // useMemo도 똑같이 deps에 포함된 값이 변경될때마다 첫번째 인수로 전달한 콜백함수를 다시 실행
  // 해당 콜백함수가 반환하는 값을 useMemo는 그대로 다시 반환을 해줌
  // ex) const a = useMeno(() => { return 1 }, [])
  // deps에 아무것도 없기때문에 첫번째 콜백함수의 연산과 반환이 한번만 시행됨
  // 콜백함수에는 메모이제이션하고싶은 연산을 넣어주면됨

  /*
  const { totalCount, doneCount, notDoneCount } = getAnalyzedData();
  */
  // 결과값을 구조분해할당으로 받기
  // 리스트 컴포넌트가 리렌더링 될떄마다 지금 계속 새롭게 호출될 것임

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
            <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>
          ); // 하나의 콜백함수를 받은 다음에 배열의 모든 요소에 대해서 콜백 함수를 수행한 뒤에 이 콜백함수가 리턴한 반환 값들을 모아서 새로운 배열로 반환하는 그런 메서드
          // 리스트로 어떠한 컴포넌트를 렌더링 할때는 모든 아이템은 컴포넌트에 key라는 프롭을 고유한 값으로 전달해야함
        })}  

      </div>
    </div>
  )
}; 

export default List;