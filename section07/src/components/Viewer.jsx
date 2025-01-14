const Viewer = ({ count }) => {
  return (
    <div>
      <div>현재 카운트 :</div>
      <h1>{count}</h1>
    </div>
  );
};

export default Viewer;

// viewer 컴포넌트에 useState를 설정하고나면, setCount를 설정해줘야 count의 값이 변화되는데
// 지금버튼은 controller에 있음. 근데 setCount가 controller로 갈수가없음
// 데이터를 주고받을때 Props를 이용 근데 props는 부모>자식만 전달가능하니까 전달이 안됨 
// app.jsx로 보면 viewer / controller는 부모자식이 아니고 형제관계임 