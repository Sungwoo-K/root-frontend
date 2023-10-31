import styled from "@emotion/styled";
import { Container, BaseBtn } from "@/components/community/Header/styles";

export const PostSidebar = styled.aside`
  background-color: white;
  width: 100%;
  height: 59vh;
`;
export const BestFont = styled.div`
  font-family: "Gaegu", sans-serif;
  font-size: 2.5vw;
  text-decoration: none;
  color: inherit;
  padding: 0vw;
`;
export const BestItemContainer = styled(Container)`
  padding: 0vw;
`;
export const Bestfiles = styled.div`
  flex: 1;
  border: 2px solid gold;
  height: 300px;
  margin: 10px;
`;
export const BestItem = styled(Bestfiles)``;

export const Btnbtn = styled(BaseBtn)`
  color: red;
`;
