import { Route } from "react-router-dom";
import Write from "@/components/community/Write/";
import Main from "@/components/community/Main/index";

export const communityRoutes = [
  <Route key="main-route" path="/community" element={<Main />} />,
  <Route key="write-route" path="/community/Write" element={<Write />} />,
];
