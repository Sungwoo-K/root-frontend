import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketLayout from "./modules/market/Layout";
import CommunityLayout from "./modules/community/Layout";
import { communityRoutes } from "./modules/community/routes";
import ResetStyle from "./styles/reset";
import { productRoutes } from "./modules/market/productRoutes";
import { userRoutes } from "./modules/market/userRoutes";
import Login from "./modules/market/auth/Login";
import Join from "./modules/market/auth/Join";
// import {
//   profileEdit,
//   userProfile,
// } from "./modules/market/auth/User/Profile/useProfile/routes";
import { orderItem } from "./modules/market/order/routes";

const App = () => {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MarketLayout />}>
          {productRoutes}
          {userRoutes}
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>

        <Route path="order" element={<MarketLayout />}>
          {orderItem}
        </Route>

        <Route element={<CommunityLayout />} path="/community">
          {communityRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
