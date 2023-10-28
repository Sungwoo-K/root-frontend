import { Route } from "react-router-dom";
import MarketMain from "./product/Main";
import Market from "./product/Market";

export const productRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route path="/products" key="market" element={<Market />} />,
];
