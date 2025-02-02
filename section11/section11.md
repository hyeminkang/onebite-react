Context
ㄴ 컴포넌트 간의 데이터 전달을 훨씬 편리하게 만들어주는 리액트 컨텍스트
1. 컨텍스트란?


props를 대체해서 컴포넌트간의 데이터를 전달하는 또다른 방법
ㄴ 기존의 props가 가지고있던 단점을 해결할수있음 

단점이란?
부모 > 자식으로만 전달 가능
계층구조가 두 단계 이상으로 깊어진다면, App > childB로 다이렉트로 전달불가했음
이럴땐 childA가 중간다리 역할을 해줬음
app > childA > childB 이렇게 props를 이용했음 (props Drilling)
ㄴ 프롭스 드릴링

context는 데이터보관소 (객체) 의 역할
ㄴ todos, onCreate, onUpdate, onDelete context에 보고나해두면 props를 이용하지않고 바로 필요한 데이터 공급 가능
>> Props Drilling 해결 가능


props가 바뀌게되면 리렌더링됨
ㄴ 부모컴포너트가 바뀌기때문에 자식컴포넌트도 리렌더링되는 것
app컴포넌트의 todos State가 변경이 되면서 앱 컴포넌트가 리렌더링됨 , 그때  provider로 전달하는 객체자체가 새로생성됨
todoItem 컴포넌트에서 useContext 을 호출해서 todoContext로부터 불러온 객체 자체가 재생성됨(onUpdate, onDelete)
todoContext를 두개로 분리해서 해결함
1)todoStateContext : 변경될 수 있는 값 ex) todos
2)todoDisatchContext : 변경되지 않는 값 ex)onUpdate, onDelete 등 >> useCallback으로 묶었던 아이들