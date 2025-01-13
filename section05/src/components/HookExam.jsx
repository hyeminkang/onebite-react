import useInput from "../hooks/useInput";

// 3가지 Hook 관련된 팁
// 1. 함수컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 훅을 직접 만들 수 있따.


const HookExam = () => {

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  const state = useState();
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={ onChange2 } />
    </div>
  )
  
}

export default HookExam;