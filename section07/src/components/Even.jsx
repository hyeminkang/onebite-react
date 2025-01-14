
import { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // 히딘 useEffect가 반환하는 함수 : 클린업  혹읒 정리함수 라고 부름
    // 이건 useEffect가 끝날때 실행됨
    return (
      () => {
        console.log("unmount")
      }
    )
  },[]) 
  return (
    <div>
      짝수입니다
    </div>
  )
}

export default Even;