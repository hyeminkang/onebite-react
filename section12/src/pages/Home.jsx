import { useSearchParams } from "react-router-dom";

const Home = () => {

  const [params, setParams] = useSearchParams();
  return <div>Home</div> 
}

export default Home;


// Header 컴포넌트 / DiaryList 컴포넌트 / DiaryItem 컴포넌트