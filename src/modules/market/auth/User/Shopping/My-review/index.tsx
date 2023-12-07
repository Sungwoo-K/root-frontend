import { useEffect, useRef, useState } from "react";
import { Button, Container, Reviewbox, Title } from "./styles";
import http from "@/utils/http";
import { ReviceItem } from "../Review";
import { isLocalhost } from "@/components/market/host";

export const Myreview = () => {
  const url = isLocalhost();
  const [products, setProducts] = useState([]);
  const [prdouctid, setProductid] = useState([]);
  const [review, setRevicew] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(`${url}/review/in-review`);
      setProducts(response.data);
    };
    fetchData();
  }, []);
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
  return (
    <>
      <Container>
        {products.map((item) => (
          <Reviewbox key={item.id}>
            <div className="productname">
              {item.productName}
              <div className="productdetail">
                <a href={`/products/${item.productId}`}>
                  <Button>제품 상세보기</Button>
                </a>
              </div>
            </div>

            <div className="reviewcount">
              <span className="star">{convertToStars(item.reviewCount)} </span>
              <div>{item.createDate}</div>
            </div>
            <div className="reviewcontent">
              <article>{item.reviewContent}</article>
              <br />
              <br />
              <span>{item.productName}</span>
              <p className="answercontent">
                {item.reviewResponse || "판매자의 답변이 없습니다."}
              </p>
            </div>
            <div style={{ marginTop: "20px", border: "1px solid #dbdbdb" }} />
          </Reviewbox>
        ))}
      </Container>
    </>
  );
};

export default Myreview;
