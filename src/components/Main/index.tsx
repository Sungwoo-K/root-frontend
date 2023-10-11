import { Container, Header, Item, Main, Sidebar } from "./styles";

const main = () => {
  return (
    <>
      <Container>
        <Header>머리</Header>
        <Item>
          <Sidebar>사이드바</Sidebar>
          <Main>메인</Main>
        </Item>
      </Container>
    </>
  );
};

export default main;
