import { useState } from "react";
import {
  Campdiv,
  Header,
  Hedaerline,
  Iconbutton,
  Input,
  Inputdiv,
  Menubutton,
  Menudiv,
  Searchbutton,
  Title,
  Button,
  SideMenu,
  ToggleButton,
} from "./styles";
import { BiMenu } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { HiEllipsisHorizontal, HiOutlineFolderPlus } from "react-icons/hi2";
import { Icon } from "../Sidebar/styles";
import { BsBell, BsPerson } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";

const main = () => {
  const [isMenu, setIsMenu] = useState(false);

  const ToggleSidebar = () => {
    isMenu === true ? setIsMenu(false) : setIsMenu(true);
    console.log(isMenu);
  };

  return (
    <Header>
      <Hedaerline>
        <nav>
          <Menubutton onClick={ToggleSidebar}>
            <BiMenu style={{ width: "45px", height: "45px" }} />
          </Menubutton>
        </nav>
        <div className={`sidebar ${isMenu === true ? "active" : ""}`}>
          <ToggleButton>
            <BiMenu style={{ width: "45px", height: "45px" }} />
          </ToggleButton>
          <hr />

          <Menudiv>
            <Button>
              <Iconbutton className="listbutton">
                <Icon>
                  <BsPerson style={{ width: "35px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>프로필</SideMenu>
            </Button>

            <Button>
              <Iconbutton className="listbutton">
                <Icon>
                  <TiShoppingCart style={{ width: "35px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>장바구니</SideMenu>
            </Button>

            <Button>
              <Iconbutton className="listbutton">
                <Icon>
                  <SlUserFollow style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>구독</SideMenu>
            </Button>

            <Button>
              <Iconbutton className="listbutton">
                <Icon>
                  <HiOutlineFolderPlus
                    style={{ width: "35px", height: "30px" }}
                  />
                </Icon>
              </Iconbutton>
              <SideMenu>저장</SideMenu>
            </Button>

            <Button>
              <Iconbutton>
                <Icon>
                  <BsBell style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>알림</SideMenu>
            </Button>
          </Menudiv>
        </div>
        <div
          className={`sidebar-overlay ${isMenu == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
        <Campdiv>
          <img
            src={require("./tent.png")}
            style={{ height: "40px", marginTop: "2px" }}
          />
          <Link to="http://localhost:5000/market">
            <Title> CAMP&TENT</Title>
          </Link>
        </Campdiv>
        <Inputdiv>
          <Input placeholder="검색" />
          <Searchbutton>
            <ImSearch />
          </Searchbutton>
        </Inputdiv>
      </Hedaerline>
    </Header>
  );
};

export default main;
