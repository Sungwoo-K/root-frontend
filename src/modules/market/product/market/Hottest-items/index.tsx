import { useEffect, useState } from "react";
import { ProductItem, ProductList, useCart } from "../data";
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
      const response = await http.get<ProductList[]>(
        `http://192.168.100.159:8080/product/top-favorite`
      );
      if (response !== undefined) {
        if (response.status === 200) {
          const result = response.data;
          result.forEach((productList) => {
            const key: string[] = Object.keys(productList);
            if (key[0] == "top-tent") {
              setTopTent(productList["top-tent"]);
              setProductLists((prevProductLists) =>
                prevProductLists.concat(productList["top-tent"])
              );
            }
            if (key[0] == "top-table") {
              setTopTable(productList["top-table"]);
              setProductLists((prevProductLists) =>
                prevProductLists.concat(productList["top-table"])
              );
            }
            if (key[0] == "top-tableware") {
              setTopTableware(productList["top-tableware"]);
              setProductLists((prevProductLists) =>
                prevProductLists.concat(productList["top-tableware"])
              );
            }
            if (key[0] == "top-accessory") {
              setTopAccessory(productList["top-accessory"]);
              setProductLists((prevProductLists) =>
                prevProductLists.concat(productList["top-accessory"])
              );
            }
            if (key[0] == "top-other") {
              setTopOther(productList["top-other"]);
              setProductLists((prevProductLists) =>
                prevProductLists.concat(productList["top-other"])
              );
            }
          });
        }
      }
    })();
  }, []);
  return (
    <>
      <HottestContainer>
        <section>
          <p>Top Tent</p>
          <article>
            {topTent &&
              topTent.map((tent) => (
                <section
                  key={tent.id}
                  onClick={() => {
                    navigate(`/products/${tent.id}`);
                  }}
                >
                  <div>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/brands/${tent.productBrand}`);
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
                  </div>
                  <img
                    src={`http://192.168.100.159:8080/product/files/${tent.mainImageUuidName}`}
                  />
                  <p>{tent.productName}</p>
                  <p>{tent.productPrice.toLocaleString()}원</p>
                  <p>
                    {tent.discountRate > 0
                      ? `${tent.discountRate}% 할인중`
                      : ""}
                  </p>
                </section>
              ))}
          </article>
        </section>
        <section>
          <p>Top Table</p>
          <article>
            {topTable &&
              topTable.map((table) => (
                <section
                  key={table.id}
                  onClick={() => {
                    navigate(`/products/${table.id}`);
                  }}
                >
                  <div>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/brands/${table.productBrand}`);
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
                  </div>
                  <img
                    src={`http://192.168.100.159:8080/product/files/${table.mainImageUuidName}`}
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
            {topTableware &&
              topTableware.map((tableware) => (
                <section
                  key={tableware.id}
                  onClick={() => {
                    navigate(`/products/${tableware.id}`);
                  }}
                >
                  <div>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/brands/${tableware.productBrand}`);
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
                  </div>
                  <img
                    src={`http://192.168.100.159:8080/product/files/${tableware.mainImageUuidName}`}
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
            {topAccessory &&
              topAccessory.map((accessory) => (
                <section
                  key={accessory.id}
                  onClick={() => {
                    navigate(`/products/${accessory.id}`);
                  }}
                >
                  <div>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/brands/${accessory.productBrand}`);
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
                  </div>
                  <img
                    src={`http://192.168.100.159:8080/product/files/${accessory.mainImageUuidName}`}
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
            {topOther &&
              topOther.map((other) => (
                <section
                  key={other.id}
                  onClick={() => {
                    navigate(`/products/${other.id}`);
                  }}
                >
                  <div>
                    <p
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/brands/${other.productBrand}`);
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
                  </div>
                  <img
                    src={`http://192.168.100.159:8080/product/files/${other.mainImageUuidName}`}
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
