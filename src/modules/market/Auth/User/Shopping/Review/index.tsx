import { useEffect, useState } from "react";
import { Container, ReviewPage, ReviewTable, Reviewbutton } from "./styles";
import http from "@/utils/http";
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
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/no-review?key=${keyword}`
      );

      setProducts(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [keyword]);
  const handleChange = (e) => {
    const inputvalue = e.target.value;
    setKeyword(inputvalue);
  };

  const handlesearch = () => {
    console.log(keyword);
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/no-review?key=${keyword}`
      );
      setProducts(response.data);
      console.log(response.data);
    };
    fetchData();
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
            <ReviewPage href={`/products/${item.productid}`}>
              <span className="brandname">{item.brandName}</span>
              <span className="productname">{item.productName}</span>
              <span className="reviewcount">{item.reviewcount}</span>
              <span className="Orderday">구매 일자 | {item.createDate}</span>
            </ReviewPage>
            <Reviewbutton>
              <button>리뷰 작성</button>
              <button style={{ marginTop: "5px" }}>제품 문의</button>
            </Reviewbutton>
          </ReviewTable>
        ))}
      </Container>
    </>
  );
};

export default ReviewDetail;
