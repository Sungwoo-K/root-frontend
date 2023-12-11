import { useEffect, useState } from "react";
import { Container, Product } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import { ProductItem, useCart } from "@/modules/market/product/market/data";
import http from "@/utils/http";
import { ReviceItem } from "../../Shopping/Review";

import { all } from "axios";
import { isLocalhost } from "@/components/market/host";
import { apiHost } from "@/components/market/apiHost";

export const Scrap = () => {
  const url = isLocalhost();
  const apiUrl = apiHost();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const category = searchParam.get("category");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [allproducts, setAllproducts] = useState([]);
  const { carts, setCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const response = await http.get<ReviceItem[]>(`${url}/follow`);
      const products = response.data;
      setProducts(products);

      const fetchPromises = products.map(async (product) => {
        const productResponse = await http.get<ProductItem[]>(
          `${apiUrl}/product/brands/${product.brandName}`
        );
        return productResponse.data;
      });

      const fetResult = await Promise.all(fetchPromises);
      setAllproducts(fetResult);
    };

    fetchData();
  }, []);

  return (
    <>
      <Container>
        <Product>
          {allproducts.map((product) => (
            <section
              key={product.id}
              onClick={() => {
                navigate(`/products/brands/${product.name}`);
              }}
            >
              <div key={product.id}>
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/products/brands/${product.name}`);
                  }}
                >
                  {product.name}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                ></div>
                <img src={`${apiUrl}/product/files/${product.imageUuidName}`} />
                <p>{product.intro}</p>
                <p>{product.representativeName}</p>
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

export default Scrap;
