import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {

  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit()
    }

  } // 엔터키를 입력했을 때 새로운 투두가 추가되도록
  // 사용자가 키보드를 눌렀을 때 발생하는 이벤트 
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); // 빈 입력이 들어오면 focus주는
      return;
     }
    onCreate(content);
    setContent(""); // 빈 문자열로 상태를 초기화해줌, 새로운 데이터를 추가한 후 content 스테이트의 값이 빈 문자열로 초기화됨  
  }; // 현재 콘텐츠의 상태가 빈 문자열이라면, onCreate 함수를 호출하지 않도록 리턴
  return (
    <div className="Editor">
      <input type="text" ref={contentRef} onKeyDown={ onKeyDown } value={content} onChange={onChangeContent} placeholder="새로운 To do..." />
      <button onClick={ onSubmit }>추가</button>
    </div>
  )
};

export default Editor;