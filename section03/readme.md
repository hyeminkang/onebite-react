node.js
ㄴ 웹 브라우저가 아닌 환경에서도 자바스크립트 코드를 실행시켜주는 자바스크립트 런타임, 자바스크립트의 실행환경 = 구동기 = 실행환경

httos://nodejs.org
ㄴ current 최신
ㄴ lts 추천버전

npm
ㄴ node package manager
ㄴ 새로운 패키지 설치, 외부 라이브러리를 설치, 삭제 유용한 기능 제공

패키지
ㄴ node.js에서 사용하는 프로그램의 단위임

모듈시스템
ㄴ 모듈을 다루는 시스템

온라인 쇼핑몰
회원관리기능 / 장바구니 기능 /결제기능
ㄴ 한가지 파일로 작성하면~  문제가 어마무시함
ㄴ 그래서 기능별로 파일을 나눠서 개발
user.js / cart.js / payment.js >> 이런게 모듈
ㄴ 이런 모듈들을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템을 모듈시스템이라고 부름

Javascript의 모듈시스템
1) commonJS (CJS)
2) ESModue (ESM)
ㄴ package.json 에 "type":"module" 추가
ES 모듈시스템은 사용하려면 패키지 내 앞으로 내가 ES모듈시스템을 사용할거다 라는걸 설정해줘야 하는데 이때 package.json에 해당내용삽입
ㄴ 앞으로 이제 이 섹션 03 패키지는 ES모듈시스템을 쓸거다의 의미임

라이브러리
ㄴ 프로그램을 개발할때 필요한 다양한 기능들을 미리 만들어 모듈화 해놓은것
날짜라이브러리, 수학라이브러리, 그래픽 라이브러리 등등


라이브러리 설치후
package.json
ㄴ dependencies 항목 추가됨 (의존 이라는 뜻으로 이 프로젝트는 이 랜덤 컬러라는 라이브러리를 이용한다)
node_modules
ㄴ 설치한 라이브러리가 실제로 저장되는 곳
ㄴ "설치된 라이브러리의 저장소"
package-lock.json
ㄴ 이 패키지가 사용하고 잇는 라이브러리 버전이나 정보를 package.json보다 더 정밀하게 저장하는 파일

노드모듈은 삭제되어도 package.json의 dependencies의 정보를 기준으로 모든 패키지, 모든 라이브러리를 다시 설치해줌