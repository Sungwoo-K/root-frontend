import { Icon, Iconbutton, Sidebar } from "./styles";
import { BsPerson } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";
import { SlUserFollow } from "react-icons/sl";
import { HiOutlineFolderPlus } from "react-icons/hi2";

const main = () => {
  return (
    <>
      <Sidebar>
        <Iconbutton>
          <Icon>
            <BsPerson style={{ width: "35px", height: "60px" }} />
          </Icon>
        </Iconbutton>

        <Iconbutton>
          <Icon>
            <TiShoppingCart style={{ width: "35px", height: "60px" }} />
          </Icon>
        </Iconbutton>

        <Iconbutton>
          <Icon>
            <SlUserFollow style={{ width: "30px", height: "60px" }} />
          </Icon>
        </Iconbutton>

        <Iconbutton>
          <Icon>
            <HiOutlineFolderPlus style={{ width: "35px", height: "60px" }} />
          </Icon>
        </Iconbutton>
      </Sidebar>
    </>
  );
};

export default main;
