import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/Notfound';
import { useReducer, useRef, createContext } from 'react';

// 1. "/" : 모든 일기를 조회하는 home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New페이지
// 3. "/diary" : 일기를 상세히 조회하는 diary 페이지
// 4. Edit : 수정

const mokData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content :"1번 일기 내용"
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content :"2번 일기 내용"
  },
]

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mokData); // mokData 초기값가져온것
  const idRef = useRef(3) // ID저장할것 (mokData에 1,2 있어서 3)

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
  }

  return (
    <>
      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "hello")
      }}>일기추가테스트</button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다")
      }}>일기수정테스트</button>

      <button onClick={() => {
        onDelete(1);
      }}>일기삭제테스트</button>

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
