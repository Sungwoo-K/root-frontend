import { useEffect, useState } from "react";
import { FcNext, FcPrevious } from "react-icons/fc";
import {
  Buttondiv,
  Container,
  Inqeurycontent,
  Inquerybox,
  Title,
} from "./style";
import http from "@/utils/http";
import styled from "@emotion/styled";

export interface Inquerydata {
  id: number;
  userLoginId: string;
  username: string;
  productId: number;
  productName: string;
  inqueryCategory: string;
  inqueryContent: string;
  inqueryAnswer: string;
}

function displayInqueryAnswer(answer) {
  return answer !== null ? answer : "문의하신 답변을 찾을 수 없습니다.";
}

export const Inquery = () => {
  const [products, setProducts] = useState<Inquerydata[]>([]);
  const [mainImage, setMainImage] = useState([]);
  const [Disable, isDisable] = useState(false);
  const [page, setPage] = useState(0);
  const size = 3;

  const isPrevButtonDisable = page === 0;
  const isNextButtonDisable = products.length < 3;
  const pageNextButton = (e) => {
    setPage(page + 1);
  };
  const pagePrevButton = (e) => {
    setPage(page - 1);
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<Inquerydata[]>(
        `http://192.168.100.109:8080/inquery/user?size=${size}&page=${page}`
      );

      const responseData = response.data;
      setProducts(responseData.content);
    };
    fetch();
  }, [page]);

  return (
    <>
      <Container>
        {products.map((item) => (
          <Inquerybox key={item.id}>
            <div className="productname">
              {item.productName}
              <div>
                <a href={`/products/${item.productId}`}>
                  <button>제품 상세보기</button>
                </a>
              </div>
            </div>
            <Inqeurycontent>
              <img
                src={`http://192.168.100.159:8080/product/files/main-image/${item.productId}`}
                className="imagename"
              />

              <div className="inqueryqna">
                <div className="productquestion">
                  <span>Q &nbsp;&nbsp;</span>
                  <p style={{ width: "700px" }}>
                    {displayInqueryAnswer(item.inqueryContent)}
                  </p>
                </div>
                <div className="productanswer">
                  <span>A &nbsp;</span>
                  <p style={{ width: "700px" }}>{item.productName}</p>
                </div>
                <p className="answercontent">
                  {item.inqueryAnswer ||
                    "판매자의 답변이 등록되어있지 않습니다."}
                </p>
              </div>
            </Inqeurycontent>
          </Inquerybox>
        ))}
        <Buttondiv>
          <button onClick={pagePrevButton} disabled={isPrevButtonDisable}>
            <FcPrevious
              className="icon"
              style={{ fontSize: "xxx-large" }}
              onClick={pagePrevButton}
            />
          </button>
          <button onClick={pageNextButton} disabled={isNextButtonDisable}>
            <FcNext style={{ fontSize: "xxx-large" }} className="icon" />
          </button>
        </Buttondiv>
      </Container>
    </>
  );
};

export default Inquery;
