import styled from "@emotion/styled";
import { Container, BaseBtn } from "@/components/community/Header/styles";

export const BestItemContainer = styled(Container)`
  padding: 0vw;
  display: flex;
  flex-direction: row-reverse;
  background-color: gray;
  justify-content: flex-end;
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
  justify-content: center;
`;

export const UseName = styled.input`
  width: 15vw;
  height: 2.5vw;
`;
export const Usephone = styled.input`
  width: 15vw;
  height: 2.5vw;
`;
export const Address = styled.input`
  width: 15vw;
  height: 2.5vw;
`;
export const DetailedAddress = styled.input`
  width: 15vw;
  height: 2.5vw;
`;
