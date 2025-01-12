import { useState } from 'react';
// 간단한 회원가입폼
// 1. 이름 
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {
  const [name, setName] = useState("이름"); // input에 초기값을 설정하고 싶으면 "이름" 넣어주면됨!
  const [birtth, setBirth] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value)
    // ㄴ setName함수를 호출해서 e.target.value를 인수로 설정하면 
    // 인풋 태그에 값을 입력하면 이벤트핸들러 onChangeName이 실행이 되면서, 
    // setName 함수를 호출하고 e.target.value에 사용자가 작성한 값이 전달되고 최종적으로 nameState에 저장됨
    /*
    console.log(e) // SyntheticBaseEvent 이벤트객체가 출력됨
    console.log(e.target.value) // target.value 프로퍼티에 접근 (내가 작성한 텍스트 접근 가능)
    */
  }

  const onChangeBirth = (e) => {
    setBirth(e.target.value)
  }

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeBio = (e) => {
    setBio(e.target.value)
  }

  

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} placeholder={"이름"} />
        {name}
      </div>
      
      <div>
        <input type="date" value={birtth} onChange={onChangeBirth} /> 
        {birtth}
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}/>
        {bio}
      </div>
    </div>
  )
}

export default Register; // 내보내줌
// 사용자가 텍스트르 입력하게 되면 nameState에 보관할 수 있도록 만들어줘야해서 onChange 라는 이벤트핸들러를 넣어준거고
// onChangeName 함수를 만들어서 연결시켜줌 (텍스트를 입력하게되면 onChangeName이 실행될 것)
// onChangeName 함수에서는 인풋에 입력된 값을 받아와서 setName함수를 호출해서 스테이트에 보관
// 이벤트 객체 e 매개변수로 받아와서 콘솔에 출력하는 것 까지 일단 해보기

// return 내 { name } nameState를 렌더링하도록 만들어주시면 우리가 입력하는 값이 저장되는거 확인가능
// value={name} (value{state})를 하면 state의 초기값이 인풋태그의 초기값으로 들어감

// date로 input설정시, date-picker 렌더링됨

// select 내 value의 값을 저장해주면 텍스트의 값으로 state에 저장이 되는게 아니고, value의 값으로 저장이됨