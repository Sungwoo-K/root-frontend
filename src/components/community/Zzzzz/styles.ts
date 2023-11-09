import styled from "@emotion/styled";
import { Container, BaseBtn } from "@/components/community/Header/styles";

export const BestItemContainer = styled(Container)`
  padding: 0vw;
  display: flex;
  flex-direction: row-reverse;
  background-color: gray;
`;

export const BestItem = styled.div`
  flex: 1;
  border: 2px solid gold;

  margin: 10px;
  width: 300px;
  height: 300px;
`;

export const Btnbtn = styled(BaseBtn)`
  color: red;
`;
export const Zp = styled.input``;
export const Pc = styled.div`
  display: flex;
  text-align: left;
`;
export const Pd = styled.textarea`
  display: flex;
  align-items: flex-start;
`;
export const UseContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UseName = styled.input``;
export const Usephone = styled.input``;
