import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  const params = useParams(); // params를 기준으로 id값의 데이터를 다 받아와야함
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext); // 현재 일기 데이터인 데이터 스테이트를 불러오도록 함
  const [currentItem, setCurrentItem] = useState()

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id))

    if ( !currentDiaryItem ) { 
      window.alert("존재하지 않는 일기임");
      nav("/", { replace: true }); // 리턴하기전에 호출이 되서 에러임 
    }
    
    setCurrentItem(currentDiaryItem)

   }, [params.id])

  const onClickDelete = () => {
    if (
      window.confirm("일기를 정말 삭제할까요? 다시 복구할수 없다 임마")
    )
    {
      // 일기 삭제 로직
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };
/*
  const getCurrentDiaryItem = () => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id))

    if ( !currentDiaryItem ) { 
      window.alert("존재하지 않는 일기임");
      nav("/", { replace: true }); // 리턴하기전에 호출이 되서 에러임 
    }

    return currentDiaryItem;
  }
  // params.id 해당하는 일기데이터를 꺼내오는 함수

  const currentDiaryItem = getCurrentDiaryItem();
  console.log(currentDiaryItem)
  */
  
  const onSubmit = (input) => {
    if (
      window.confirm("일기를 정말 수정할까요?")
    )
      onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content);
    nav('/', {replace: true});
  };

  return ( <div>
    <Header title={"일기 수정하기"}
      leftChild={
        <Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />
      }
      rightChild={
        <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
      } />
    <Editor initData={ currentItem } onSubmit={onSubmit} />
  </div> 
  )
}

export default Edit;