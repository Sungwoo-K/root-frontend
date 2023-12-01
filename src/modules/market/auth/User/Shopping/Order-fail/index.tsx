import { useEffect, useState } from "react";
import { BrandName, Container, Detail, ProductPrice, Totalimg } from "./styles";
import { Navigate } from "react-router-dom";
import http from "@/utils/http";
import { ReviceItem } from "../Review";

export const Orderdetail = () => {
  // const { carts, setCart } = useCart();
  const [stars, setStar] = useState([]);

  const [products, setProducts] = useState([]);

  const starRemoveHandle = (productId) => {
    setStar(stars.filter((id) => id !== productId));
  };
  const starAddHandle = (productId) => {
    const newStars = [...stars, productId];
    setStar(newStars);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/order/user/false`
      );
      setProducts(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Totalimg>
          {products.map((item) => (
            <Detail key={item.id}>
              <p className="brandname">{item.brandName}</p>
              <img
                src={`http://192.168.100.159:8080/product/files/main-image/${item.productId}`}
                className="imagename"
              />
              <BrandName>{item.productName}</BrandName>

              <ProductPrice>
                <div>{item.permissionContent}</div>
                {item.productPrice.toLocaleString()} 원
              </ProductPrice>
            </Detail>
          ))}
        </Totalimg>
      </Container>
    </>
  );
};

export default Orderdetail;
