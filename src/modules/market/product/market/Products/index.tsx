import { useEffect, useState } from "react";
import { Category, Product } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { useCart } from "../data";
import http from "@/utils/http";

export interface ProductItem {
  id: number;
  productBrand: string;
  productName: string;
  productPrice: number;
  category: string;
  productDescription: string;
  isActive: Boolean;
  maximumPurchaseQuantity: number;
  discountRate: number;
  mainImageUuidName: string;
}

const Products = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const category = searchParam.get("category");
  const navigate = useNavigate();
  const { carts, setCart } = useCart();

  const [products, setProducts] = useState<ProductItem[]>([]);

  const cartRemoveHandle = (productId) => {
    setCart(carts.filter((product) => product.id !== productId));
  };
  const cartAddHandle = (productId) => {
    const newCarts = [
      ...carts,
      products.find((product) => product.id === productId),
    ];
    setCart(newCarts);
  };

  useEffect(() => {
    (async () => {
      const response = await http.get<ProductItem[]>(
        `http://192.168.0.30:8080/product?category=${category}`
      );
      console.log(response);
      if (response !== undefined) {
        if (response.status === 200) {
          setProducts(response.data);
        }
      }
    })();
  }, [category]);
  return (
    <>
      <Category>
        <section>
          <Link to="/products">
            <span>전체 &rarr;</span>
          </Link>
          <Link to="/products?category=tent">
            <span>텐트 &rarr;</span>
          </Link>
          <Link to="/products?category=table">
            <span>의자 &rarr;</span>
          </Link>
          <Link to="/products?category=accessory">
            <span>식기류 &rarr;</span>
          </Link>
          <Link to="/products?category=tableware">
            <span>악세서리 &rarr;</span>
          </Link>
          <Link to="/products?category=other">
            <span>기타 &rarr;</span>
          </Link>
        </section>
      </Category>
      <Product>
        {products.map((product) => (
          <section
            key={product.id}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <div>
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
                {carts.some(
                  (productInCart) => product.id === productInCart.id
                ) ? (
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
                src={`http://192.168.0.30:8080/product/files/${product.mainImageUuidName}`}
              />
              <p>{product.productName}</p>
              <p>{product.productPrice.toLocaleString()}원</p>
              <p>
                {product.discountRate > 0
                  ? `${product.discountRate}% 할인중`
                  : ""}
              </p>
            </div>
          </section>
        ))}
      </Product>
    </>
  );
};

export default Products;
