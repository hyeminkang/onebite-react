react.js
ㄴ Meta가 개발한 오픈소스 javascript라이브러리
ㄴ 대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술
ex) 넷플릭스, 페이스북, 인스타그램, 노션 등이 만들어짐

리액트의 기술적인 특징
1) 컴포넌트를 기반으로 UI를 표현
2) 화면 업데이트 구현이 쉬움
3) 화면 업데이트가 빠르게 처리됨

[컴포넌트를 기반으로 UI를 표현]
컴포넌트 : 구성요소
ㄴ 화면을 구성하는 요소, UI를 구성하는 요소를 말함
header > header.js / main > main.js / footer > footer.js
ㄴ 컴포넌트 단위로 나눠서 모듈화 단위로 저장가능 
중복코드가 발생하고, 페이지 수가 늘어날수록 코드 수정이 어려워지는데 리액트는 이걸 겪지않아도됨

[화면 업데이트 구현이 쉬움]
ㄴ 사용자의 행동(클릭, 드래그)에 따라 웹페이지가 스스로 모습을 바꿔 상호작용을 하는 것
리액트는 선언형 프로그래밍 이기 때문
ㄴ 과정을 생략하고 목적만 간결히 명시하는 방법
각각 컴포넌트에는 state라는 현재의 상태를 저장하는 변수가 있음
ㄴ 얘가 각각 다른 렌더링을 뽑아주게끔 설정하게 해줌

<-> 반대는 명령형 프로그래밍
ㄴ 목적을 이루기 위하여 모든 일련의 과정을 모두 설명하는 방식 (ex. 사용설명서느낌)

-> 업데이트를 위하여 복잡한 동작을 직접 정의할 필요없이 state의 값을 바꾸는 것만으로도 화면 업데이트 가능

[화면 업데이트가 빠르게 처리됨]
(선수지식필요)
1) 브라우저는 어떻게 동작하는가
2) html,css로 만든 페이지를 어떻게 렌더링 되는가
3) 화면 업데이트는 어떻게 처리되는가
브라우저의 렌더링 과정 >> Critical Rendering Path 
html > dom > render Tree(웹 페이지의 청사진) > layout > painting
css > cssom > render tree(웹 페이지의 청사진) > layout > painting
업데이트는 js가 dom을 수정하면 일어남
layout(reflow)과 painting(repaint)이 오래걸리는 과정  >> 성능이 악화됨

리액트는 virtual DOM을 사용하여 알아서 처리해줌
ㄴ DOM을 자바스크립트 객체로 흉내낸것 (복제판)
ㄴ 업데이트가 발생하면 DOM수정 전에 가상의 복제판 DOM에 반영

vite
ㄴ 차세대 프론트엔드 개발 툴
ㄴ 기본 설정이 적용된 react app



public 폴더
ㄴ 이미지폴더, 폰트, 동영상같은 코드가 아닌 정적인 파일의 저장소

src
ㄴ 리액트나 자바스크립트 코드 저장소
ㄴ assets 
ㄴ jsx 리액트에서 사용하는 아주 특수한 확장자

eslintrc.cjs
ㄴ eslint 도구의 설정파일



npm create vite@latest
ㄴ 비트를 이용하여 리액트 앱생성
npm run dev 
ㄴ 리액트 앱 구동 

localhost:5173
ㄴ 비트를 통해 생성한 리액트 앱에 웹서버가 내장되어있고, 앱을 가동하기 위해 npm run dev 라는 명령어를 활용한것



createRoot(document.getElementById('root')).render 
ㄴ document.getElementById('root') index.html의 <div id="root"></div>를 인수로써 전달
ㄴ 그리고 리액트는 createRoot를 사용하여 리액트의 루트로 변환해주고 있음
ㄴ render 라는 메서드를 호출해서 root아래에 App을 렌더링하겠다 (app 컴포넌트를 렌더링하고있음)
ㄴ app컴포넌트는 import App from './App.jsx' 여기서옴! 
ㄴ app.jsx 에 들어가면 app 이라는 함수가있음. 이 함수가 html태그들을 리턴함 그리고 html태그들을 리턴하고 있으면 이걸 컴포넌트라고 부름
결론 : app.jsx 파일에 있는 app이라는 함수, 즉 컴포넌트가 return 하고 있는 html들을 main.jsx 파일에서 react의 루트아래에 렌더메서드를 통해서 화면에 렌더링하도록 설정해둠!