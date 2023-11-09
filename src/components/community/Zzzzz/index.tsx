import { Container } from "@/components/community/Header/styles";
import {
  Address,
  DetailedAddress,
  PurchasedContainer,
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
        <div className="usePofile">
          <div>
            <p>주문/배송 정보</p>
          </div>
          <div>
            <UseName type="text" placeholder="이름을입력해주세요." required />
          </div>
          <div>
            <Usephone
              type="text"
              placeholder="전화번호를입력해주세요."
              required
            />
          </div>
        </div>
        <div>
          <div>
            <p>배송지 정보</p>
          </div>
          <div>
            <Address type="text" placeholder="주소를입력해주세요." required />
            <DetailedAddress
              type="text"
              placeholder="상세주소를입력해주세요."
              required
            />
          </div>
        </div>
      </UseContainer>
      <PurchasedContainer>
        <div className="imge">
          <BestItem>imge</BestItem>
          <p>주문 상품 정보</p>
        </div>
        <div className="payment">
          <div>
            <div>구매물품이름</div>
          </div>
          <div>
            <div>합계</div>
          </div>
        </div>
      </PurchasedContainer>
    </BestItemContainer>
  );
};

export default Zzzzz;
