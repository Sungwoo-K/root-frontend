import { Route } from "react-router-dom";
import Write from "@/components/community/Write/index";
import Main from "@/components/community/Main/index";
import Details from "@/components/community/Details";
import Zzzzz from "@/components/community/Zzzzz";

export const communityRoutes = [
  <Route key="main-route" path="/community" element={<Main />} />,
  <Route key="write-route" path="/community/Write" element={<Write />} />,
  <Route
    key="details-route"
    path="/community/details/:postId"
    element={<Details />}
  />,
  <Route key="zzzzz-route" path="/community/zzzzz" element={<Zzzzz />} />,
];
