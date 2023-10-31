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

interface UserProfile {
  username: string;
  nickname: string;
  sex: string;
  birth: string;
  introduction: string;
  image: File;
  uuidFileName: string;
}

const EditProfile = () => {
  const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const nicknameRef = useRef() as MutableRefObject<HTMLInputElement>;
  const sexRef = useRef() as MutableRefObject<HTMLInputElement>;
  const birthRef = useRef() as MutableRefObject<HTMLInputElement>;
  const introductionRef = useRef() as MutableRefObject<HTMLInputElement>;
  const imageRef = useRef() as MutableRefObject<HTMLInputElement>;

  const profileEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nicknameRef.current.value);
    formData.append("username", nameRef.current.value);
    formData.append("birth", birthRef.current.value);
    formData.append("sex", sexRef.current.value);
    formData.append("introduction", introductionRef.current.value);
    formData.append("image", imageRef.current.files[0]);

    const response = await http.put(
      `http://localhost:8080/user/update`,
      formData
    );
  };

  const response = async () => {
    const testdata = await http.get("/user/profile");
    const responseData = testdata.data;
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
  };

  return (
    <>
      <Container>
        <form>
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
                  name="nickname"
                  defaultValue={userData.nickname}
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
                      name="sex"
                      onChange={handlecheck}
                      value="male"
                      ref={sexRef}
                    />
                    남성
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sex"
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
                  type="text"
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

                <MediaElement
                  contentType="image/*"
                  uuidFileName={userData.uuidFileName}
                />
                <input type="file" multiple accept="image/*" ref={imageRef} />
              </Editdiv>
            </div>
          ))}

          <Buttondiv>
            <Button onClick={profileEdit}>확인</Button>
            <Button>취소</Button>
          </Buttondiv>
        </form>
      </Container>
    </>
  );
};

export default EditProfile;
