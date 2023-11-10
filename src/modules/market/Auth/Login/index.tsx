import { Link } from "react-router-dom";

import {
  Button,
  Container,
  ExceptionButton,
  Headername,
  Loginbutton,
  Logindiv,
  Logininput,
} from "./styles";
import getCookie from "@/utils/cookie";

const Login = () => {
  return (
    <>
      <Container>
        <Link
          to={"http://localhost:5000/"}
          style={{ marginBottom: "20px", textDecoration: "none" }}
        >
          <Headername>캠프&텐트</Headername>
        </Link>
        <form action="http://localhost:8080/auth/signin" method="post">
          <Logindiv>
            <Logininput
              className="id"
              type="text"
              placeholder="아이디"
              name="userLoginId"
            ></Logininput>
            <div style={{ border: "0.5px solid #dbdbdb" }}></div>
            <Logininput
              className="pw"
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
          <Link to="/join">
            <ExceptionButton>회원가입</ExceptionButton>
          </Link>
          <div
            style={{
              borderRight: "1px solid #adc4ce",
              display: "flex",
              justifyContent: "center",
              marginTop: "3px",
              height: "15px",
            }}
          ></div>

          <ExceptionButton>계정찾기</ExceptionButton>
        </Loginbutton>
      </Container>
    </>
  );
};

export default Login;
