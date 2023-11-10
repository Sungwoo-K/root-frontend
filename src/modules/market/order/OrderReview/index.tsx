import { useEffect, useState } from "react";
import { Button, Container, Reviewbox } from "./styles";

import http from "@/utils/http";
import { ReviceItem } from "../../auth/User/Shopping/Review";
import { useParams } from "react-router-dom";
export interface review {
  nickname: string;
  reviewContent: string;
  reviewCount: number;
  reviewResponse: string;
}
export const Revieworder = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/review/${id}`
      );
      // console.log(`http://192.168.100.109:8080/review/${id}`);
      setProducts(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        {products.map((item) => (
          <Reviewbox key={item.id}>
            <div className="reviewnickname">{item.nickname}</div>
            <div className="reviewcount">
              <span>{item.reviewCount} </span>
              <div>{item.orderdate}</div>
            </div>
            <div className="reviewcontent">{item.reviewContent}</div>
            <div style={{ marginTop: "20px", border: "1px solid #dbdbdb" }} />
          </Reviewbox>
        ))}
      </Container>
    </>
  );
};

export default Revieworder;
