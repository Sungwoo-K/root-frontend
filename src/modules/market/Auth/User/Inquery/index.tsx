import { useEffect, useState } from "react";
import { Container, Inquerybox, Title } from "./style";
import http from "@/utils/http";

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
  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<Inquerydata[]>(
        `http://192.168.100.109:8080/inquery/user`
      );
      //   const image = await http.get(
      //     `http://192.168.100.159:8080/proudct/`
      //   )
      console.log(response.data);
      setProducts(response.data);
    };
    fetch();
  }, []);
  return (
    <>
      <Container>
        <Title>문의 내역</Title>
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

            <img
              src={`http://192.168.100.159:8080/product/${item.productId}`}
              className="imagename"
            />
            <div className="productquestion">
              <span>Q &nbsp;</span>
              <p>{displayInqueryAnswer(item.inqueryContent)}</p>
            </div>
            <div className="productanswer">
              <span>A &nbsp;</span>
              <p>{item.inqueryAnswer}</p>
            </div>
            <p className="answercontent">{item.inqueryAnswer}</p>
          </Inquerybox>
        ))}
      </Container>
    </>
  );
};

export default Inquery;
