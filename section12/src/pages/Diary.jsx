import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  usePageTitle(`${params.id}번 일기`);

  
  const curDiaryItem = useDiary(params.id)
  // undefined 반환이유 : useDiary훅을 보면, 리턴으로 curDiaryitem이라는 state를 반환함, 
  // state의 초기값은 undefined로 설정되어있음
  // curDiaryitem아이템은 useEffect 실행된 후에 저장이됨
  // useEffect는 컴포넌트가 렌더링 된 이후에 실행되기떄문
  
  if (!curDiaryItem) {
    return <div>데이터 로딩중</div>
  } // 예외처리

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringDate(new Date(createdDate));


  return <div>
    <Header title={`${title} 기록`} leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />} rightChild={<Button onClick={()=> nav(`/edit/${params.id}`)}  text={"수정하기"} />}></Header>
    <Viewer emotionId={emotionId} content={content} />
  </div> 
}

export default Diary;

// useParams 현재 브라우저에 명시한 이 url 파라미터값을 가져오는 그러한 기능을 하는 커스텀 훅
// console.log(params) 하면 :id 값이 객체안에 담긴 형태로 출력됨 // diary/100 > {id:100}