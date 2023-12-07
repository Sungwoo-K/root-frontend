import { Link } from "react-router-dom";
import videosrc from "@/modules/market/order/imgae-sample/pexels_videos_2675515 (540p).mp4";

import {
  Button,
  Container,
  ExceptionButton,
  Headername,
  Loginbutton,
  Logindiv,
  Logininput,
} from "./styles";
import { isLocalhost } from "@/components/market/host";
import { useEffect, useState } from "react";
import { isHome } from "@/components/market/isHome";
import getCookie from "@/utils/cookie";

const Login = () => {
  const [Data, setData] = useState({
    userLoginId: "",
    userPassword: "",
  });
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };
  const [loginCurrnet, setLoginCurrent] = useState("");
  const url = isLocalhost();
  const home = isHome();
  useEffect(() => {
    setLoginCurrent(url + "/auth/signin");
  }, [isLocalhost()]);

  return (
    <>
      <Container>
        <video src={videosrc} autoPlay muted loop />
        <div>
          <Link
            to={home}
            style={{ marginBottom: "20px", textDecoration: "none" }}
          >
            <Headername>캠프&텐트</Headername>
          </Link>
          <form action={loginCurrnet} method="POST">
            <Logindiv>
              <Logininput
                className="id"
                type="text"
                placeholder="아이디"
                name="userLoginId"
                value={Data.userLoginId}
                onChange={changeHandle}
              ></Logininput>
              <div style={{ border: "0.5px solid #dbdbdb" }}></div>
              <Logininput
                className="pw"
                type="password"
                placeholder="비밀번호"
                name="userPassword"
                value={Data.userPassword}
                onChange={changeHandle}
              ></Logininput>
            </Logindiv>

            <Button>로그인</Button>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            ></div>
          </form>

          <Loginbutton>
            <Link to="/join" className="Link">
              회원가입하기
            </Link>
            <Link to="http://192.168.100.152:5000/" className="Link">
              판매자 로그인
            </Link>
          </Loginbutton>
        </div>
      </Container>
    </>
  );
};

export default Login;
