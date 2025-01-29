import { useReducer } from "react";

// 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action);
  /* 많아지면 곤란해지므로, if 문이 아니고, 
  if (action.type === "INCREASE") {
    return state + action.data
  } else if (action.type === "DECREASE") {
    return state - action.data
  }*/
  switch (action.type) {
    case 'INCREASE': return state + action.data;
    case 'DECREASE': return state - action.data;
    default: state
  }
}
// dispatch 상태변화요청 > reducer 함수호출 > 그때 액션객체가 매개변수로써 전달됨 > state의 초기값인 0, action type: "INCREASE", data : 1, 액션 객체가 들어감
// 조건문이 참이되어 현재 스테이트 값 + action,data 를 반환하고
// 이게 새로운 스테이트값으로 반영됨

const Exam = () => {

  const [state, dispatch] = useReducer(reducer, 0); // reducer라는 함수를 인수로 넣어줌
  // state 를 생성해서 배열의 첫번째 요소로 반환해줌
  // dispatch 라고 불리는 상태변화를 요청하기만 하는 그런 함수를 반환해줌
  // 상태변화가 있어야한다는 사실을 알리는, 발송하는 함수
  
  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지 정보를 전달해줘야함
    // -> 액션 객체 
    dispatch({
      type: "INCREASE",
      data : 1,
    }) // 1. dispatch를 호출해서 상태변화요청 
    // 2. 요청의 내용으로는 보통 객체의 형태로전달
    // 액션객체임
    
  }

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data : 1,
    })
  }
  
  
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;