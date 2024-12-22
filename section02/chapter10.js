// 1. Date객체 생성 방법 
let date1 = new Date() // new 키워드와 Date라는 내장함수를 호출해서 생성
// Date같은 내장함수들을 생성자라고 부름 
console.log(date1);

let date2 = new Date("1997-01-07"); // 1997년 1월 7일 날짜에 해당하는 Date객체 생성됨
// . / - 다 사용가능 
console.log(date2);

// Date 객체는 날짜말고도 시간도 설정가능, 날짜뒤에 /를 넣어준다음에 
let time = new Date("1997-01-07/10:10:10"); 
console.log(time);

let time2 = new Date(1997,1,7,23,59,59); 
console.log(time2);



// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms 가 지났는지를 의미하는 숫자값
// 협정세계시 UTC (세계 모든 나라가 표준으로 사용하는 시작지점)
let ts1 = date1.getTime(); // getTime() 이라는 메서드 호출
// getTime은 date 객체안에 저장되어 있는 시간에 해당하는 타임스탬프를 계사ㅓㄴ해서 반환해줌
console.log(ts1)

let date4 = new Date(ts1);
console.log(date1, date4)



// 3. 시간 요소들을 추츨하는 방법
let year = date1.getFullYear(); // 메서드호출
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year,month,date,hour,minute,seconds);
// 자바스크립트의 월은 0부터 시작됨 그래서 +1 을 해줘야함



// 4. 시간 수정하기
date1.setFullYear(2023) // 메서드를 호출해서 변경하고 싶은 숫자의 인수를 변경
date1.setMonth(2) + 1;
date1.setDate(30);

date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(50);

console.log(year,month,date,hour,minute,seconds);



// 5. 시간을 여럿 포맷으로 출력하기
console.log(
    date1.toDateString()
) // 시간은 제외하고, 시분초를 제외하고 현재 날짜만 불러오기
console.log(
    date1.toLocaleDateString()
) // 우리나라에서 사용하는 시간으로 출력