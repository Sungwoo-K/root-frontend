import { useEffect, useState } from "react";
import {
  Address,
  BestItem,
  BestItemContainer,
  Button,
  DetailedAddress,
  Form,
  Payment,
  PurchasedContainer,
  UseContainer,
  UseName,
  Usephone,
} from "./styes";
import { useLocation, useParams } from "react-router-dom";
import { ProductItem } from "../../product/market/Products";
import http from "@/utils/http";

export const OrederBuy = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<ProductItem[]>(
        `http://192.168.100.159:8080/product/${id}`
      );

      console.log(response.data);
      setProducts([response.data]);
    };
    fetch();
  }, [id]);
  const location = useLocation();
  const [count, setcount] = useState(location.state?.count);
  console.log(count);

  return (
    <>
      <BestItemContainer>
        {products.map((product) => (
          <Form key={product.id}>
            <div>
              <PurchasedContainer>
                <div className="imge">
                  <p className="productId">주문 상품</p>
                  <BestItem>
                    <img
                      src={`http://192.168.100.159:8080/product/files/${product.mainImageUuidName}`}
                      alt=""
                    />
                  </BestItem>
                </div>
                <div className="payment">
                  <div className="productName">
                    <p className="name">{product.productName}</p>
                  </div>
                  <div className="productTotal">
                    <p className="totalcount">수량</p>
                    <p className="price">{count} 개</p>
                  </div>
                  <div className="finalTotal">
                    <div className="sideprice">
                      <div>
                        <p className="price">가격 </p>
                        <p>{product.productPrice.toLocaleString()} 원</p>
                      </div>
                      <div>
                        <p className="price">배송비</p>
                        <p>무료 배송</p>
                      </div>
                    </div>
                    <div className="totaldiv">
                      <p className="totalprice">총 금액</p>
                      <p>{product.productPrice.toLocaleString()} 원</p>
                    </div>
                  </div>
                </div>
              </PurchasedContainer>
              <Payment>
                <div>
                  <p>결제수단</p>
                </div>
                <div className="bankbook">
                  <input type="radio" checked />
                  <p>무통장 입금</p>
                </div>
                <div className="selectbank">
                  <select name="" className="input"></select>
                  <input type="text" className="inputtext" />{" "}
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
                  <UseName
                    type="text"
                    placeholder="이름을입력해주세요."
                    required
                  />
                </div>
                <div>
                  <Usephone
                    type="text"
                    placeholder="전화번호를입력해주세요."
                    required
                  />
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
                  <Address
                    type="text"
                    placeholder="주소를입력해주세요."
                    required
                  />
                  <DetailedAddress
                    type="text"
                    placeholder="상세주소를입력해주세요."
                    required
                  />
                </div>
              </div>
              <div className="orderbutton">
                <Button>구매하기</Button>
              </div>
            </UseContainer>
          </Form>
        ))}
      </BestItemContainer>
    </>
  );
};
export default OrederBuy;
