import { Container } from "@/components/community/Header/styles";
import {
  Pd,
  Zp,
  Pc,
  BestItem,
  BestItemContainer,
  UseContainer,
  UseName,
  Usephone,
} from "./styles";

const Zzzzz = () => {
  return (
    <BestItemContainer>
      <UseContainer>
        <p>주문/배송 정보</p>
        <br />
        <UseName type="text" placeholder="이름을입력해주세요." required />
        <Usephone type="text" placeholder="전화번호를입력해주세요." required />
        <br />
      </UseContainer>
      <Container>
        <BestItem>imge</BestItem>
        <Zp></Zp>
      </Container>
    </BestItemContainer>
  );
};

export default Zzzzz;
