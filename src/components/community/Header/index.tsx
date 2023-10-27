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

const Header = () => {
  return (
    <Container>
      <HeaderAtag href="http://localhost:5000/community">캠프&텐트</HeaderAtag>
      <CommunityAtag href="http://localhost:5000/community">
        커뮤니티
      </CommunityAtag>
      <MarketAtag href="http://localhost:5000/market">쇼핑</MarketAtag>
      <FormField type="text" placeholder="🔍Search" />
      <CartButton>
        <AiOutlineShoppingCart size={30} color="black" />
      </CartButton>
      <SigninButton>
        <span>로그인</span>
      </SigninButton>
      <SignupButton>
        <span>회원가입</span>
      </SignupButton>
      <PostAddButton>
        <StyledLink to="/community/Write">
          <span>글쓰기</span>
        </StyledLink>
      </PostAddButton>
    </Container>
  );
};

export default Header;
