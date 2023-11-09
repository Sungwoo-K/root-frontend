import { useEffect, useState } from "react";
import { ProductItem, productList, useCart } from "../data";
import { HottestContainer } from "./styles";
import { RiShoppingCartFill, RiShoppingCartLine } from "react-icons/ri";
import http from "@/utils/http";
import { useNavigate } from "react-router-dom";

const HottestItems = () => {
  const { carts, setCart } = useCart();
  const [productLists, setProductLists] = useState<ProductItem[]>([]);
  const [topTent, setTopTent] = useState<ProductItem[]>([]);
  const [topTable, setTopTable] = useState<ProductItem[]>([]);
  const [topTableware, setTopTableware] = useState<ProductItem[]>([]);
  const [topAccessory, setTopAccessory] = useState<ProductItem[]>([]);
  const [topOther, setTopOther] = useState<ProductItem[]>([]);
  const navigate = useNavigate();

  const cartRemoveHandle = (productId) => {
    setCart(carts.filter((product) => product.id !== productId));
  };
  const cartAddHandle = (productId) => {
    const newCarts = [
      ...carts,
      productLists.find((product) => product.id === productId),
    ];
    setCart(newCarts);
  };

  useEffect(() => {
    (async () => {
      const response = await http.get<productList>(
        `http://192.168.0.30:8080/product/top-favorite`
      );
      if (response !== undefined) {
        if (response.status === 200) {
          const result: Array<Map<string, Array<ProductItem>>> = response.data;
          const mergedProductArray = result.reduce((result, map) => {
            for (const key in map) {
              result.push(...map[key]);
            }
            return result;
          }, []);
          setProductLists(mergedProductArray);
          console.log(response.data);

          result.forEach((productMap) => {
            if (productMap instanceof Map) {
              if (productMap.has("top-tent")) {
                setTopTent(productMap.get("top-tent"));
              }
              if (productMap.has("top-table")) {
                setTopTable(productMap.get("top-table"));
              }
              if (productMap.has("top-tableware")) {
                setTopTableware(productMap.get("top-tableware"));
              }
              if (productMap.has("top-accesory")) {
                setTopAccessory(productMap.get("top-accesory"));
              }
              if (productMap.has("top-other")) {
                setTopOther(productMap.get("top-other"));
              }
            }
          });
        }
      }
    })();
  }, []);
  console.log();
  return (
    <>
      <HottestContainer>
        <section>
          <p>Top Tent</p>
          <article>
            {topTent.map((tent) => (
              <section
                key={tent.id}
                onClick={() => {
                  navigate(`/products/${tent.id}`);
                }}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {tent.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.some(
                    (productInCart) => tent.id === productInCart.id
                  ) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(tent.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(tent.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.0.30:8080/product/files/${tent.mainImageUuidName}`}
                />
                <p>{tent.productName}</p>
                <p>{tent.productPrice.toLocaleString()}원</p>
                <p>
                  {tent.discountRate > 0 ? `${tent.discountRate}% 할인중` : ""}
                </p>
              </section>
            ))}
          </article>
        </section>
        <section>
          <p>Top Table</p>
          <article>
            {topTable.map((table) => (
              <section
                key={table.id}
                onClick={() => {
                  navigate(`/products/${table.id}`);
                }}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {table.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.some(
                    (productInCart) => table.id === productInCart.id
                  ) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(table.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(table.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.0.30:8080/product/files/${table.mainImageUuidName}`}
                />
                <p>{table.productName}</p>
                <p>{table.productPrice.toLocaleString()}원</p>
                <p>
                  {table.discountRate > 0
                    ? `${table.discountRate}% 할인중`
                    : ""}
                </p>
              </section>
            ))}
          </article>
        </section>
        <section>
          <p>Top Tableware</p>
          <article>
            {topTableware.map((tableware) => (
              <section
                key={tableware.id}
                onClick={() => {
                  navigate(`/products/${tableware.id}`);
                }}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {tableware.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.some(
                    (productInCart) => tableware.id === productInCart.id
                  ) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(tableware.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(tableware.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.0.30:8080/product/files/${tableware.mainImageUuidName}`}
                />
                <p>{tableware.productName}</p>
                <p>{tableware.productPrice.toLocaleString()}원</p>
                <p>
                  {tableware.discountRate > 0
                    ? `${tableware.discountRate}% 할인중`
                    : ""}
                </p>
              </section>
            ))}
          </article>
        </section>
        <section>
          <p>Top Accessory</p>
          <article>
            {topAccessory.map((accessory) => (
              <section
                key={accessory.id}
                onClick={() => {
                  navigate(`/products/${accessory.id}`);
                }}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {accessory.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.some(
                    (productInCart) => accessory.id === productInCart.id
                  ) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(accessory.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(accessory.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.0.30:8080/product/files/${accessory.mainImageUuidName}`}
                />
                <p>{accessory.productName}</p>
                <p>{accessory.productPrice.toLocaleString()}원</p>
                <p>
                  {accessory.discountRate > 0
                    ? `${accessory.discountRate}% 할인중`
                    : ""}
                </p>
              </section>
            ))}
          </article>
        </section>
        <section>
          <p>Top Other</p>
          <article>
            {topOther.map((other) => (
              <section
                key={other.id}
                onClick={() => {
                  navigate(`/products/${other.id}`);
                }}
              >
                <p
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/brands/123`);
                  }}
                >
                  {other.productBrand}
                </p>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {carts.some(
                    (productInCart) => other.id === productInCart.id
                  ) ? (
                    <RiShoppingCartFill
                      onClick={() => cartRemoveHandle(other.id)}
                      size={"28px"}
                    />
                  ) : (
                    <RiShoppingCartLine
                      onClick={() => cartAddHandle(other.id)}
                      size={"28px"}
                    />
                  )}
                </div>
                <img
                  src={`http://192.168.0.30:8080/product/files/${other.mainImageUuidName}`}
                />
                <p>{other.productName}</p>
                <p>{other.productPrice.toLocaleString()}원</p>
                <p>
                  {other.discountRate > 0
                    ? `${other.discountRate}% 할인중`
                    : ""}
                </p>
              </section>
            ))}
          </article>
        </section>
      </HottestContainer>
    </>
  );
};

export default HottestItems;
