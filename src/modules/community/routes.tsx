import { Route } from "react-router-dom";
import Index from "@/components/community_Main/index";

export const communityRoutes = [
  <Route key="main-route" path="/community" Component={Index} />,
];
