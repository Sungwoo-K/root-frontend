import { Link, Outlet, useLocation } from "react-router-dom";
import { Container } from "./styles";
import { Suspense } from "react";

export const Layout = () => {
  const location = useLocation();

  const isActive = (path) => {
    const currentPath = location.pathname;

    if (path === "/user/profile/edits") {
      return currentPath === path;
    }
    if (path === "/user/profile") {
      return currentPath === path;
    }
    return currentPath.startsWith(path);
  };

  return (
    <>
      <Container>
        <Link to="/user/profile" className="LinkHeader">
          <div className={`Home ${isActive("/user/profile") ? "active" : ""}`}>
            프로필
          </div>
        </Link>
        <Link to="/myorder/list/detail" className="LinkHeader">
          <div
            className={`Shopping ${isActive("/myorder/list") ? "active" : ""}`}
          >
            나의 쇼핑
          </div>
        </Link>
        <Link to="/myfavorite/list/scrap" className="LinkHeader">
          <div
            className={`Great ${isActive("/myfavorite/list") ? "active" : ""}`}
          >
            좋아요
          </div>
        </Link>
        <Link to="/user/profile/edits" className="LinkHeader">
          <div
            className={`Setting ${
              isActive("/user/profile/edits") ? "active" : ""
            }`}
          >
            설정
          </div>
        </Link>
      </Container>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
