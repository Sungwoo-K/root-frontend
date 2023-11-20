import { MutableRefObject, useEffect, useRef, useState } from "react";
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
import { ProductItem } from "../../product/market/data";
import http from "@/utils/http";
import { BrandName } from "../../auth/User/Shopping/Order/styles";
import { RequestPayParams, RequestPayResponse } from "../data";

export const OrederBuy = () => {
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const location = useLocation();
  const [count, setcount] = useState(location.state?.count);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [totalPrice, setTotalPrice] = useState<number>();
  const [merchant, setMerchant] = useState<String>();

  const [formData, setFormdata] = useState({
    productId: id,
    quantity: count,
    address: "",
    detailaddress: "",
    username: "",
    phonenumber: "",
    brandName: "",
    productPrice: totalPrice,
    productName: "",
    imp_uid: merchant,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<ProductItem>(
        `http://192.168.100.159:8080/product/${id}`
      );

      setProducts([response.data]);

      setFormdata({
        productId: id,
        quantity: count,
        address: "",
        detailaddress: "",
        username: "",
        phonenumber: "",
        brandName: response.data.productBrand,
        productPrice: response.data.productPrice * count,
        productName: response.data.productName,
        imp_uid: merchant,
      });
      setTotalPrice(response.data.productPrice * count);
    };
    fetch();
  }, [id]);

  const onClickPayment = () => {
    if (!window.IMP) return;

    const { IMP } = window;
    IMP.init("imp44351413");

    const data: RequestPayParams = {
      pg: "kakaopay",
      pay_method: "card",
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: totalPrice,
      name: formData.productId,
      buyer_name: formData.username,
      buyer_tel: formData.phonenumber,
      buyer_addr: formData.address,
      buyer_postcode: formData.detailaddress,
    };

    IMP.request_pay(data, callback);
  };

  const callback = async (response: RequestPayResponse) => {
    const { success, error_msg, merchant_uid } = response;
    const { imp_uid } = response;
    if (success) {
      const response = await http.post(
        `http://192.168.100.109:8080/order/${id}`,
        {
          productId: formData.productId,
          quantity: formData.quantity,
          address: formData.address,
          detailaddress: formData.detailaddress,
          username: formData.username,
          imp_uid: imp_uid,
          phonenumber: formData.phonenumber,
          brandName: formData.brandName,
          productPrice: formData.productPrice,
          productName: formData.productName,
        }
      );
      alert("결제가 완료되셨습니다.");
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

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
                        <p ref={priceRef}>{totalPrice.toLocaleString()} 원</p>
                      </div>
                      <div>
                        <p className="price">배송비</p>
                        <p>무료 배송</p>
                      </div>
                    </div>
                    <div className="totaldiv">
                      <p className="totalprice">총 금액</p>
                      <p>
                        {(product.productPrice * count).toLocaleString()} 원
                      </p>
                    </div>
                  </div>
                </div>
              </PurchasedContainer>
              <Payment>
                <div>
                  <p style={{ fontFamily: "SBAggroB", fontSize: "large" }}>
                    결제수단
                  </p>
                </div>

                <div>
                  <p>모든 정보를 기입하신 후 결제하기 버튼을 클릭해주세요.</p>
                </div>
                <div className="paymentbutton">
                  <Button onClick={onClickPayment}>결제하기</Button>
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
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Usephone
                    type="text"
                    placeholder="전화번호를입력해주세요."
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="delivery">
                <div>
                  <p>배송지 정보</p>
                </div>

                <div>
                  <Address
                    type="text"
                    placeholder="주소를입력해주세요."
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <DetailedAddress
                    type="text"
                    placeholder="상세주소를입력해주세요."
                    required
                    name="detailaddress"
                    value={formData.detailaddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </UseContainer>
          </Form>
        ))}
      </BestItemContainer>
    </>
  );
};
export default OrederBuy;
