import { Route } from "react-router-dom";
import MarketMain from "./product/Main";
import Market from "./product/market/Layout";
import Layout from "./product/market/Layout";

export const productRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route path="/products" key="market" element={<Layout />}>
    <Route></Route>
  </Route>,
];
