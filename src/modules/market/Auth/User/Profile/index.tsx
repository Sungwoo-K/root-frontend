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
import { TiShoppingCart } from "react-icons/ti";
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
        {user.map((userData, id) => (
          <Profilediv>
            <div className="profilediv">
              <img
                className="profileimg"
                src={`http://192.168.100.109:8080/user/files/${userData.uuidFileName}`}
              />
            </div>
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
                <p style={{ padding: "20px" }}>
                  {userData.nickname} &nbsp; {userData.birth}
                </p>
              </div>
              <div className="lastdiv">
                <p>{userData.introduction}</p>
              </div>

              <Linkdiv>
                <Icon>
                  <Link to="/myfavorite/list/scrap" className="Linkstyle">
                    <TiShoppingCart
                      style={{
                        width: "30px",
                        height: "30px",
                        marginBottom: "1vh",
                      }}
                    ></TiShoppingCart>
                    <p className="iconname">장바구니</p>
                  </Link>
                </Icon>

                <Icon>
                  <Link to="/myfavorite/list/follow" className="Linkstyle">
                    <SlLike
                      style={{
                        width: "30px",
                        height: "30px",
                        marginBottom: "1vh",
                      }}
                    ></SlLike>
                    <p className="iconname">구독</p>
                  </Link>
                </Icon>

                <Icon>
                  <Link to="edits" className="Linkstyle">
                    <AiOutlineSetting
                      style={{
                        width: "30px",
                        height: "30px",

                        marginBottom: "1vh",
                      }}
                    ></AiOutlineSetting>
                    <p className="iconname">설정</p>
                  </Link>
                </Icon>
              </Linkdiv>
            </Keydiv>
          </Profilediv>
        ))}
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default UserProfile;
