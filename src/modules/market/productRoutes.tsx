import { Route } from "react-router-dom";
import { lazy } from "react";
import MarketMain from "./product/Main";

const Layout = lazy(() => import("@/modules/market/product/market/Layout"));

const Products = lazy(() => import("@/modules/market/product/market/Products"));
const HottestItems = lazy(
  () => import("@/modules/market/product/market/Hottest-items")
);
const Product = lazy(() => import("@/modules/market/order/OrderMain"));
const DiscountItem = lazy(
  () => import("@/modules/market/product/market/Discount-items")
);

const SearchItem = lazy(
  () => import("@/modules/market/product/market/Search-items")
);
const BrandInfo = lazy(() => import("@/modules/market/product/market/Brand"));

export const productRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route key="product" path="products/:id" element={<Product />} />,
  <Route key="market" path="/products" element={<Layout />}>
    <Route key="products" element={<Products />} index />
    <Route key="hottestItem" path="hottest-items" element={<HottestItems />} />
    <Route
      key="discountItem"
      path="discount-items"
      element={<DiscountItem />}
    />
    <Route key="searchItem" path="items/search" element={<SearchItem />} />
    <Route key="brand" path="brands/:brandName" element={<BrandInfo />} />
  </Route>,
];
