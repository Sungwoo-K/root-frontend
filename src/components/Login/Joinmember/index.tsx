import { Link } from "react-router-dom";
import { Container, Input, Inputdiv } from "./styles";

const joinMem = () => {
  return (
    <>
      <Container>
        <Link
          to={"http://localhost:5000/market"}
          style={{ marginBottom: "20px" }}
        >
          <img
            src={require("../../Header/tent.png")}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          />
          <img
            src={require("../../Header/logo.png")}
            style={{ width: "160px", height: "55px" }}
          />
        </Link>
        <form action="http://192.168.100.109:8080/auth/signup" method="post">
          <p style={{ fontSize: "30px" }}> 회원 가입</p>
          <Inputdiv>
            <p>이름</p>
            <Input name="userName"></Input>
            <p>아이디</p>
            <Input name="userId"></Input>
            <p>닉네임</p>
            <Input name="nickName"></Input>
            <p>패스워드</p>
            <Input name="userPassword"></Input>
            <p>성별</p>
            <Input name="userSex"></Input>
            <p>생일</p>
            <Input name="userBirth"></Input>
          </Inputdiv>
          <button>회원가입하기</button>
        </form>
      </Container>
    </>
  );
};
export default joinMem;
