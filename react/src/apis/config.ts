import axios from "axios";

const HOST_URL = `${process.env.REACT_APP_API_URL}`

const instance = axios.create({
  baseURL: HOST_URL,
});

/**
 * 응답 전 처리
 */
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(`----------> ERROR RESPONSE : ${error.config.url}`);
    console.log(`----------> ERROR MESSAGE  : ${error.message}`);
    return Promise.reject(error);
  }
);

/**
 * 인증 이후 Request Header에 Token 설정
 * @param token : JWT TOKEN
 */
export const axiosApplyConfig = (token: string) => {
  if (!token) throw "Token is required";

  instance.defaults.headers.common["Authorization"] = token;
};

/**
 * 로그아웃 이후 Request Header에 Token 설정
 */
export const axiosClearAuthHeader = () => {
  delete instance.defaults.headers.common["Authorization"];
};

// TODO CHECK :: STATUS 별 Error 처리
export function handleNetworkError(status: number) {
  switch (status) {
    case 0:
      console.log("네트워크 연결 유실");
      break;
    case 401:
      console.log("401 인증 필요");
      break;
    case 403:
      console.log("403 권한 없음");
      break;
    case 404:
      console.log("404 잘못된 요청.");
      break;
    case 500:
      console.log("500 서버 에러");
      break;
    default: {
      if (status >= 500) {
        console.log("잘못된 요청입니다");
      }
    }
  }
}
export default instance;
