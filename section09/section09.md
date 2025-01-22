useReducer  : 컴포넌트 내부에 새로운 state를 생성하는 리액트 훅
모든 useState는 모든 useReducer로 대체가능
차이점 : 상태관리코드를 컴포넌트 외부로 분리할 수 있음  

const [todos, setTodos] = useState(mokData) 이건 app컴포넌트 내부에서만 접근가능
state 관리 코드 또한 app 내부에서만 작성가능 

onCreate / onUpdate / onDelete 와 같은 todos 스테이트 관리하는 코드들이 app내부에서만 작성가능 
setTodos함수, todos state모두 app내에서만 접근가능하면서 이때 상태관리 코드가 너무 길어져서 useReducer 활용
ㄴ app컴포넌트가 렌더링하는 UI요소가 무엇인지 파악하기 힘들고, 가독성이 떨어지고 유지보수도 힘듬

useReduer 함수이용해서 app외부에서 관리


dispatch 상태변화요청 > reducer 함수호출 > 그때 액션객체가 매개변수로써 전달됨 > state의 초기값인 0, action type: "INCREASE", data : 1, 액션 객체가 들어감



const [state, dispatch] = useReducer(reducer, initialState);
ㄴ reducer 상태를 변경하는 로직을 정의한 함수, state와 action을 인자로 받아야함
ㄴ initialState 초기값
ㄴ state는 useReducer가 반환하는 현재 상태값
ㄴ dispatch 액션을 보내는 함수