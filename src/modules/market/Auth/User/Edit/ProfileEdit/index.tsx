import { useEffect, useState } from "react";
import {
  Container,
  Editinput,
  Editdiv,
  Select,
  P,
  Button,
  Buttondiv,
  Editp,
  Edit,
} from "./styles";
import http from "@/utils/http";

const EditProfile = () => {
  useEffect(() => {
    (async () => {
      const response = await http.get("/user/profile");
      const responseData = response.data;
      setFormData({
        ...formData,
        userName: responseData.username,
      });
    })();
  }, []);

  const [user, setUser] = useState([]);

  const [formData, setFormData] = useState({
    userName: "",
    userId: "",
    userPassword: "",
    nickName: "",
    userSex: "",
    userBirth: "",
    image: "",
    introduction: "",
  });
  console.log();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Edit>
        <Container>
          <div style={{ width: "500px" }}>
            <P>회원정보수정</P>
          </div>
          <Editdiv>
            <Editp>이름</Editp>
            <Editinput
              type="text"
              defaultValue={formData.userName}
              onChange={handleInputChange}
            />
          </Editdiv>
          <Editdiv>
            <Editp>닉네임</Editp>
            <Editinput type="text" name="" id="" />
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
                  onChange={handleInputChange}
                  value={formData.userSex}
                  checked
                />
                남성
              </label>
              <label>
                <input
                  type="radio"
                  name="female"
                  onChange={handleInputChange}
                  value={formData.userSex}
                  checked
                />
                여성
              </label>
            </div>
          </Editdiv>
          <Editdiv>
            <Editp>생년월일</Editp>
            <Editinput type="date" name="" id="" />
          </Editdiv>
          <Editdiv>
            <Editp>한줄소개</Editp>
            <Editinput type="text" name="" id="" />
          </Editdiv>
          <Buttondiv>
            <Button>확인</Button>
            <Button>취소</Button>
          </Buttondiv>
        </Container>
      </Edit>
    </>
  );
};

export default EditProfile;
