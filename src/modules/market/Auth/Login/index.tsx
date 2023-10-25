import { Link } from "react-router-dom";

import {
  Button,
  Container,
  ExceptionButton,
  Loginbutton,
  Logindiv,
  Logininput,
} from "./styles";
import getCookie from "@/utils/cookie";

const Login = () => {
  return (
    <>
      <Container>
        <Link to={"http://localhost:5000/"} style={{ marginBottom: "20px" }}>
          <img
            src={require("../../../../components/market/Header/tent.png")}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          />
          <img
            src={require("../../../../components/market/Header/logo.png")}
            style={{ width: "160px", height: "55px" }}
          />
        </Link>
        <form action="http://192.168.100.109:8080/auth/signin" method="post">
          <Logindiv>
            <Logininput
              type="text"
              placeholder="아이디"
              name="userid"
            ></Logininput>
            <Logininput
              type="password"
              placeholder="비밀번호"
              name="userPassword"
            ></Logininput>
          </Logindiv>

          <Button>로그인</Button>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          ></div>
        </form>

        <Loginbutton>
          <ExceptionButton>회원가입</ExceptionButton>
          <ExceptionButton>계정찾기</ExceptionButton>
        </Loginbutton>
      </Container>
    </>
  );
};

export default Login;
