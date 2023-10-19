import PostHeader from "@/components/community_Header";
import PostSidebar from "@/components/community_Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <PostHeader />
      <PostSidebar />
      <Outlet />
    </>
  );
};

export default Layout;
