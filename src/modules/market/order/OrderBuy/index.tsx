import { useState } from 'react';
import {
    Address,
    BestItem,
    BestItemContainer,
    DetailedAddress,
    Form,
    Payment,
    PurchasedContainer,
    UseContainer,
    UseName,
    Usephone,
} from './styes';

export const OrederBuy = () => {
    const [products, setProducts] = useState([]);
    return (
        <>
            <BestItemContainer>
                <Form>
                    <div>
                        <PurchasedContainer>
                            <div className="imge">
                                <p className="productId">주문 상품 정보</p>
                                <BestItem>imge</BestItem>
                            </div>
                            <div className="payment">
                                <div className="productName">
                                    <p className="name">구매물품이름</p>
                                </div>
                                <div className="productTotal">
                                    <p className="totalcount">총 수량</p>
                                    <p className="price">합계</p>
                                </div>
                                <div className="finalTotal">
                                    <div className="sideprice">
                                        <div>
                                            <p className="price">가격 </p>
                                            <p>15,000원</p>
                                        </div>
                                        <div>
                                            <p className="price">배송비</p>
                                            <p>15,000원</p>
                                        </div>
                                    </div>
                                    <div className="totaldiv">
                                        <p className="totalprice">총 금액</p>
                                        <p>50,000원</p>
                                    </div>
                                </div>
                            </div>
                        </PurchasedContainer>
                        <Payment>
                            <div>
                                <p>결제수단</p>
                            </div>
                            <div className="bankbook">
                                <input type="radio" />
                                <p>무통장 입금</p>
                            </div>
                            <div className="selectbank">
                                <select name="" className="input"></select>
                                <input type="text" className="inputtext" />{' '}
                            </div>
                            <div>
                                <p>주문 후 n시간 동안 미입금시 자동 취소됩니다.</p>
                            </div>
                            <div className="paymentbutton">
                                <button>결제하기</button>
                            </div>
                        </Payment>
                    </div>
                    <UseContainer>
                        <div className="useProfile">
                            <div>
                                <p>주문자</p>
                            </div>
                            <div>
                                <UseName type="text" placeholder="이름을입력해주세요." required />
                            </div>
                            <div>
                                <Usephone type="text" placeholder="전화번호를입력해주세요." required />
                            </div>
                        </div>
                        <div className="delivery">
                            <div>
                                <p>배송지 정보</p>
                            </div>
                            <div className="deliveryprofile">
                                <input type="text" className="deliveryuser" />
                                <input type="text" className="deliveryuser" />
                            </div>
                            <div>
                                <Address type="text" placeholder="주소를입력해주세요." required />
                                <DetailedAddress type="text" placeholder="상세주소를입력해주세요." required />
                            </div>
                        </div>
                    </UseContainer>
                </Form>
            </BestItemContainer>
        </>
    );
};
export default OrederBuy;
