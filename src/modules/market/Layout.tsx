import Main from "@/components/Main";
import { Container, Item } from "./styles";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Item>
          <Sidebar />
          <Main />
        </Item>
      </Container>
    </>
  );
};

export default Layout;
