import { Route } from "react-router-dom";
import MarketMain from "./product/Main";
import { lazy } from "react";
import Join from "./auth/Join";

const Users = lazy(
  () => import("@/modules/market/auth/User/Profile/useProfile")
);
const EditProfile = lazy(() => import("@/modules/market/auth/User/Edit/"));

export const userRoutes = [
  <Route key="main" element={<MarketMain />} index />,
  <Route path="/user" key="user" element={<Users />}>
    <Route path="edits" element={<EditProfile />} />
  </Route>,
];
