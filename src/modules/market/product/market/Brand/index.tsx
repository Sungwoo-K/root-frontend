import { useEffect, useRef, useState } from "react";
import { Category, Product } from "./styles";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { BrandInfo, PaginationResponse, ProductItem, useCart } from "../data";
import http from "@/utils/http";

const Products = () => {
  const param = useParams();
  const navigate = useNavigate();
  const { carts, setCart } = useCart();
  const [page, setPage] = useState(0);
  const [isLast, setIsLast] = useState<boolean>(false);
  const productTargetRef = useRef();

  const PAGE_SIZE = 10;

  const [products, setProducts] = useState<ProductItem[]>([]);
  const [brand, setBrand] = useState<BrandInfo>();

  const cartRemoveHandle = (productId: number) => {
    setCart(carts.filter((product) => product.id !== productId));
  };
  const cartAddHandle = (productId: number) => {
    const newCarts = [
      ...carts,
      products.find((product) => product.id === productId),
    ];
    setCart(newCarts);
  };

  useEffect(() => {
    (async () => {
      const response = await http.get<BrandInfo>(
        `http://192.168.100.159:8080/product/brands/${param.brandName}`
      );
      if (response !== undefined) {
        if (response.status === 200) {
          setBrand(response.data);
        }
      } else {
        navigate(-1);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!isLast) {
        const response = await http.get<PaginationResponse<ProductItem>>(
          `http://192.168.100.159:8080/product/brands/items/${param.brandName}?page=${page}&size=${PAGE_SIZE}`
        );
        if (response !== undefined) {
          if (response.status === 200) {
            setProducts(products.concat(response.data.content));
            setIsLast(response.data.last);
          }
        }
      }
    })();
  }, [page, isLast]);
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
          {brand && <p>{brand.name}</p>}
          {brand && (
            <img
              src={`http://192.168.100.159:8080/product/files/${brand.imageUuidName}`}
            />
          )}
          {brand && <p>{brand.intro}</p>}
          {brand && <p>대표자: {brand.representativeName}</p>}
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
