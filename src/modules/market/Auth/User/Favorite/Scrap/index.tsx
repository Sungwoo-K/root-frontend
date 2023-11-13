import { useEffect, useState } from "react";
import { Container, Product } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { ProductItem, useCart } from "@/modules/market/product/market/data";
import http from "@/utils/http";
import { ReviceItem } from "../../Shopping/Review";

import { all } from "axios";
import { TbNewSection } from "react-icons/tb";

export const Scrap = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const category = searchParam.get("category");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const { carts, setCart } = useCart("true");

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/scrap`
      );
      const products = response.data;
      setProducts(products);

      const fetchPromises = products.map(async (product) => {
        const productResponse = await http.get<ProductItem[]>(
          `http://192.168.100.159:8080/product/${product.productId}`
        );
        return productResponse.data;
      });

      const fetResult = await Promise.all(fetchPromises);
      setAllproducts(fetResult);
    };

    fetchData();
  }, []);

  const cartRemoveHandle = (productId) => {
    setCart(carts.filter((id) => id !== productId));
  };
  const cartAddHandle = (productId) => {
    const newCarts = [...carts, productId];

    setCart(newCarts);

    const fetch = async () => {
      await http.delete(
        `http://192.168.100.109:8080/scrap/delete/${productId}`
      );
    };
    alert("장바구니에서 제거 되었습니다.");
    window.location.replace("/myfavorite/list/scrap");
    fetch();
  };
  return (
    <>
      <Container>
        <Product>
          {allproducts.map((product) => (
            <section
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <div key={product.id}>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {product.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.includes(product.id) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(product.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(product.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.100.159:8080/product/files/${product.mainImageUuidName}`}
                />
                <p>{product.productName}</p>
                <p>{product.productPrice.toLocaleString()}원</p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                ></div>
              </div>
            </section>
          ))}
        </Product>
      </Container>
    </>
  );
};

export default Scrap;
