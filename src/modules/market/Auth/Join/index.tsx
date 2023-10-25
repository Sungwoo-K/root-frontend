import { Link } from "react-router-dom";

import { Container, Forminput, Input, Inputdiv, Inputp } from "./style";
import axios from "axios";
import { useState } from "react";
import { Button } from "../Login/styles";

const Join = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userId: "",
    userPassword: "",
    nickName: "",
    userSex: "",
    userBirth: "",
  });

  const postExample = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://192.168.100.109:8080/auth/sign", {
      userId: formData.userId,
      userName: formData.userName,
      userPassword: formData.userPassword,
      nickName: formData.nickName,
      userSex: formData.userSex,
      userBirth: formData.userBirth,
    });

    if (response.status === 201) {
      alert("회원가입이 성공했습니다.");
      window.location.href = "/login";
    } else {
      alert("회원가입에 실패했습니다.");
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <Link
          to="http://localhost:5000/"
          style={{
            display: "flex",
            width: "100%",
            alignContent: "center",
          }}
        >
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
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
          </div>
        </Link>

        <p style={{ fontSize: "30px" }}> 회원 가입</p>
        <Inputdiv>
          <Inputp>이름</Inputp>
          <Input
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          ></Input>
          <Inputp>아이디</Inputp>
          <Input
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
          ></Input>
          <Inputp>닉네임</Inputp>
          <Input
            name="nickName"
            value={formData.nickName}
            onChange={handleInputChange}
          ></Input>
          <Inputp>패스워드</Inputp>
          <Input
            type="password"
            name="userPassword"
            value={formData.userPassword}
            onChange={handleInputChange}
          ></Input>

          <Inputp>성별</Inputp>
          <select
            name="userSex"
            onChange={handleInputChange}
            value={formData.userSex}
            style={{ width: "30.8vh", height: "4vh", marginTop: "5px" }}
          >
            <option value="default">성별 선택</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
          </select>

          <Inputp>생년월일</Inputp>
          <Input
            style={{ width: "30.4vh", height: "3.5vh", marginTop: "5px" }}
            type="date"
            name="userBirth"
            value={formData.userBirth}
            onChange={handleInputChange}
          ></Input>
        </Inputdiv>
        <Button onClick={postExample} style={{ width: "31vh" }}>
          회원가입하기
        </Button>
      </Container>
    </>
  );
};
export default Join;
