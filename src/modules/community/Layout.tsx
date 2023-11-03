import { useLocation } from "react-router-dom";
import PostHeader from "@/components/community/Header";
import PostSidebar from "@/components/community/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <>
      <PostHeader />
      {location.pathname !== "/community/Write" &&
        location.pathname !== "/community/details" && <PostSidebar />}
      <Outlet />
    </>
  );
};

export default Layout;
