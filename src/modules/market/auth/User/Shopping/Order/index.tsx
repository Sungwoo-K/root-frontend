import { useEffect, useState } from "react";
import { BrandName, Container, Detail, ProductPrice, Totalimg } from "./styles";
import { Navigate } from "react-router-dom";
import http from "@/utils/http";
import { ReviceItem } from "../Review";
import { isLocalhost } from "@/components/market/host";
import { apiHost } from "@/components/market/apiHost";

export const Orderdetail = () => {
  const url = isLocalhost();
  const apiUrl = apiHost();
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
      const response = await http.get<ReviceItem[]>(`${url}/order/user/true`);
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
                src={`${apiUrl}/product/files/main-image/${item.productId}`}
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
