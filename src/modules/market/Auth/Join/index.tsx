import { Link } from "react-router-dom";

import { Container, Forminput, Input, Inputdiv, Inputp } from "./style";
import axios from "axios";
import { MutableRefObject, useRef, useState } from "react";
import { Button, Headername } from "../Login/styles";

const Join = () => {
  const [formData, setFormData] = useState({
    username: "",
    userid: "",
    userpassword: "",
    nickname: "",
    usersex: "",
    birth: "",
  });

  const value = ["남성", "여성"];
  const [selectSex, isSelectSex] = useState<string>("");
  const clickButton = (e) => {
    const selectedSex = e.target.value;
    isSelectSex(selectedSex);
  };

  const postExample = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:8080/auth/sign", {
      userid: formData.userid,
      username: formData.username,
      userpassword: formData.userpassword,
      nickname: formData.nickname,
      usersex: selectSex,
      birth: formData.birth,
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
            textDecoration: "none",
          }}
        >
          <div style={{ marginTop: "10px", marginLeft: "30px" }}>
            <p className="Header">CAMP&TENT</p>
          </div>
        </Link>

        <Headername style={{ marginTop: "80px", fontSize: "60px" }}>
          회원 가입
        </Headername>

        <Input
          name="userid"
          value={formData.userid}
          onChange={handleInputChange}
          placeholder="아이디"
          style={{ marginTop: "70px" }}
        ></Input>

        <Input
          type="password"
          name="userpassword"
          value={formData.userpassword}
          onChange={handleInputChange}
          placeholder="패스워드"
          style={{ marginBottom: "20px" }}
        ></Input>

        <Input
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="이름"
        ></Input>

        <Input
          name="nickname"
          value={formData.nickname}
          onChange={handleInputChange}
          placeholder="닉네임"
        ></Input>

        <Input
          type="text"
          placeholder="생년월일 8자리"
          name="birth"
          value={formData.birth}
          onChange={handleInputChange}
        ></Input>
        <div className="select-sex">
          {value.map((item, idx) => (
            <button
              key={idx}
              value={item}
              name="usersex"
              className={"buttonevent" + (item == selectSex ? idx + 1 : "")}
              onClick={clickButton}
              onChange={handleInputChange}
            >
              {item}
            </button>
          ))}
        </div>
        <Button
          onClick={postExample}
          style={{ width: "300px", marginTop: "80px" }}
        >
          회원가입하기
        </Button>
      </Container>
    </>
  );
};
export default Join;
