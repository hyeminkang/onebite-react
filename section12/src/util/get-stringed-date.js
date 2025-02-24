export const getStringDate = (targetDate) => {
  // 날짜 = > YYYY-MM-DD
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let day = targetDate.getDate();
  
  if (month < 10) {
    month = `0${month}`;
  }
  if ( day < 10 ) {
    day = `0${day}`;
  }
  return `${year}-${month}-${day}`
  // console.log(year, month, day)
}
// 문자열로 변환된 날짜를 구하는 함수

//getStringDate는 모듈로, editor 컴포넌트에서 사용가능