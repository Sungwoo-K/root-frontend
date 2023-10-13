import PostMain from "@/components/community_Main";
import PostHeader from "@/components/community_Header";
import PostSidebar from "@/components/community_Sidebar";

const Layout = () => {
  return (
    <>
      <PostHeader />
      <PostSidebar />
      <PostMain />
    </>
  );
};

export default Layout;
