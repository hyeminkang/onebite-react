import { useState } from 'react';
// 간단한 회원가입폼
// 1. 이름 
// 2. 생년월일
// 3. 국적
// 4. 자기소개 

const Register = () => {

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio:"",
  }); // 객체로 넣어줄 것임 그래서 {} 사용, 프로퍼티로 하단 4개의 스테이트를 보관해줌
  console.log(input)
  // ㄴ input이 입력될때마다console을 계속찍음 
  //{name: '이정호', birth: '', country: '', bio: ''} >> {name: '이정환', birth: '', country: '', bio: ''}
  // 날짜 설정하면{name: '이정환', birth: '2025-01-30', country: '', bio: ''} 이렇게 출력되는데
  // 여기서 핵심이 name은 변화지앟는 다는 것
  
  
  /*
  4개의 스테이트를 상위처럼 간단하게 객체로 묶어서 관리
    const [name, setName] = useState("이름"); // input에 초기값을 설정하고 싶으면 "이름" 넣어주면됨!
    const [birtth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");
   */

  // 통합 이벤트핸들러 생성
  const onChange = (e) => {
    console.log(e.target.name, e.target.value) // birth 2025-01-08 / 이름에씀녀 name 이정환 등 출력
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }
  // 이 함수가 실행이 되면, setInput 이라는 상태변화 함수를 일단 호출을 하고, 인수로는 객체를 만들어서 전달
  // 객체 > {       ...input,       [e.target.name]: e.target.value,     }로는 인수를 만들어서 전달
  // 그럼 스프레드 연산자(...input)로 다 나열을 해준 다음에 마지막에 프로퍼티의 키를 명시하는 자리에 대괄호를 열고 이 대괄호 안에는 e.target.value가 프로퍼티의 키로서 설정이 됨
  // e,target,value 에는 이벤트가 발생한 태그의 name속성에 설정된 값이 들어있음
  
  
  /*
  간단하게 객체로 스테이트를 바꿔주기 때문에 하단 이벤트 핸들러를 상위처럼 수정함
  const onChangeName = (e) => {
    setName(e.target.value)
    // ㄴ setName함수를 호출해서 e.target.value를 인수로 설정하면 
    // 인풋 태그에 값을 입력하면 이벤트핸들러 onChangeName이 실행이 되면서, 
    // setName 함수를 호출하고 e.target.value에 사용자가 작성한 값이 전달되고 최종적으로 nameState에 저장됨
    console.log(e) // SyntheticBaseEvent 이벤트객체가 출력됨
    console.log(e.target.value) // target.value 프로퍼티에 접근 (내가 작성한 텍스트 접근 가능)
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

  step2의 단계로 develop
  const onChangeName = (e) => {
    setInput({
      ...input,
      name:e.target.value
    }) // setInput이라는 함수를 호출하고 인수로는 새로운 스테이트의 값을 전달해야함으로 객체를 새롭게 생성
    // name:e.target.value 이유 > rmfodi onChangeName 함수가 실행되었을때 사용자가 입력한 이 값으로 name프로퍼티의 값이 수정이 되니까 수정해줌
    // ...input, 기존 input state의 들어있던 값들 (name이 아닌, country, birth 등등 )변경하지않고 그대로 사용할수있도록 선언해주는 것 
    // 만약에 ...input을 사용하지않게되면 이 객체로만 inputState의 값이 변경되어버리기 때문에 birth, country 등 프로퍼티는 사라져 버리게됨
  }

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth:e.target.value
    })
  }

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country:e.target.value
    })
  }

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio:e.target.value
    })
  }
  
  */
  
  

  return (
    <div>
      <div>
        <input type="text" name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
        {input.name}
      </div>
      
      <div>
        <input type="date" name="birth" value={input.birtth} onChange={onChange} /> 
        {input.birtth}
      </div>

      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea value={input.bio} name="bio" onChange={onChange}/>
        {input.bio}
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


// value={name,birth}등 써있던 부분을 스테이트를 객체값으로 바꾸어주면서 input.name / input.birth 등으로 바꿔줘야함

//<input type="text" value={input.name} onChange={onChangeName} placeholder={"이름"} /> 여기서
// <input type="text" name="name" value={input.name} onChange={onChange} placeholder={"이름"} />