import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";


import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import usePageTitle from "../hooks/usePageTitle";

const getMonthlyData = (pivotDate, data) => {

  const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
  const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
  
  return data.filter((item) =>
    beginTime <= item.createdDate && item.createdDate <= endTime
  )
}

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotdate] = useState(new Date());
  usePageTitle("감정일기장")


  const monthlyData = getMonthlyData(pivotDate, data);
  console.log(monthlyData)

  const onIncreaseMonth = () => {
    setPivotdate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() + 1))
  }
  const onDecreaseMonth = () => { 
    setPivotdate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() - 1))
  }


  return (<div>
    <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
      leftChild={<Button onClick={ onDecreaseMonth } text={"<"} />}
      rightChild={<Button onClick={ onIncreaseMonth } text={">"} />}
    />
    <DiaryList data={ monthlyData } />
  </div> 
  )
}

export default Home;

// useContext 공급하는 DiaryStateContext 를 data라는 이름으로 받아옴


// Header 컴포넌트 / DiaryList 컴포넌트 / DiaryItem 컴포넌트
// pivotDate 날짜를 보관하는 pivotDate State

// setPivotdate(new Date(pivotDate.getFullYear(),pivotDate.getMonth() + 1))
// ㄴ pivotDate 함수를 호출하면서, 새로운 데이트 객체는 년도는 동일하고, 한달을 뒤로미룬 이러한 새로운 데이트객체가 값으로 변경됨

//월별로 필터링 기능만들것

// beginTime >>  안에 들어가는 date 객체는 pivotDate에 년도, 월을 저장하고 1일 0시 0분 0초를 객체를 만들어서 저장함
// 이후 필터
// EndTime >> 마지막 시간 
//data.filter 중에서 item.createdDate가 beginTime보다는 나중 endTime보단 과거면 이번달에 작성 일기 