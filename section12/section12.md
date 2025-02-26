페이지 라우팅
ㄴ 경로에 따라 알맞은 페이지를 렌더링 하는 것

피드형의 인덱스페이지
새 일기를 쓰는 New페이지
상세를 쓰는 diary 페이지

MPA
ㄴ Multi Page Application
서버가 여러개의 페이지를 가지고 있음

서버사이드렌더링
ㄴ 미리 완성해놓은 html파일을 보내주면 브라우저가 렌더링해줌 

리액트는 MPA 방식을 따르지않음 
ㄴ 쾌적한 페이지 이동이 힘들기 때문
ㄴ 쉽게말해서, 페이지 이동시에 새롭게 그려지기때문

리액트는 SPA 방식을 따름
SPA : Single Page Application
 
bundling : 자바스크립트 파일을 묶어주는 것

client side rendering 클라이언트 사이드 렌더링
ㄴ 브라우저에서 직접 자바스크립트 파일을 실행해서 화면을 직접 렌더링하도록 하는 방식 
서버사이드렌더링과 반대되는 개념! 


SPA 방식 정리
1. 기본적인 틀 역할을 하는페이지는 한개만 가지고 있는 SPA 방식을 따름 
2. 화면에 렌더링해야하는 요소의 정보를 html에 작성하는게 아니라 js에 컴포넌트를 작성 
접속 요청시 
기본틀인 HTML 파일을 보내줌
 모든 자바스크립트 파일을 전달해주기 편하게 하기 위해서 번들링해서 브라우저에게 후속으로 전달
브라우저에서는 자바스크립트를 직접 실행하여 파일에 작성된 컴포넌트들을 화면에 직접 렌더링함 
bundling 된 bundle.js파일은 리액트 앱이라고 부름 



리액트 라우터
npmjs 라이브러리
ㄴ 대다수 리액트 앱에서 활용함



페이지 라우팅
ㄴ 동적경로
동적인 데이터를 포함하고 있는 경로 
ㄴ 쇼핑몰 1번상품페이지, 2번 상품페이지, 3번 상품페이지  (product/1,2,3 등) 123이 동적인 데이터 
ID 값 명시 : url Parameter (아이템의 id 등 변경되지 않는 값들)
변수명과 값 명시 : Query String (?=검색어)


공통컴포넌트를 먼저 구현하는 이유
1) 프로젝트 개발 순서가 사람마다 다름



APP > context를통하여 >> HOME / DIARY / NEW / EDIT 지원해야함 
Home : 일기데이터 리스트로 렌더링
Diary : 특정 하나의 일기 데이터를 불러와서 해당 데이터를 화며에 렌더링 
New : 일기 데이터의 새로운 아이템을 추가
Edit : 특정 일기데이터를 수정



감정일기장 회고 
ㄴ 일기 데이터를 보관하기 위해서 앱 컴포넌트 안에 useReducer 리액트 훅을 이용해서 새로운 state data라는 이름으로 생성 
ㄴ 초기값은 mokData를 활용
ㄴ 일기 데이터를 저장하는 데이터 state를 app 컴포넌트안에 만든 이유 : 데이터 state에 보관이 될 일기데이터들을 모든 페이지에서 이용할수 있어야하기 때문
return 안쪽에 모든 페이지 컴포넌트들의 부모 역할을 하고있는 App 컴포넌트에 배치를 시켜줌
ㄴ 왜냐면 컴포넌트간에 데이터를 주고받을때 props / context를 이용해야하는데 두 가지 방법 모두 부모에서 자식으로만 전달할수 있으므로
ㄴ home 컴포넌트, New 컴포넌트 diary 컴포넌트, edit 컴포넌트 모두 공통적인 부모로 갖는 이 App 컴포넌트에 data라는 일기데이라는 state를 배치시켜줌 

app컴포넌트에 배처되어있는 data state를 페이지 역할을 하는 컴포넌트들에게 공급해주기위해서 context 사용
ㄴ props의 드릴링 방지하기위해서 사용
app 컴포넌트에서는 diary state Context라는 context객체를 통해서 일기 데이터를 모든 페이지에 공급해줌
ㄴ useContext를 통해서 diary state Context가 공급하는 일기 데이터를 꺼내와서 사용가능해짐

hoem 컴포넌트에서는 header영역과 diary list를 나뉘어져 있는 홈페이지를 구현하기 위해서 header컴포넌트를 상단에 배치 / left child, right child로 앞서 만들어줌 <Button> 컴포넌트 활용
홈페이지 header는 양쪽 버튼을 클릭했을 때, 가운데 렌더링 되는 날짜를 월 단위로 한달씩 이동 시켜줌
ㄴ 이 기능을 구현하기 위해서 월 단위로 변경되는 날짜 데이터를 저장하기 위해서 home 컴포넌트 안에 pivotDate라는 새로운 state를 만들어줌
state 값을 헤더의 버튼이 클릭될때마다 onIncreaseMonth / onDecreaseMonth 함수를 통해서 값을 바꾸는 기능을 만듬
홈 컴포넌트에서는 pivotDateState라는 저장된 날짜를 기준으로 context로 받아온 일기 데이터를 월별로 필터링함
getMonthlyData라는 함수를 컴포넌트 바깥에 만들어서 pivotDate값을 기준으로 현재 data state로 부터 이번달에 해당하는 데이터만 필터링해서 반환 
ㄴ 시작시간, 마지막시간을 타임스탬프 형태로 계산해서 아이템의 create데이트 시작이상이면서, 동시에 마지막 시간 이하로 이달의 데이터만 필터링하도록 설정
getMonthlyDataf를 바깥에 쓴 이유 : 필요한 데이터는 매개변수로 다 받아올수있고, 함수 내부가 좀 길고 복잡해서 밖에 선언 (가독성 및 불필요한 함수의 재생성 방지를 위해서)

홈 컴포넌트 : 날짜를 월별로 이동시킬수 있는 header / header에 표시된 날짜를 기준으로 이번달에 해당되는 일기만 렌더링해서 diaryList에 넘겨주는 역할
ㄴ getMontyly 데이터는 컴포넌트 내부에서 리렌더링 될떄마다 호출해서 이번달의 일기 데이터만 필터링한 결과물을 Monthlydata에 저장해둠 Monthlydata변수를 실제 일기 리스트를 렌더링할 컴포넌트인 diaryList 컴포넌트에 데이터라는 일므의 props로 전달을 해줌 



diaryList : 실제 일기 렌더링
ㄴ 홈컴포넌트에서 ㅔrops로 넘겨준 Monthlydata를 data 라는 이름으로 받아옴 
다양한 컴포넌트 내부에 로직을 거쳐 일기 데이터를 실제로 화면에 리스트 형태로 렌더링 시켜줌 
ㄴ 1) 정렬 필터, 새로운일기를 쓰는 메뉴바 섹션
ㄴ 2) 실제 일기들이 리스트로 렌더링 리스트 섹션
으로 나눠짐 
메뉴바 섹션
ㄴ 셀렉트 태그로 만든 정렬필터 존재 (최신순, 오래된순) select 태그의 onChnage 를 통해서 sortType state에 보관
ㄴ 정렬 기준을 토대로 일기데이터를 실제로 get Sorted Data로 정렬 toSorted로 받아줌 
컴포넌트가 리렌더링 될때마다 map 메서드를 이용해서 리스트로 렌더링 
정렬 필터를 바꾸면 실시간으로 정렬이 바뀜




NEW 페이지
ㄴ 새로운 일기를 생성
상단 :header 컴포넌트 
하단 : edit 컴포넌트 
반복적으로 등장하는 감정선택 요소 emotionItem 컴포넌트로 만들예정 (map 메서드를 통해서 리스트로 렌더링)


editor.jsx
ㄴ 사용자의 입력을 컴포넌트 위에 있는 input state에 보관
ㄴ 작성완료를 클릭하면 onSubmitButtonClick 함수가 실행하게됨
부모 컴포넌트로부터 props로 전달받은 onSubmit()함수를 호출하면서, 인수로는 input state값을 전달해줌

onSubmit함수는 new 컴포넌트에 정의가 되어있는데, 
useContext를 통해서 app컴포넌트로부터 공급받은 onCreate함수가 호출되면서 일기데이터가 추가됨


edit
ㄴ 기존일기를 수정하는 페이지

Diary
ㄴ 일기를 조회하는 페이지
Header / viewer 


최적화가 필요한 때
ㄴ 비용이 많이 드는 계산
ㄴ API 호출, 데이터가공 등등
언제할까?
React 렌더링 최적화 기능들 > useMemo , useCallback, React.memo

- web Stroage (웹브라우저 내장DB)
ㄴ 프로그램설치X, 라이브러리X
ㄴ 자바스크립트 내장함수만으로 접근가능
값 저장 : localStorage.setItem(key, value)
값 꺼냄 : localStorage.getITem(key)

1) SessionStorage (앞에 session 붙임)
ㄴ 브라우저 탭 별로 데이터 보관
ㄴ 탭 종료되기전에는 데이터 유지 (새로고침)
ㄴ 탭이 종료되거나 꺼지면 데이터 삭제
2) LocalStorage (앞에 local 붙임)
ㄴ 사이트 주소별로 데이터보관 
ㄴ 직접 삭제하기전까지 보관

- 배포준비하기
ㄴ 페이지 타이틀 설정하기 (title)
ㄴ Favicon 설정하기
ㄴ 오픈 그래프 태그 설정하기
ㄴ 프로젝트 빌드

- 배포하기
