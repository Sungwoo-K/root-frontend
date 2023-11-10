import { useEffect, useRef, useState } from "react";
import { Category, Product } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { PaginationResponse, ProductItem, useCart } from "../data";
import http from "@/utils/http";

const Products = () => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const category = searchParam.get("category");
  const navigate = useNavigate();
  const { carts, setCart } = useCart();
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [nowCategory, setNowCategory] = useState<string>();
  const productTargetRef = useRef();

  const PAGE_SIZE = 10;

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
    if (nowCategory !== category) {
      setProducts([]);
      setNowCategory(category);
      setPage(0);
      setIsLast(false);
    }

    const fetchData = async () => {
      if (!isLast) {
        const response = await http.get<PaginationResponse<ProductItem>>(
          `http://192.168.100.159:8080/product?category=${category}&page=${page}&size=${PAGE_SIZE}`
        );
        if (response !== undefined) {
          if (response.status === 200) {
            setProducts((prevProducts) =>
              prevProducts.concat(response.data.content)
            );
            setIsLast(response.data.last);
          }
        }
      }
    };

    fetchData();
  }, [category, page, isLast]);
  useEffect(() => {
    const productTarget = productTargetRef.current;
    const observer = new IntersectionObserver((targets) => {
      targets.forEach((target) => {
        if (target.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
    });
    observer.observe(productTarget);

    return () => {
      observer.unobserve(productTarget);
    };
  }, []);

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
          <Link to="/products?category=tableware">
            <span>식기류 &rarr;</span>
          </Link>
          <Link to="/products?category=accessory">
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
                  navigate(`/products/brands/${product.productBrand}`);
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
            </div>

            <img
              src={`http://192.168.100.159:8080/product/files/${product.mainImageUuidName}`}
            />
            <p>{product.productName}</p>
            <p>{product.productPrice.toLocaleString()}원</p>
            <p>
              {product.discountRate > 0
                ? `${product.discountRate}% 할인중`
                : ""}
            </p>
          </section>
        ))}
        <div ref={productTargetRef}></div>
      </Product>
    </>
  );
};

export default Products;
