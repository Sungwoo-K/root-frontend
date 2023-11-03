import { Route } from "react-router-dom";
import { lazy } from "react";
import MarketMain from "./product/Main";

const Layout = lazy(() => import("@/modules/market/product/market/Layout"));

const Products = lazy(() => import("@/modules/market/product/market/Products"));
const HottestItems = lazy(
  () => import("@/modules/market/product/market/Hottest-items")
);
const DiscountItem = lazy(
  () => import("@/modules/market/product/market/Discount-items")
);

export const productRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route key="market" path="/products" element={<Layout />}>
    <Route key="products" element={<Products />} index />
    <Route key="hottestItem" path="hottest-items" element={<HottestItems />} />
    <Route
      key="discountItem"
      path="discount-items"
      element={<DiscountItem />}
    />
  </Route>,
];
