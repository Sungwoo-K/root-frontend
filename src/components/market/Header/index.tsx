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

export const main = () => {
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
  };

  const Togglelist = () => {
    isList === true ? setIsList(false) : setIsList(true);
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
            <Link
              to="/user/profile"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton className="listbutton">
                  <Icon>
                    <BsPerson style={{ width: "35px", height: "30px" }} />
                  </Icon>
                </Iconbutton>

                <SideMenu>프로필</SideMenu>
              </Button>
            </Link>

            <Link
              to="/myfavorite/list/scrap"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton className="listbutton">
                  <Icon>
                    <TiShoppingCart style={{ width: "35px", height: "30px" }} />
                  </Icon>
                </Iconbutton>

                <SideMenu>장바구니</SideMenu>
              </Button>
            </Link>

            <Link
              to="/myfavorite/list/follow"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton className="listbutton">
                  <Icon>
                    <SlUserFollow style={{ width: "30px", height: "30px" }} />
                  </Icon>
                </Iconbutton>
                <SideMenu>구독</SideMenu>
              </Button>
            </Link>

            <Link to="" className="Linknav">
              <Button>
                <Iconbutton>
                  <Icon>
                    <BsBell style={{ width: "30px", height: "30px" }} />
                  </Icon>
                </Iconbutton>
                <SideMenu>알림</SideMenu>
              </Button>
            </Link>
            <hr />
            <Navlist>
              <Button onClick={Togglelist}>
                <Link
                  to="/user/profile"
                  className="Linknav"
                  onClick={ToggleSidebar}
                >
                  <Iconbutton>
                    <Icon>
                      <CiShop style={{ width: "30px", height: "30px" }} />
                    </Icon>
                  </Iconbutton>
                </Link>
                <SideMenu>상품</SideMenu>

                <PiArrowSquareDownLight
                  style={{
                    width: "20px",
                    height: "29px",
                    alignItems: "flex-end",

                    marginTop: "1px",
                    marginLeft: "1px",
                  }}
                />
              </Button>

              <div className={`listbar ${isList === true ? "active" : ""}`}>
                <Menulist>
                  <li>
                    <Link
                      to="/products?category=tent"
                      className="Linknav"
                      onClick={ToggleSidebar}
                    >
                      <Button>
                        <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                        텐트
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=table"
                      className="Linknav"
                      onClick={ToggleSidebar}
                    >
                      <Button>
                        <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                        의자
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=tableware"
                      className="Linknav"
                      onClick={ToggleSidebar}
                    >
                      <Button>
                        <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                        식기류
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=accessory"
                      className="Linknav"
                      onClick={ToggleSidebar}
                    >
                      <Button>
                        <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                        악세사리
                      </Button>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products?category=other"
                      className="Linknav"
                      onClick={ToggleSidebar}
                    >
                      <Button>
                        <MdKeyboardArrowRight style={{ marginRight: "15px" }} />
                        기타
                      </Button>
                    </Link>
                  </li>
                </Menulist>
              </div>
            </Navlist>
            <Link
              to="/products/hottest-items"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton>
                  <Icon>
                    <BsGraphUp style={{ width: "30px", height: "30px" }} />
                  </Icon>
                </Iconbutton>
                <SideMenu>인기 상품</SideMenu>
              </Button>
            </Link>
            <Link
              to="/products/discount-items"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton>
                  <Icon>
                    <CiDiscount1 style={{ width: "30px", height: "30px" }} />
                  </Icon>
                </Iconbutton>
                <SideMenu>할인 상품</SideMenu>
              </Button>
            </Link>
            <Link
              to="/user/profile"
              className="Linknav"
              onClick={ToggleSidebar}
            >
              <Button>
                <Iconbutton>
                  <Icon>
                    <AiOutlineComment
                      style={{ width: "30px", height: "30px" }}
                    />
                  </Icon>
                </Iconbutton>
                <SideMenu>커뮤니티</SideMenu>
              </Button>
            </Link>
            <hr />
          </Menudiv>
        </div>

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
      <div
        className={`sidebar-overlay ${isMenu == true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </Header>
  );
};

export default main;
