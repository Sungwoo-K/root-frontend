import { Link } from "react-router-dom";
import { Container, Input, Inputdiv } from "./styles";
import { useState } from "react";
import axios from "axios";

const joinMem = () => {
  const [userName, SetuserName] = useState("");
  const [userId, SetuserId] = useState("");
  const [userNickName, SetuserNickName] = useState("");
  const [userPassword, SetuserPassword] = useState("");
  const [userSex, SetuserSex] = useState("");
  const [userBirth, SetuserBirth] = useState("");

  async function postExample() {
    await axios.post("http://localhost:8080/auth/signup", {
      userId: "useasdr1",
      userName: "parkasd1",
      userPassword: "1asd231123",
      nickName: "gan1chasdan",
      userSex: "fema1asdle",
      userBirth: "916asd0828",
    });
  }
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
        <p style={{ fontSize: "30px" }}> 회원 가입</p>
        <Inputdiv>
          <p>이름</p>
          <Input
          // name="userName"
          // value={formData.userName}
          // onChange={handleInputChange}
          ></Input>
          <p>아이디</p>
          <Input
          // name="userId"
          // value={formData.userId}
          // onChange={handleInputChange}
          ></Input>
          <p>닉네임</p>
          <Input
          // name="nickName"
          // value={formData.nickName}
          // onChange={handleInputChange}
          ></Input>
          <p>패스워드</p>
          <Input
          // name="userPassword"
          // value={formData.userPassword}
          // onChange={handleInputChange}
          ></Input>
          <p>성별</p>
          <Input
          // name="userSex"
          // value={formData.userSex}
          // onChange={handleInputChange}
          ></Input>
          <p>생일</p>
          <Input
          // name="userBirth"
          // value={formData.userBirth}
          // onChange={handleInputChange}
          ></Input>
        </Inputdiv>
        <button onClick={postExample}>회원가입하기</button>
      </Container>
    </>
  );
};
export default joinMem;
