import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketLayout from "./modules/market/Layout";
import CommunityLayout from "./modules/community/Layout";

import { communityRoutes } from "./modules/community/routes";
import { productRoutes } from "./modules/market/productRoutes";
import { userRoutes } from "./modules/market/userRoutes";
import ResetStyle from "./styles/reset";
import Login from "./modules/market/auth/Login";
import Join from "./modules/market/auth/Join";

import {
  profileEdit,
  userProfile,
} from "./modules/market/auth/User/Profile/useProfile/routes";

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
        <Route element={<Join />} path="/join"></Route>

        <Route element={<MarketLayout />} path="/user">
          {userProfile}
          {/* <Route path="edits">{profileEdit}</Route> */}
        </Route>
        <Route path="edits" element={<MarketLayout />}>
          {profileEdit}
        </Route>

        <Route element={<CommunityLayout />} path="/community">
          {communityRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
