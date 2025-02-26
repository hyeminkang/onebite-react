import { useEffect } from "react";


const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0] //$ 사용이유 : 관례상 dom요소가 저장될 것이라는 의미
    $title.innerText = title;
  }, [title]) // new컴포넌트가 마운트된 이후에 바로 변경
}

export default usePageTitle;