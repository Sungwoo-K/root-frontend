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
  Menulist,
  Navlist,
} from "./styles";
import { BiMenu } from "react-icons/bi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";
import { HiEllipsisHorizontal, HiOutlineFolderPlus } from "react-icons/hi2";
import { Icon } from "../Sidebar/styles";
import { BsBell, BsPerson, BsGraphUp, BsBookmarkStar } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";
import { TiShoppingCart } from "react-icons/ti";
import { CiShop, CiDiscount1 } from "react-icons/ci";
import { AiOutlineComment } from "react-icons/ai";
import { LuArrowBigDown, LuArrowBigRight } from "react-icons/lu";
import { PiArrowSquareDownLight } from "react-icons/pi";
import { useHover } from "./data";

const main = () => {
  const [isMenu, setIsMenu] = useState(false);

  const [isList, setIsList] = useState(false);

  const { mutateIsHover } = useHover();

  const handleMouseEnter = () => {
    mutateIsHover(true);
  };

  const handleMouseLeave = () => {
    mutateIsHover(false);
  };

  const ToggleSidebar = () => {
    isMenu === true ? setIsMenu(false) : setIsMenu(true);
    console.log(isMenu);
  };

  const Togglelist = () => {
    isList === true ? setIsList(false) : setIsList(true);
    console.log(isList);
  };

  return (
    <Header onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Hedaerline>
        <nav>
          <Menubutton onClick={ToggleSidebar}>
            <BiMenu style={{ width: "45px", height: "45px" }} />
          </Menubutton>
        </nav>
        <div className={`sidebar ${isMenu === true ? "active" : ""}`}>
          <ToggleButton onClick={ToggleSidebar}>
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
              <Link to="/user/profile">
                <SideMenu>프로필</SideMenu>
              </Link>
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
                  <BsBookmarkStar style={{ width: "35px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>찜한 상품</SideMenu>
            </Button>

            <Button>
              <Iconbutton>
                <Icon>
                  <BsBell style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>알림</SideMenu>
            </Button>
            <hr />
            <Navlist>
              <Button onClick={Togglelist}>
                <Iconbutton>
                  <Icon>
                    <CiShop style={{ width: "30px", height: "30px" }} />
                  </Icon>
                </Iconbutton>
                <SideMenu>
                  전체 상품
                  <PiArrowSquareDownLight
                    style={{
                      width: "20px",
                      height: "29px",
                      alignItems: "flex-end",

                      marginTop: "1px",
                      marginLeft: "1px",
                    }}
                  />
                </SideMenu>
              </Button>
              <div className={`listbar ${isList === true ? "active" : ""}`}>
                <Menulist>
                  <li>
                    <Button>
                      <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                      텐트
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                      의자
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                      식기류
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                      악세사리
                    </Button>
                  </li>
                  <li>
                    <Button>
                      <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                      기타
                    </Button>
                  </li>
                </Menulist>
              </div>
            </Navlist>

            <Button>
              <Iconbutton>
                <Icon>
                  <BsGraphUp style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>인기 상품</SideMenu>
            </Button>
            <Button>
              <Iconbutton>
                <Icon>
                  <CiDiscount1 style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>할인 상품</SideMenu>
            </Button>
            <Button>
              <Iconbutton>
                <Icon>
                  <AiOutlineComment style={{ width: "30px", height: "30px" }} />
                </Icon>
              </Iconbutton>
              <SideMenu>커뮤니티</SideMenu>
            </Button>
            <hr />
          </Menudiv>
        </div>
        <div
          className={`sidebar-overlay ${isMenu == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>

        <Campdiv>
          <Link
            to="http://localhost:5000/"
            style={{ textDecoration: "none", color: "black", height: "30px" }}
          >
            <Title>CAMP&TENT</Title>
          </Link>
        </Campdiv>
        <Inputdiv>
          <form action="/products/items/search">
            <Input name="keyword" placeholder="검색" />
            <Searchbutton>
              <ImSearch />
            </Searchbutton>
          </form>
        </Inputdiv>
      </Hedaerline>
    </Header>
  );
};

export default main;
