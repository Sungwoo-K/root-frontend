import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {
  HeaderAtag,
  PostHeader,
  Container,
  StyledSection,
  HeaderNav,
  FormField,
  SigninButton,
  SignupButton,
  CartButton,
  PostAddButton,
} from "./styles";

const main = () => {
  return (
    <Container>
      <PostHeader>
        <StyledSection>
          <HeaderNav>
            <HeaderAtag href="http://localhost:5000/community">
              캠프&텐트
            </HeaderAtag>
          </HeaderNav>
          <HeaderNav>
            <FormField type="text" placeholder="🔍Search" />
          </HeaderNav>
          <HeaderNav>
            <CartButton>
              <AiOutlineShoppingCart size={50} color="blue" />
            </CartButton>
          </HeaderNav>
          <HeaderNav>
            <SigninButton>
              <span>로그인</span>
            </SigninButton>
            <SignupButton>
              <span>회원가입</span>
            </SignupButton>
          </HeaderNav>
          <HeaderNav>
            <PostAddButton>
              <span>글쓰기</span>
            </PostAddButton>
          </HeaderNav>
        </StyledSection>
      </PostHeader>
    </Container>
  );
};

export default main;
