import { Container } from "@/components/community/Header/styles";
import {
  Address,
  DetailedAddress,
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
        <hr />
        <Usephone type="text" placeholder="전화번호를입력해주세요." required />
        <br />
        <p>배송지 정보</p>
        <br />
        <Address type="text" placeholder="주소를입력해주세요." required />
        <hr />
        <DetailedAddress
          type="text"
          placeholder="상세주소를입력해주세요."
          required
        />
      </UseContainer>
      <Container>
        <BestItem>imge</BestItem>
        <Zp></Zp>
      </Container>
    </BestItemContainer>
  );
};

export default Zzzzz;
