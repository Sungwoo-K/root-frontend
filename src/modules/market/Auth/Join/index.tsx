import { Link } from "react-router-dom";

import { Container, Forminput, Input, Inputdiv, Inputp } from "./style";
import axios from "axios";
import { useState } from "react";
import { Button } from "../Login/styles";

const JoinMem = () => {
  const [formData, setFormData] = useState({
    username: "",
    userid: "",
    userpassword: "",
    nickname: "",
    usersex: "",
    userbirth: "",
  });

  const postExample = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/auth/sign", {
      userid: formData.userid,
      username: formData.username,
      userpassword: formData.userpassword,
      nickname: formData.nickname,
      usersex: formData.usersex,
      userbirth: formData.userbirth,
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
          to="http://localhost:5000/market"
          style={{
            display: "flex",
            width: "100%",
            alignContent: "center",
          }}
        >
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
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
          </div>
        </Link>

        <p style={{ fontSize: "30px" }}> 회원 가입</p>
        <Inputdiv>
          <Inputp>이름</Inputp>
          <Input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          ></Input>
          <Inputp>아이디</Inputp>
          <Input
            name="userid"
            value={formData.userid}
            onChange={handleInputChange}
          ></Input>
          <Inputp>닉네임</Inputp>
          <Input
            name="nickname"
            value={formData.nickname}
            onChange={handleInputChange}
          ></Input>
          <Inputp>패스워드</Inputp>
          <Input
            type="password"
            name="userpassword"
            value={formData.userpassword}
            onChange={handleInputChange}
          ></Input>

          <Inputp>성별</Inputp>
          <select
            name="usersex"
            onChange={handleInputChange}
            value={formData.usersex}
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
            name="userbirth"
            value={formData.userbirth}
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
export default JoinMem;
