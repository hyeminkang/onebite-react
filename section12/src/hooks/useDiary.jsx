import { useContext,useState,useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";


const useDiary = (id) => {
  const data = useContext(DiaryStateContext); // 현재 일기 데이터인 데이터 스테이트를 불러오도록 함
  const [curDiaryitem, setCurrentItem] = useState() // 불러온 일기데이터를 저장하는 곳
  const nav = useNavigate()

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(id))

    if ( !currentDiaryItem ) { 
      window.alert("존재하지 않는 일기임");
      nav("/", { replace: true }); // 리턴하기전에 호출이 되서 에러임 
    }
    
    setCurrentItem(currentDiaryItem)

   }, [id, data])

  return curDiaryitem;
}
//use라는 접두사가 붙으면 커스텀 훅이 됨 
// useContext/ useEffect 리액트 훅또한 자유롭게 호출가능 

export default useDiary;