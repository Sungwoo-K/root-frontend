import { Route } from "react-router-dom";
import Index from "@/components/community_Main/index";
import Write from "@/components/community_Write/index";

export const communityRoutes = [
  <Route key="main-route" path="/community" element={<Index />} />,
  <Route key="write-route" path="/community/Write" element={<Write />} />,
];
