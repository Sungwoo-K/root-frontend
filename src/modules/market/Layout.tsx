import Main from "@/components/market/Main";
import { Container, Item } from "./styles";
import Header from "@/components/market/Header";
import Sidebar from "@/components/market/Sidebar";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <>
          <Item>
            <Main />
          </Item>
        </>
      </Container>
    </>
  );
};

export default Layout;
