import { Header } from "./styles";
import myImage from "./image/logo.png";

const header = () => {
  return (
    <>
      <Header>
        <img
          src={myImage}
          alt="logo img"
          style={{ paddingTop: "1vw", paddingLeft: "1vw" }}
        />
      </Header>
    </>
  );
};

export default header;
