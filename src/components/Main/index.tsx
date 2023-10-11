// import { Sidebar } from "../Sidebar/styles";
import { Container, Header, Main, Sidebar } from "./styles";

const main = () => {
  return (
    <>
      <Header>머리</Header>
      <hr />
      <Container>
        <Sidebar>사이드바</Sidebar>
        <hr />
        <Main>메인</Main>
      </Container>
    </>
  );
};

export default main;
