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
  const [review, setReview] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<review[]>(
        `http://192.168.100.109:8080/review/${id}`
      );

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
            <div className="reviewnickname">{item.nickname}</div>
            <div className="reviewcount">
              <span className="star">{convertToStars(item.reviewCount)} </span>
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
