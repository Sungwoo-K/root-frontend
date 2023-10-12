import { Button, Icon, Iconbutton, SideMenu, Sidebar } from "./styles";
import { BsPerson, BsBell } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { SlUserFollow } from "react-icons/sl";
import { HiOutlineFolderPlus } from "react-icons/hi2";

const main = () => {
  return (
    <>
      <Sidebar>
        <Button>
          <Iconbutton>
            <Icon>
              <BsPerson style={{ width: "35px", height: "60px" }} />
            </Icon>
          </Iconbutton>
          <SideMenu>프로필</SideMenu>
        </Button>

        <Button>
          <Iconbutton>
            <Icon>
              <TiShoppingCart style={{ width: "35px", height: "60px" }} />
            </Icon>
          </Iconbutton>
          <SideMenu>장바구니</SideMenu>
        </Button>

        <Button>
          <Iconbutton>
            <Icon>
              <SlUserFollow style={{ width: "30px", height: "60px" }} />
            </Icon>
          </Iconbutton>
          <SideMenu>구독</SideMenu>
        </Button>

        <Button>
          <Iconbutton>
            <Icon>
              <HiOutlineFolderPlus style={{ width: "35px", height: "60px" }} />
            </Icon>
          </Iconbutton>
          <SideMenu>저장</SideMenu>
        </Button>

        <Button>
          <Iconbutton>
            <Icon>
              <BsBell style={{ width: "35px", height: "60px" }} />
            </Icon>
          </Iconbutton>
          <SideMenu>알림</SideMenu>
        </Button>
      </Sidebar>
    </>
  );
};

export default main;
