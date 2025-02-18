import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

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

const Editor = () => {

  const emotionId = 2;// 현재 선택된 감정 선택 변수
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => {
            return <EmotionItem key={item.emotionId} {...item} isSelected={item.emotionId === emotionId} />
          })}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" name="" id="" cols="30" rows="10"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"}/>
        <Button text={"작성완료"} type={"POSITIVE"}  />
      </section>
    </div>
  )
}

export default Editor;