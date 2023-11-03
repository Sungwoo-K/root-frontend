import { Link, Outlet, useParams } from "react-router-dom";
import {
  Button,
  Categorydiv,
  Container,
  Icon,
  Keydiv,
  Linkdiv,
  Profilecontain,
  Profilediv,
} from "./styles";
import axios from "axios";
import { Suspense, startTransition, useEffect, useState } from "react";
import http from "@/utils/http";

import { BsBookmarkStar } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { AiOutlineSetting } from "react-icons/ai";
import ProfileHeader from "../../Header";
import Layout from "../../Layout";
import Follow from "../../follow/Scrap";

const UserProfile = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await http.get("http://localhost:8080/user/profile");
      const responseData = response.data;
      setUser(responseData);
    })();
  }, []);

  return (
    <>
      <Container>
        <Profilediv>
          <div className="profilediv">
            <img
              className="profileimg"
              src={require("@/components/market/Header/tent.png")}
            />
          </div>
          {user.map((userData, id) => (
            <Keydiv key={id}>
              <div className="namediv">
                <h1
                  style={{
                    fontSize: "150%",
                    width: "15vh",
                    textAlign: "center",
                  }}
                >
                  {userData.username}
                </h1>
              </div>
              <div className="middlediv">
                <p>
                  {userData.nickname} | {userData.birth}
                </p>
              </div>
              <div className="lastdiv">
                <p>{userData.introduction}</p>
              </div>

              <Linkdiv>
                <Icon>
                  <Link to="" className="Linkstyle">
                    <BsBookmarkStar
                      style={{
                        width: "30px",
                        height: "30px",
                        marginBottom: "1vh",
                      }}
                    ></BsBookmarkStar>
                    <p>스크랩</p>
                  </Link>
                </Icon>

                <Icon>
                  <Link to="" className="Linkstyle">
                    <SlLike
                      style={{
                        width: "30px",
                        height: "30px",
                        marginBottom: "1vh",
                      }}
                    ></SlLike>
                    <p>좋아요</p>
                  </Link>
                </Icon>

                <Icon>
                  <Link to="edits">
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
            </Keydiv>
          ))}
        </Profilediv>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default UserProfile;
