import { useState } from "react"; // 리액트가 제공하는 내장함수


// 임시로 만들기
const Counter = () => {
  const [count, setCount] = useState(0);

  return  ( <div>
    <h1>{count}</h1>
    <button onClick={() => {
    setCount(count + 1);
    }}>+</button>
  </div>
  ) 
}

export default Counter;