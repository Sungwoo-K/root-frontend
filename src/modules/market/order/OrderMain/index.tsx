import { BsBookmarkStar } from "react-icons/bs";

import { Link, useLocation, useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  Addinformation,
  Button,
  Container,
  Contentdiv,
  EventButton,
  Iconbutton,
  Imgbox,
  Information,
  Mainimg,
  Price,
  Selectbox,
} from "./styles";
import { useEffect, useState } from "react";
import ButtonEvent from "@/components/market/ButtonEvent";
import Inquery from "../../auth/User/Inquery";
import Inquiryorder from "../Orderinquiry";
import Revieworder from "../OrderReview";
import Inqueryorderqna from "../Orderinquiryqna";
import { ImStarFull } from "react-icons/im";
import http from "@/utils/http";
import { ReviewCount } from "../../auth/User/Shopping/Review/styles";

export interface ReviceItem {
  id: number;
  productId: number;
  nickname: string;
  brandName: string;
  reviewcontent: string;
  reviewCount: number;
  reviewResponse: string;
  createDate: string;
  productPrice: number;
  productName: string;
  mainImageUuidName: string;
}

function convertToStars(score) {
  switch (score) {
    case 1:
      return "★☆☆☆☆";
    case 2:
      return "★★☆☆☆";
    case 3:
      return "★★★☆☆";
    case 4:
      return "★★★★☆";
    case 5:
      return "★★★★★";
    default:
      return "☆☆☆☆☆";
  }
}

const OrderMain = () => {
  const { id } = useParams();

  const [plusnum, setPlusnum] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState("상품정보");
  const [review, setReview] = useState(0);

  const handleTabClick = (e) => {
    setSelectedTab(e);
  };

  const handleChange = (e) => {
    setPlusnum(e.target.value);
  };

  const handlechange = () => {
    setPlusnum(plusnum + 1);
  };

  const handleDown = () => {
    setPlusnum(plusnum - 1);
  };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetch = await http.get(`http://192.168.100.159:8080/product/${id}`);
      const response = await http.get(
        `http://192.168.100.109:8080/review/review-total/${id}`
      );
      const productsArray = [fetch.data];
      console.log(productsArray);
      setProducts(productsArray);
      console.log(response.data);
      setReview(response.data);
    };

    fetchData();
  }, [id]);
  const starRating = convertToStars(review.reviewTotal);
  return (
    <>
      <Container>
        {products.map((product) => (
          <Contentdiv key={product.id}>
            <div className="imgtotal">
              <Imgbox>
                <Mainimg
                  src={`http://192.168.100.159:8080/product/files/${product.mainImageUuidName}`}
                />
                <div className="sidediv">
                  <img src={product.img} alt="" className="sideimg" />
                  <img src={product.img} alt="" className="sideimg" />
                </div>
              </Imgbox>
            </div>
            <Information>
              <h1>{product.productBrand}</h1>
              <div className="headerdiv">
                <h1 className="title">{product.productName}</h1>
                <div className="star">{starRating}</div>
              </div>
              <div className="option">
                <Selectbox id="select-box">
                  <option selected value="12">
                    옵션 선택
                  </option>
                  <option value="1">옵션1</option>
                  <option value="2">옵션2</option>
                  <option value="3">옵션3</option>
                </Selectbox>
              </div>
              <div className="productorder">
                <div className="buttondiv">
                  <input type="text" value={plusnum} onChange={handleChange} />

                  <EventButton>
                    <button className="countbutton" onClick={handlechange}>
                      <AiOutlinePlus
                        style={{ width: "100%", height: "100%" }}
                      />
                    </button>

                    <button className="countbutton" onClick={handleDown}>
                      <AiOutlineMinus
                        style={{ width: "100%", height: "100%" }}
                      />
                    </button>
                  </EventButton>
                </div>

                <div className="clickmenu">
                  <Button
                    style={{ backgroundColor: "white", color: "#0f5ca8" }}
                  >
                    장바구니
                  </Button>
                  <Button>바로구매</Button>

                  <BsBookmarkStar
                    style={{
                      width: "3vh",
                      height: "3vh",
                    }}
                  />
                </div>
              </div>

              <Price>{product.productPrice.toLocaleString()} 원</Price>
            </Information>
          </Contentdiv>
        ))}

        <Addinformation>
          <div className="productoption">
            <nav className="navigation">
              <ol className="proudct-list">
                <li
                  className={`product ${
                    selectedTab === "상품정보" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("상품정보")}
                >
                  상품정보
                </li>
                <li
                  className={`product ${
                    selectedTab === "상품리뷰" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("상품리뷰")}
                >
                  상품리뷰
                </li>
                <li
                  className={`product ${
                    selectedTab === "상품문의" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("상품문의")}
                >
                  상품문의
                </li>
              </ol>
            </nav>
            {selectedTab === "상품정보" && <div className="product-info"></div>}

            {selectedTab === "상품리뷰" && (
              <div className="product-review">
                <Revieworder />
              </div>
            )}

            {selectedTab === "상품문의" && (
              <div className="product-inquiry">
                <Inquiryorder />
              </div>
            )}
          </div>
        </Addinformation>
      </Container>
    </>
  );
};

export default OrderMain;
