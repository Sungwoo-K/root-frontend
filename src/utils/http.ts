import axios from "axios";
import { getCookie } from "./cookie";

const http = axios.create();

http.interceptors.request.use((config) => {
  const token = getCookie("token");
  // console.log('---token---');
  // console.log(token);
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401 || status == 403) {
        alert("로그인이 필요합니다");

        window.location.href = "/login";
      }

      if (status === 404) {
        console.error("No response found in error object:", error);
      }
    } else {
      console.error(
        "Error object does not contain a response property:",
        error
      );
    }

    return;
  }
);

export default http;
