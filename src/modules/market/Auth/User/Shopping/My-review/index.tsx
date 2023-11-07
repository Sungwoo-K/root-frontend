import { useEffect, useRef, useState } from "react";
import { Button, Container, Reviewbox, Title } from "./styles";
import http from "@/utils/http";
import { ReviceItem } from "../Review";

export const Myreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/in-review`
      );

      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Title>내가 작성한 리뷰</Title>
        {products.map((item) => (
          <Reviewbox key={item.id}>
            <div className="productname">
              {item.productname}
              <div className="productdetail">
                <a href={`/products/${item.id}`}>
                  <Button>제품 상세보기</Button>
                </a>
              </div>
            </div>

            <div className="reviewcount">
              <span>{item.reviewCount} </span>
              <div>{item.createDate}</div>
            </div>
            <div className="reviewcontent">
              <article>{item.reviewContent}</article>
            </div>
            <div style={{ marginTop: "20px", border: "1px solid #dbdbdb" }} />
          </Reviewbox>
        ))}
      </Container>
    </>
  );
};

export default Myreview;
