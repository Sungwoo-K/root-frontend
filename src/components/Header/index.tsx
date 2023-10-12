import {
  Button,
  Campdiv,
  Header,
  Hedaerline,
  Input,
  Inputdiv,
  Menubutton,
  Searchbutton,
  Title,
} from "./styles";
import { BiMenu } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { Link } from "react-router-dom";

const main = () => (
  <>
    <Header>
      <Hedaerline>
        <Button>
          <Menubutton>
            <BiMenu style={{ width: "45px", height: "45px" }} />
          </Menubutton>
        </Button>
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
  </>
);

export default main;
