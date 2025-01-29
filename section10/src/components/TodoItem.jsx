import './TodoItem.css'
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  const onClickDeleteButton = () => {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} readOnly checked={ isDone } type="checkbox" />
      <div className="contents">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton} >삭제</button>
    </div>
  )
} // id, isDone, content, date, onUpdate, onDelete 요게 바뀌는게 아닌이상 리렌더링 되지않음 
// 하단에 memo(TodoItem); 이케 써주었기 때문!!

//React.memo 로 최적화하기
// 고차컴포넌트 HOC 
// export default memo(TodoItem, (prevProps, nextProps) => { 
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
// 메모함수 두번째 인수로는 콜백함수 전달가능
// 메모 컴포넌트는 부모컴포넌트가 리렌더링 될때마다 컴포넌트의 props가 바뀌었는지를 스스로 판단하는게 아닌,
// 콜백함수의 매개변수로 과거의 props, "prevProps" "nextProps" 반환값에 따라서 
// props가 바뀌었는지 판단
// True > props 바뀌지않음(리렌더링 X), False >props 바뀜(리렌더링O)


//함수는 객체타입으로 저장을 하기때문에, 변수에는 주소값으로써 저장이됨 
// const a = {a:1} const b = {a:1} 같은 객체값이지만 주소가 같아서 a === b 를 해보면 false가 나옴

export default memo(TodoItem);
// props가 바뀌었을때만 컴포넌트를 리렌더링 하도록 최적화하기 떄문에 매번 리렌더링이 발생할때마다 현재의 Props와 
// 과거의 props를 비교 같은값인지, 다른값인지 판단해서 todoItem을 리렌더링 할지말지 결정


// 메모메서드 잘 적용되는 방법 1
//앱컴포넌트에서 onCreate, onDelete, onUpdate 를 메모이제이션 하여서 리렌더링 되더라도 다시 생성되지 않게 방지함
// 2) todoItem 두번째 인수로 콜백함수를 추가로 전달해서 최적화 기능을 커스터마이징 하기
