import { Route } from "react-router-dom";
import { lazy } from "react";
import MarketMain from "./product/Main";
import Layout from "./product/market/Layout";

const Products = lazy(() => import("@/modules/market/product/market/Products"));
const HottestItems = lazy(
  () => import("@/modules/market/product/market/Hottest-items")
);
const DiscountItem = lazy(
  () => import("@/modules/market/product/market/Discount-items")
);

export const productRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route path="/products" key="market" element={<Layout />}>
    <Route key="products" element={<Products />} index />
    <Route path="hottest-items" key="hottestItem" element={<HottestItems />} />
    <Route
      path="discount-items"
      key="discountItem"
      element={<DiscountItem />}
    />
  </Route>,
];
