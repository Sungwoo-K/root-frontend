import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link } from "react-router-dom";

export const StyledSection = styled.section`
  margin: 0vw;
  display: flex;
  justify-content: space-between;
`;
export const HeaderNav = styled.nav`
  background-size: cover;
  display: flex;
  flex-direction: row;
  margin: 2.5vw;
  @media (max-width: 768px) {
    margin: 5px;
  }
`;
export const SignBtn = styled.button`
  margin: 0;
  background: #8eecd1;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 35px;
  padding: 1vw 1vw;
  font-size: 10px;
  cursor: pointer;
  outline: none;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(3, 2, 5, 0.4);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    right: -2px;
    bottom: -2px;
    left: -2px;
    z-index: -1;
    background: linear-gradient(90deg, #ffc312, #ee5a24, #00a8ff);
    border-radius: 28px;
  }

  &:hover {
    background: linear-gradient(90deg, #ffc312, #ee5a24, #00a8ff);
  }

  &:active {
    transform: translateY(1px);
  }
`;
export const BaseBtn = styled.button`
  border: none;
  cursor: pointer;
  color: white;
`;
export const Container = styled.div`
  overflow: visible;
  background-color: white;
  background-size: cover;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 1vw 11vw;
  max-width: 80vw;
  padding: 1vw 0.1vw;
`;
export const SigninButton = styled(SignBtn)``;
export const SignupButton = styled(SignBtn)``;
const slideFromLeft = keyframes`
0% {
  transform: translateX(-100%);
}
100% {
  transform: translateX(0);
}
`;
export const CartButton = styled(BaseBtn)`
  background-color: white;
  animation: ${slideFromLeft} 4s forwards;
  img {
    width: 2.5vw;
    height: 100%;
  }
`;
export const PostAddButton = styled(BaseBtn)`
  padding: 0.2vw 1vw;
  background-color: skyblue;
  font-size: 1.6vw;
  border-radius: 35px;
  text-decoration: none;
  color: white;
  span {
    color: white;
  }
`;
export const StyledLink = styled(Link)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: none;
  font-family: "Nanum Pen Script", cursive;
`;

export const HeaderLink = styled(Link)`
  margin: 0;
  font-family: "Nanum Pen Script", cursive;
  font-size: 3.5vw;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background: linear-gradient(90deg, #ffc312, #ee5a24, #00a8ff);
    -webkit-background-clip: text;
    color: transparent;
  }
`;

export const MarketAtag = styled(HeaderLink)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.3vw;
  background-image: none;
`;
export const CommunityAtag = styled(MarketAtag)`
  font-family: "Noto Sans KR", sans-serif;
  background-image: none;
`;
export const FormField = styled.input`
  font-family: inherit;
  width: 20vw;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  margin-top: 10px;

  &::placeholder {
    color: #9b9b9b;
  }

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 5px 0;
    margin-top: 8px;
  }
`;
