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

const memoizedHeader = memo(Header); // 최적화 하고싶은 컴포넌트를 인수로 넣어줌
//ㄴ 이렇게 넣어주면 메모 메서드는 props가 변경되지 않았을때에는 리렌더링 하지 않도록 최적화해서 반환해줌

/*export default Header;*/
//export default memoizedHeader;
export default memo(Header);
// 최적화 컴포넌트 사용하였으면 Header 컴포넌트를 내보내느게 아니라, 최적화시킨 컴포넌트의 변수를 내보냄 