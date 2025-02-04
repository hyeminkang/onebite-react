import { useParams } from "react-router-dom";


const Diary = () => {

  const params = useParams();
  console.log(params) 
  return <div>{params.id}번 일기입니다</div> 
}

export default Diary;

// useParams 현재 브라우저에 명시한 이 url 파라미터값을 가져오는 그러한 기능을 하는 커스텀 훅
// console.log(params) 하면 :id 값이 객체안에 담긴 형태로 출력됨 // diary/100 > {id:100}