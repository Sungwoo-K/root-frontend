import styled from "@emotion/styled";

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
  margin: 1vw;
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
  @media (max-width: 768px) {
    margin: 5px;
    font-size: 14px;
    padding: 8px 16px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const BaseBtn = styled.button`
  border: none;
  cursor: pointer;
  color: white;
`;
export const Container = styled.div`
  background-color: gold;
  background-size: cover;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: 0 11vw;
  max-width: 80vw;
  padding: 1vw 0.1vw;

  @media (max-width: 768px) {
    margin: 0 5vw;
  }
`;
export const SigninButton = styled(SignBtn)``;
export const SignupButton = styled(SignBtn)``;
export const CartButton = styled(BaseBtn)`
  background-color: white;
`;
export const PostAddButton = styled(BaseBtn)`
  background-color: skyblue;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 20vh;
  width: 100%;
`;
export const HeaderAtag = styled.a`
  font-family: "Nanum Pen Script", cursive;
  font-size: 4.5vw;
  text-decoration: none;
  color: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 7vw;
  }
`;
export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
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
