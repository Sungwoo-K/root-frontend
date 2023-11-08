import { useEffect, useState } from "react";
import { Container, Product } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "@/modules/market/product/market/data";
import http from "@/utils/http";
import { ReviceItem } from "../../Shopping/Review";
import { ProductItem } from "@/modules/market/product/market/Products";
import { all } from "axios";

export const Follow = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const category = searchParam.get("category");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const { carts, setCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(
        `http://192.168.100.109:8080/scrap`
      );
      const products = response.data;
      //   console.log(products);
      setProducts(products);

      const fetchPromises = products.map(async (product) => {
        console.log(product.productId);
        const productResponse = await http.get<ProductItem[]>(
          `http://192.168.100.159:8080/product/${product.productId}`
        );
        return productResponse.data;
      });

      const fetResult = await Promise.all(fetchPromises);
      setAllproducts(fetResult);
      console.log(allproducts);
    };

    fetchData();
  }, []);

  const cartRemoveHandle = (productId) => {
    setCart(carts.filter((id) => id !== productId));
  };
  const cartAddHandle = (productId) => {
    const newCarts = [...carts, productId];
    setCart(newCarts);
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
                <p>{product.id}</p>
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
                <p>{product.productPrice}원</p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  )
                </div>
              </div>
            </section>
          ))}
        </Product>
      </Container>
    </>
  );
};

export default Follow;
