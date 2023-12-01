import {
  MarketAtag,
  CommunityAtag,
  Container,
  FormField,
  SigninButton,
  SignupButton,
  CartButton,
  PostAddButton,
  StyledLink,
  HeaderLink,
} from "./styles";

const main = () => {
  return (
    <Container>
      <HeaderLink to="http://localhost:5000/community">캠프&텐트</HeaderLink>
      <CommunityAtag to="http://localhost:5000/community">
        커뮤니티
      </CommunityAtag>
      <MarketAtag
        to="http://localhost:5000/market"
        style={{ marginTop: "0.5vw" }}
      >
        쇼핑
      </MarketAtag>
      <FormField type="text" placeholder="🔍Search" />
      <CartButton>
        <img
          src="https://i.ibb.co/J5MvZyN/free-icon-shopping-cart-9284428.png"
          alt="쇼핑카트"
        />
      </CartButton>
      <SigninButton>
        <span>로그인</span>
      </SigninButton>
      <SignupButton>
        <span>회원가입</span>
      </SignupButton>
      <PostAddButton>
        <StyledLink to="/community/Write">
          <img
            src="https://i.ibb.co/FX0hnQk/free-icon-bonfire-4018851.png"
            alt="글쓰기아이콘"
          />
          <span>글쓰기</span>
        </StyledLink>
      </PostAddButton>
    </Container>
  );
};

export default main;
