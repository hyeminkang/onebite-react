import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName:"완전 좋음"
  },
  {
    emotionId: 2,
    emotionName:"좋음"
  },
  {
    emotionId: 3,
    emotionName:"그럭 저럭"
  },
  {
    emotionId: 4,
    emotionName:"나쁨"
  },
  {
    emotionId: 5,
    emotionName:"끔찍함"
  }
] // 이 변수에 배열로 데이터만 따로 저장해둔 다음에 실제 return문에서는 map 메서드를 이용해서 리스트로 렌더링으로 하는게 더 좋음

const getStringDate = (targetDate) => {
  // 날짜 = > YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let day = targetDate.getDate();
  
  if (month < 10) {
    month = `0${month}`;
  }
  if ( day < 10 ) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`
  // console.log(year, month, day)
}
// 문자열로 변환된 날짜를 구하는 함수

const Editor = ({ onSubmit }) => {
  
  const [input, setInput] = useState({
    createDate : new Date(),
    emotionId : 3,
    content : ""
  }); // 에디터 컴포넌트안에 어떤 값들을 입력했는지 저장하는 스테이트
  // ㄴ 사용자가 입력한 오늘의 날짜, 오늘의 감정, 오늘의 일기 이런것들을 다 저장 (스테이트를 객체로 저장)

  const nav = useNavigate();

  const onChangeInput = (e) => {
    //console.log(e.target.name) // 어떤 요소에 입력이 들어온건지 
    //console.log(e.target.value) // 입력된 값이 무엇인지

    let name = e.target.name;
    let value = e.target.value;
    if ( name === 'createDate') {
      value = new Date(value)
    }

    setInput({
      ...input,
      [name]: value,
    });
  }

  const onClickSubmitButton = () => {
    onSubmit(input);
  }

  //const emotionId = 2;// 현재 선택된 감정 선택 변수
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate" onChange={ onChangeInput} value={getStringDate(input.createDate)} type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return <EmotionItem
              onClick={() => onChangeInput({
                target: {
                  name: "emotionId",
                  value: item.emotionId,
                }
              }) }  key={item.emotionId} {...item} isSelected={item.emotionId === input.emotionId} />
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea name="content" value={ input.content} onChange={onChangeInput} placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)}  text={"취소하기"}/>
        <Button onClick={ onClickSubmitButton } text={"작성완료"} type={"POSITIVE"}  />
      </section>
    </div>
  )
}

export default Editor;