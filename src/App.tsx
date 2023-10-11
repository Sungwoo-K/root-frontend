import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./modules/main/Layout";
import MarketLayout from "./modules/market/Layout";
import CommunityLayout from "./modules/community/Layout";
import { mainRoutes } from "./modules/main/routes";
import { communityRoutes } from "./modules/community/routes";
import { productRoutes } from "./modules/market/productRoutes";
import { userRoutes } from "./modules/market/userRoutes";
import ResetStyle from "./styles/reset";

const App = () => {
  return (
    <BrowserRouter>
      <ResetStyle />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {mainRoutes}
        </Route>
        <Route element={<MarketLayout />} path="/market">
          {productRoutes}
          {userRoutes}
        </Route>
        <Route element={<CommunityLayout />} path="/community">
          {communityRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
