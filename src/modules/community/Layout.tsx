import { useLocation, useMatch } from "react-router-dom";
import PostHeader from "@/components/community/Header";
import PostSidebar from "@/components/community/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const matchWrite = useMatch("/community/write/*");
  const matchDetails = useMatch("/community/details/:postId");
  return (
    <>
      <PostHeader />
      {!matchWrite && !matchDetails && <PostSidebar />}
      <Outlet />
    </>
  );
};

export default Layout;
