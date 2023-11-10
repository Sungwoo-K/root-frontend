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

export const OrederBuy = () => {
  const priceRef = useRef() as MutableRefObject<HTMLInputElement>;

  const location = useLocation();
  const [count, setcount] = useState(location.state?.count);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [totalPrice, setTotalPrice] = useState<number>();

  const [formData, setFormdata] = useState({
    productId: id,
    quantity: count,
    address: "",
    brandName: String,
    productPrice: totalPrice,
    productName: String,
  });

  const fetch = async (e) => {
    e.preventDefault();
    const response = await http.post(
      `http://192.168.100.109:8080/order/${id}`,
      {
        productId: formData.productId,
        quantity: formData.quantity,
        address: formData.address,
        brandName: formData.brandName,
        productPrice: formData.productPrice,
        productName: formData.productName,
      }
    );
    console.log(response);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<ProductItem[]>(
        `http://192.168.100.159:8080/product/${id}`
      );

      setProducts([response.data]);

      setFormdata((prevState) => ({
        ...prevState,
        brandName: response.data.productBrand,
        productName: response.data.productName,
        productPrice: response.data.productPrice * count,
      }));
      setTotalPrice(response.data.productPrice * count);
    };
    fetch();
  }, [id]);

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
                  <p>결제수단</p>
                </div>
                <div className="bankbook">
                  <input type="radio" checked={isChecked} />
                  <p>무통장 입금</p>
                </div>
                <div className="selectbank">
                  <select name="" className="input"></select>
                  <input type="text" className="inputtext" />
                </div>
                <div>
                  <p>주문 후 n시간 동안 미입금시 자동 취소됩니다.</p>
                </div>
                <div className="paymentbutton">
                  <button onClick={fetch}>결제하기</button>
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
                  <input
                    type="text"
                    className="deliveryuser"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
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
            </UseContainer>
          </Form>
        ))}
      </BestItemContainer>
    </>
  );
};
export default OrederBuy;
