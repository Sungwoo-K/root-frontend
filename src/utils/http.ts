import axios from "axios";
import { getCookie } from "./cookie";

const http = axios.create();

// 요청값에 대해서 사전처리
http.interceptors.request.use((config) => {
  const token = getCookie("token");
  console.log("---token---");
  console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 응답값에 대해서 사전처리
http.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    if (status === 401 || status == 403) {
      alert("로그인이 필요합니다");

      window.location.href = "/login";
    }

    if (status === 404) {
      alert("데이터 존재하지 않습니다.");
    } else {
      console.error("No response found in error object:", error);
    }

    return;
  }
);

export default http;
