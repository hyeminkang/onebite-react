import { useState } from "react"; // 리액트가 제공하는 내장함수

const Bulb = () => { // 원래는 (props) => {props.light} 여야하는데 구조분해할당으로 {light} 쓰는것
  
  const [light, setLight] = useState("OFF");
  console.log(light);

  return <div>
    {light === 'ON' ? (
      <h1 style={{ backgroundColor: "orange" }}>ON</h1>
    ) : (
      <h1 style={{backgroundColor:"gray"}}>OFF</h1>
    )}

    <button onClick={() =>{
      setLight(light === 'ON' ? "OFF" : "ON")
    }}>
      {light === "ON" ? "끄기" : "켜기"}
    </button>
  </div>
  
} // 전구역할의 컴포넌트, 이 컴포넌트는 부모컴포넌트로부터 props로 전구상태를 받음 

export default Bulb;
