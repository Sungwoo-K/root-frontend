import { Link } from "react-router-dom";
import { useState } from "react";
import { Container, Forminput, Input, Inputdiv } from "./style";
import axios from "axios";

const [userName, SetuserName] = useState("");
const [userId, SetuserId] = useState("");
const [userNickName, SetuserNickName] = useState("");
const [userPassword, SetuserPassword] = useState("");
const [userSex, SetuserSex] = useState("");
const [userBirth, SetuserBirth] = useState("");

const [formData, setFormData] = useState({
  userName: "",
  userId: "",
  userPassword: "",
  NickName: "",
  userSex: "",
  userBirth: "",
});

async function postExample() {
  await axios.post("http://192.168.100.109:8080/auth/sign", {
    userId: formData.userId,
    userName: formData.userName,
    userPassword: formData.userPassword,
    nickName: formData.NickName,
    userSex: formData.userSex,
    userBirth: formData.userBirth,
  });
}

const handleInputChange = (e: { target: { name: string; value: string } }) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};

const JoinMem = () => {
  return (
    <>
      <Container>
        <Link
          to="http://localhost:5000/market"
          style={{ marginBottom: "20px", display: "flex", alignItems: "" }}
        >
          <img
            src={require("../../../../components/Header/tent.png")}
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
            }}
          />
          <img
            src={require("../../../../components/Header/logo.png")}
            style={{ width: "160px", height: "55px" }}
          />
        </Link>
        <Forminput>
          <p style={{ fontSize: "30px" }}> 회원 가입</p>
          <Inputdiv>
            <p>이름</p>
            <Input
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
            ></Input>
            <p>아이디</p>
            <Input
              name="userId"
              value={formData.userId}
              onChange={handleInputChange}
            ></Input>
            <p>닉네임</p>
            <Input
              name="NickName"
              value={formData.NickName}
              onChange={handleInputChange}
            ></Input>
            <p>패스워드</p>
            <Input
              name="userPassword"
              value={formData.userPassword}
              onChange={handleInputChange}
            ></Input>
            <p>성별</p>
            <Input
              name="userSex"
              value={formData.userSex}
              onChange={handleInputChange}
            ></Input>
            <p>생일</p>
            <Input
              name="userBirth"
              value={formData.userBirth}
              onChange={handleInputChange}
            ></Input>
          </Inputdiv>
          <button onClick={postExample}>회원가입하기</button>
        </Forminput>
      </Container>
    </>
  );
};
export default JoinMem;
