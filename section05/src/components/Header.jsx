const Header = () => {
    return (
        <header>
            <h1>header</h1>
        </header>
    );
};
// 화살표 함수로도 가능
/** Header 컴포넌트 
 function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  )
}
**/
// 클래스를 이용해서도 컴포넌트를 만들수있음 그러나, 클래스로 만들면 작성해야하는 코드양이 많아지고, 함수로 만드는게 일반적이니 함수로 만듬

export default Header;