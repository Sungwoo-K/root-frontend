import { useEffect, useState } from "react";
import { Container, ReviewPage, ReviewTable, Reviewbutton } from "./styles";
import http from "@/utils/http";
import { Select } from "../../Edit/styles";
import ButtonEvent from "@/components/market/ButtonEvent";
import { IoIosClose } from "react-icons/io";
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

export const ReviewDetail = () => {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [select, setSelect] = useState(false);
  const [review, setReview] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const Inquirebutton = (index) => {
    select === true ? setSelect(false) : setSelect(true);
  };
  const [formData, setFormData] = useState({
    reviewContent: "",
    reviewCount: "",
    productId: "",
  });

  const handleProductSelect = (product) => {
    select === true ? setSelect(false) : setSelect(true);
    setSelectedProduct({
      productId: product.productId,
      brandName: product.brandName,
      productName: product.productName,
    });

    setFormData((prevState) => ({
      ...prevState,
      productId: product.productId || "",
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/no-review?key=${keyword}`
      );

      setProducts(response.data);
    };
    fetchData();
  }, [keyword]);
  const handleChange = (e) => {
    const inputvalue = e.target.value;
    setKeyword(inputvalue);
  };

  const reviewChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handlesearch = () => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/no-review?key=${keyword}`
      );
      setProducts(response.data);
    };
    fetchData();
  };
  const ToggleSidebar = () => {
    select === true ? setSelect(false) : setSelect(true);
  };

  const reviewPost = async () => {
    await http.put(
      `http://192.168.100.109:8080/review/user/${selectedProduct.productId}`,
      {
        reviewContent: formData.reviewContent,
        reviewCount: review,
        productId: selectedProduct.productId,
      }
    );
    alert("리뷰가 등록 되었습니다.");
    location.reload();
  };

  const handleSelect = (e) => {
    setReview(e.target.value);
  };
  return (
    <>
      <Container>
        <p>내가 사용하는 상품 리뷰쓰기</p>
        <div>
          <input
            type="text"
            placeholder="브랜드명 혹은 상품명 입력"
            value={keyword}
            onChange={handleChange}
          />
          {/* <button onClick={handlesearch}>검색</button> */}
        </div>
        {products.map((item) => (
          <ReviewTable key={item.id}>
            <img
              src={`http://192.168.100.159:8080/product/files/main-image/${item.productId}`}
              className="detailimg"
            />
            <ReviewPage href={`/products/${item.productId}`}>
              <span className="brandname">{item.brandName}</span>
              <span className="productname">{item.productName}</span>
              <span className="reviewcount">{item.reviewcount}</span>
              <span className="Orderday">구매 일자 | {item.createDate}</span>
            </ReviewPage>
            <Reviewbutton>
              <button onClick={() => handleProductSelect(item)}>
                리뷰 작성
              </button>
              <button style={{ marginTop: "5px" }}>
                <a
                  href={`/products/${item.productId}`}
                  style={{ textDecoration: "none", color: " #35c5f0" }}
                >
                  제품 상세
                </a>
              </button>
            </Reviewbutton>
            <div className={`review ${select === true ? "active" : ""}`}>
              <div className="closediv">
                <IoIosClose
                  style={{ height: "2rem", width: "2rem" }}
                  className="closebutton"
                  onClick={Inquirebutton}
                />
              </div>
              <div
                className="reviewname"
                onClick={() => handleProductSelect(item)}
              >
                {" "}
                리뷰 쓰기
              </div>
              <div className="content">
                {selectedProduct && (
                  <>
                    <img
                      src={`http://192.168.100.159:8080/product/files/main-image/${selectedProduct.productId}`}
                      className="detailimg"
                    />
                    <div>
                      <p style={{ fontSize: "x-large" }}>
                        {selectedProduct.brandName}
                      </p>
                      <p style={{ paddingTop: "10px", fontSize: "x-large" }}>
                        {selectedProduct.productName}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <div className="selectreview">
                <div className="warning_msg">
                  <p>별점을 선택해 주세요.</p>
                  <select name="" id="" onChange={handleSelect} value={review}>
                    <option value="1">★☆☆☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="4">★★★★☆</option>
                    <option value="5">★★★★★</option>
                  </select>
                </div>
              </div>
              <div className="reviewall">
                <div className="reviewcontent">
                  <p>리뷰 작성</p>
                </div>
                <div className="reviewtext">
                  <textarea
                    name="reviewContent"
                    maxLength={1000}
                    onChange={reviewChange}
                    value={formData.reviewContent}
                  ></textarea>
                </div>
              </div>
              <div className="review-ok">
                <button className="final" onClick={reviewPost}>
                  완료
                </button>
              </div>
            </div>
          </ReviewTable>
        ))}
        <div
          className={`review-overlay ${select == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </Container>
    </>
  );
};

export default ReviewDetail;
