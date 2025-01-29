import "./Header.css";
import {memo} from "react"

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  ) //  toDateString메서드를 호출 문자열로 date렌더링 
};

const memoizedHeader = memo(Header);

export default memo(Header);