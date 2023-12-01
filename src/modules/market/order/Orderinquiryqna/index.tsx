import { useEffect, useState } from "react";
import { Container, Inquerybox, Title } from "./styles";
import { useParams } from "react-router-dom";
import http from "@/utils/http";

export interface review {
  id: number;
  userLoginId: string;
  username: string;
  productId: number;
  productName: string;
  inqueryCategory: string;
  inqueryContent: string;
  inqueryAnswer: string;
}

export const Inqueryorderqna = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await http.get<review[]>(
        `http://192.168.100.109:8080/inquery/${id}`
      );
      setProducts(response.data);
    };
    fetch();
  }, []);
  return (
    <>
      <Container>
        {products.map((item) => (
          <Inquerybox key={item.id}>
            <div className="productanswer">
              <span>Q &nbsp;{item.userLoginId}</span>
              <p>{item.brand}</p>
            </div>
            <p className="answercontent">{item.inqueryContent}</p>
            <div className="productanswer">
              <span>A &nbsp;{item.productName}</span>
              <p>{item.brand}</p>
            </div>
            <p className="answercontent">
              {item.inqueryAnswer || "문의 하신 답변 내용이 없습니다."}
            </p>
            <div className="bottomline"></div>
          </Inquerybox>
        ))}
      </Container>
    </>
  );
};

export default Inqueryorderqna;
