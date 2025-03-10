import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { useReducer, useRef, createContext,useEffect, useState } from 'react';

// 1. "/" : 모든 일기를 조회하는 home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary 페이지
// 4. Edit : 수정

// const mokData = [
//   {
//     id: 1,
//     createdDate: new Date("2025-02-12").getTime(),
//     emotionId: 1,
//     content :"1번 일기 내용"
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-02-11").getTime(),
//     emotionId: 2,
//     content :"2번 일기 내용"
//   },
//   {
//     id: 3,
//     createdDate: new Date("2025-01-30").getTime(),
//     emotionId: 3,
//     content :"3번 일기 내용"
//   },
// ]

function reducer(state, action) {
  let nextState; //새로운 state 값의 저장
  switch (action.type) {
    case 'INIT':
      return action.data;
    case "CREATE":
      {
        nextState = [action.data, ...state];
        break
      }
    case "UPDATE":
      {
        nextState = state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
        break;
        }
    case "DELETE":
      {
        nextState = state.filter((item) => String(item.id) !== String(action.id))
        break;
      }
    default:
      return state;
  }
  localStorage.setItem('diary', JSON.stringify(nextState))
  return nextState;
} // reducer함수를 실행되어서, 추가삭제업데이트할때마다 nextState 라는 변수에 값을 담아서 return함

export const DiaryStateContext = createContext(); // 홈 컴포넌트에서 DiaryStateContext 를 통해서 data 스테이트를 공급받아야함
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []); // mokData 초기값가져온것
  const idRef = useRef(0) // ID저장할것 (mokData에 1,2 있어서 3)

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) {
      setIsLoading(false);
      return;
    } // 데이터가 undefined라면 return으로 콜백함수종료
    const parsedData = JSON.parse(storedData);
    //console.log(parsedData)
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    } //배열이 아니라면 종료 
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id)
      }
    })

    //    console.log(maxId)
    idRef.current = maxId + 1; // 아이디값 겹치지않도록

    dispatch({
      type: "INIT",
      data: parsedData
    });
    setIsLoading(false);
  }, [])
  
  // 임시로 저장하는거보기
  //localStorage.setItem('test', 'hello') // key값은 원시타입만 가능
  //localStorage.setItem('person', JSON.stringify({name:'이정환'}))

  // console.log(localStorage.getItem('test'))
  // console.log(JSON.parse(localStorage.getItem('person')))
  //JSON.parse (undefined) // 이렇게하면 오류가 발생됨 undefined 값이 아닐경우에만 사용가능

  // localStorage 데이터삭제
  localStorage.removeItem('test')


  // 새로운일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    }) // dispatch 함수 호출, action개체 호출 > useReducer가 reducer함수 호출, action개체 전달(dispatch) 
  }
  // 기존일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content
      }
    })
  }
  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>

  }

  return (
    <>
        <DiaryStateContext.Provider value={data}> 
        <DiaryDispatchContext.Provider value={{
            onCreate,onUpdate,onDelete
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit/:id" element={<Edit />} /> 
              <Route path="*" element={<Notfound />} /> 
            </Routes>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider> 
        
    </> // DiaryStateContext 모든 페이지에서 data state의 값을 공급받을수있도록 됨 
    // 모든 페이지 컴포넌트들에서 DiaryDispatchContext로 인해서 onCreate, onUpdate, onDelete의 상태변화함수를 공급받을수있음
  )
}
// "*"를 찍으면 와일드카드라고 부름 (스위치 문에서 default 같음 )

// 주의사항 
// 1) Routes 안에는 Route만 들어갈수있음!! 
// 2) Routes 밖에 배치된 요소들은 페이지 라우팅과는 관련없이, 모든 페이지에 동일하게 렌더링됨

// Link 컴포넌트는 클라이언트사이드렌더링방식으로 페이지를 이동 (필요한 컴포넌트만 교체)

// button클릭시 onClickButton 함수 호출되어 nav 주소로 이동 (useNavigate 사용) 

// 링크가 필요할땐 링크컴포넌트 활용 
// 이벤트핸들러 함수 안에서 특정조건에 따라서 페이지를 이동시켜야한다면 useNavigator 사용
// ㄴ 특정조건 : 로그인, 폼제출후 다음페이지로 이동, 파일업로드, 로그인 안한 사용자 로그인페이지 이동, 시간지나면 자동로그아웃, 장바구니 비우기 등고


//<Route path="/diary/:id" element={<Diary />} /> 내에서 :id 값은 무조건 동적경로인 url 파라미터를 의미하는 값 
// diary/100 어떤값을 넣어도 다 diary로 렌더링


// font > public / img > assets 이유는 정적인 폰트파일이나 이미지 파일을 저장할수있음
// 나눈 이유는 vite가 내부적으로 진행하는 이미지 최적화때문임
// 최적화할거아니면 public에 넣어두됨! public 폴더로 부른다면, import 시키지않고 url로 불러올수있음!

// import 시켜서 불러온 이미지는 데이터 콜론 이미지 블라블라 이런식으로 암호문같은 포맷으로 설정됨
// data Url 이미지와 같은 외부데이터들을 문자열의 형태로 브라우저의 메모리에 캐싱하기위해서 사용되는 포맷임
// 해당포맷으로 설정하면 자동으로 브라우저 메모리에 캐싱, 저장되어서 새로고침 하더라도 다시는 불러오지않도록 최적화됨
// 이미지들은 그냥 새로고침할때마다 매번 새롭게 불러옴 
// 네트워크 탭 들어가면 확인가능


// button Type에서 default는 제거해도 무방 (그냥 button의 스타일로 나옴 button_undefined )
export default App
