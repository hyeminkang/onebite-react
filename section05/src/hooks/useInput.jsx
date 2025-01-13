import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
  }

  return [input, onChange];
} // getInput > useInput 으로 바꾸고나면 커스텀 리액트 훅이 완성됨

export default useInput;