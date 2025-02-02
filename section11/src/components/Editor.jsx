import './Editor.css';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Editor = ( ) => {

  /*const data = useContext(TodoContext);*/ // useContext는 리액트 훅은 인수로 전달한 "TodoContext" 로부터 공급된 데이터를 반환해주는 함수
  // data라는 변수에는 TodoContext가 제공한 어떠한 값들이 들어있을것임
  /* console.log(data) */ // {todos: Array(3), onUpdate: ƒ, onDelete: ƒ, onCreate: ƒ}  출력

  const { onCreate } = useContext(TodoDispatchContext); // conText를 통해서 데이터를 다이렉트로 받는걸로 수정
  
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }

  }
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
     }
    onCreate(content);
    setContent(""); 
  };
  return (
    <div className="Editor">
      <input type="text" ref={contentRef} onKeyDown={ onKeyDown } value={content} onChange={onChangeContent} placeholder="새로운 To do..." />
      <button onClick={ onSubmit }>추가</button>
    </div>
  )
};

export default Editor;