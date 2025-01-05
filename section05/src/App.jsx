import './App.css'
import Header from './components/Header'// 확장자는 생략해도 됨 vite에서 그렇게 설정해둠
import Main from "./components/Main"; 
import Footer from "./components/Footer"; 

function App() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
