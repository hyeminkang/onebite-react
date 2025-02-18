import Header from "../components/header"
import Button from "../components/Button"
import Editor from "../components/Editor" 
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import {DiaryDispatchContext} from "../App"
  
const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext)
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionID, input.content);
    nav("/", {replace:true})
  }

  return <div>
    <Header title={"새 일기쓰기"} leftChild={<Button text={"< 뒤로 가기"} onClick={ () => nav(-1) } />} />
    <Editor onSubmit={ onSubmit } />
  </div> 
}

export default New;