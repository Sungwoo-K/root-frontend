import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  Container,
  Editinput,
  Editdiv,
  Select,
  P,
  Button,
  Buttondiv,
  Editp,
} from "./styles";
import http from "@/utils/http";
import axios from "axios";

const EditProfile = () => {
  const [id, setId] = useState("");
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const sexRef = useRef() as MutableRefObject<HTMLInputElement>;
  const birthRef = useRef() as MutableRefObject<HTMLInputElement>;
  const introductionRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const profileEdit = async (e) => {
    e.preventDefault();
    const cet = await http.get("/user/profile");
    const responseData = cet.data;
    setId(responseData);
    const id = responseData.map((item) => item.userLoginId);

    const response = await http.put(`http://192.168.100.109:8080/user/${id}`, {
      username: nameRef.current.value,
      nickname: nicknameRef.current.value,
      birth: birthRef.current.value,
      sex: sexRef.current.value,
      introduction: introductionRef.current.value,
      image: "",
    });
  };

  const [user, setUser] = useState([]);
  const [sex, setSex] = useState("");

  useEffect(() => {
    (async () => {
      const response = await http.get("/user/profile");
      const responseData = response.data;
      setUser(responseData);
    })();
  }, []);

  const handlecheck = (e) => {
    setSex(e.target.value);
    console.log(sex);
  };

  return (
    <>
      <Container>
        <div className="firstedit">
          <P>회원정보수정</P>
        </div>
        {user.map((userData, id) => (
          <div key={id}>
            <Editdiv style={{ marginTop: "2vh" }}>
              <Editp>이름</Editp>
              <Editinput
                ref={nameRef}
                type="text"
                name="username"
                defaultValue={userData.username}
              />
            </Editdiv>
            <Editdiv>
              <Editp>닉네임</Editp>
              <Editinput
                ref={nicknameRef}
                type="text"
                defaultValue={userData.nickname}
                name="nickname"
              />
            </Editdiv>
            <Editdiv>
              <Editp>성별</Editp>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "40px",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <label>
                  <input
                    type="radio"
                    name="male"
                    onChange={handlecheck}
                    value="male"
                    ref={sexRef}
                  />
                  남성
                </label>
                <label>
                  <input
                    type="radio"
                    onChange={handlecheck}
                    value="female"
                    ref={sexRef}
                  />
                  여성
                </label>
              </div>
            </Editdiv>
            <Editdiv>
              <Editp>생년월일</Editp>
              <Editinput
                type="date"
                defaultValue={userData.birth}
                name="birth"
                ref={birthRef}
              />
            </Editdiv>
            <Editdiv>
              <Editp>한줄소개</Editp>
              <Editinput
                type="text"
                defaultValue={userData.introduction}
                name="introduction"
                ref={introductionRef}
              />
            </Editdiv>

            <Editdiv>
              <Editp>프로필 이미지</Editp>
              <img
                src={require("../../../../../../components/market/Header/logo.png")}
                alt=""
              />
            </Editdiv>
          </div>
        ))}
        <Buttondiv>
          <Button onClick={profileEdit}>확인</Button>
          <Button>취소</Button>
        </Buttondiv>
      </Container>
    </>
  );
};

export default EditProfile;
