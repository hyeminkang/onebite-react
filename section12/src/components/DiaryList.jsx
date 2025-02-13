import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    })
  } // 새로운 배열 반환하는 toSorted함수반환


  const sortedData = getSortedDate();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType } name="" id="">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button onClick={() => nav("/new")}  text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => <DiaryItem key={item.id} {...item}  />)}
      </div>
      <div>List</div>
    </div>
  ) 
}

export default DiaryList;
// 모든 일기아이템의 데이터를 props를 아이디값으로 받고있음 