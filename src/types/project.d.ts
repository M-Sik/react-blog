// kakao type에러 때문에 글로벌 window에 인터페이스 주입
declare global {
  interface Window {
    Kakao: any;
  }
}
