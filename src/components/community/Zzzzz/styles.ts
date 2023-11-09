import styled from "@emotion/styled";
import { Container, BaseBtn } from "@/components/community/Header/styles";

export const BestItemContainer = styled(Container)`
  padding: 0vw;
  display: flex;
  flex-direction: row-reverse;
  background-color: white;
  justify-content: flex-end;
  gap: 2vw;
`;

export const BestItem = styled.div`
  flex: 1;
  border: 2px solid gold;

  margin: 10px;
  width: 11vw;
  height: 20vw;
`;

export const Btnbtn = styled(BaseBtn)`
  color: red;
`;

export const Pd = styled.textarea`
  display: flex;
  align-items: flex-start;
`;
export const UseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2vw;
  > div > div > p {
    font-family: "Do Hyeon", sans-serif;
    margin-bottom: 2vw;
    font-size: 2vw;
  }
`;

export const UseName = styled.input`
  width: 15vw;
  height: 2.5vw;
  margin-bottom: 1vw;
  border-radius: 10px;
`;
export const Usephone = styled.input`
  width: 15vw;
  height: 2.5vw;
  border-radius: 10px;
`;

export const Address = styled.input`
  margin-bottom: 1vw;
  width: 15vw;
  height: 2.5vw;
  border-radius: 10px;
`;
export const DetailedAddress = styled.input`
  width: 15vw;
  height: 2.5vw;
  border-radius: 10px;
`;
export const PurchasedContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  .imge {
    display: flex;
    flex-direction: row;
  }
  .payment {
    display: flex;
  }
`;
