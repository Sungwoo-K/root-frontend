import { Link, useParams } from "react-router-dom";
import {
  Button,
  Categorydiv,
  Container,
  Icon,
  Linkdiv,
  Profile,
  Profilecontain,
  Profilediv,
} from "./styles";
import axios from "axios";
import { useEffect, useState } from "react";
import http from "@/utils/http";
import getCookie from "@/utils/cookie";
import { BsBookmarkStar } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
import ProfileHeader from "../../Header";

const UserProfile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get("/user/profile");
      const responseData = response.data;
      setUser(responseData);
    })();
  }, []);

  return (
    <>
      <Container>
        <Profilediv>
          <img
            src={require("../../../../../../components/market/Header/tent.png")}
            style={{
              width: "118px",
              height: "118px",
              marginLeft: "10vh",
              marginTop: "5vh",
            }}
          />

          {user.map((userData, id) => (
            <>
              <Profile key={id}>
                <h1
                  style={{
                    fontSize: "150%",
                    width: "15vh",
                    height: "5vh",
                    marginTop: "10px",
                    marginLeft: "10.4vh",
                  }}
                >
                  {userData.username}
                </h1>

                <p style={{ marginLeft: "8vh", width: "200px" }}>
                  {userData.nickname} | {userData.birth}
                </p>
              </Profile>
              <Linkdiv style={{ marginLeft: "2.5vh", marginTop: "10vh" }}>
                <Link to="">
                  <Icon>
                    <BsBookmarkStar
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "12px",
                        marginBottom: "1vh",
                      }}
                    ></BsBookmarkStar>
                    <p>스크랩</p>
                  </Icon>
                </Link>
                <Icon>
                  <Link to="">
                    <SlLike
                      style={{
                        width: "30px",
                        height: "30px",
                        marginLeft: "12px",
                        marginBottom: "1vh",
                      }}
                    ></SlLike>
                    <p>좋아요</p>
                  </Link>
                </Icon>
                <Icon>
                  <Link to="/user/edits">
                    <AiOutlineSetting
                      style={{
                        width: "30px",
                        height: "30px",

                        marginBottom: "1vh",
                      }}
                    ></AiOutlineSetting>
                    <p>설정</p>
                  </Link>
                </Icon>
              </Linkdiv>
            </>
          ))}
        </Profilediv>
      </Container>
    </>
  );
};

export default UserProfile;
