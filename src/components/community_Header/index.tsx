import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import {
  HeaderAtag,
  MarketAtag,
  CommunityAtag,
  Container,
  StyledSection,
  HeaderNav,
  FormField,
  SigninButton,
  SignupButton,
  CartButton,
  PostAddButton,
  StyledLink,
} from "./styles";

const main = () => {
  return (
    <Container>
      <HeaderAtag href="http://localhost:5000/community">캠프&텐트</HeaderAtag>
      <CommunityAtag href="http://localhost:5000/community">
        커뮤니티
      </CommunityAtag>
      <MarketAtag href="http://localhost:5000/market">쇼핑</MarketAtag>
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
