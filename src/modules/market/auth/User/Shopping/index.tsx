import { Link, Outlet, useLocation } from "react-router-dom";
import { Container, Orderlist } from "./styles";
import { Suspense } from "react";

export const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <Orderlist>
          <Link
            to="/myorder/list/detail"
            className={`link ${
              location.pathname === "/myorder/list/detail" ? "active" : ""
            }`}
          >
            <div className="list">구매 내역</div>
          </Link>
          <Link
            to="/myorder/list/wait"
            className={`link ${
              location.pathname === "/myorder/list/wait" ? "active" : ""
            }`}
          >
            <div className="list">진행 내역</div>
          </Link>
          <Link
            to="/myorder/list/fail"
            className={`link ${
              location.pathname === "/myorder/list/fail" ? "active" : ""
            }`}
          >
            <div className="list">취소 내역</div>
          </Link>
          <Link
            to="/myorder/list/review"
            className={`link ${
              location.pathname === "/myorder/list/review" ? "active" : ""
            }`}
          >
            <div className="list">리뷰 내역</div>
          </Link>
          <Link
            to="/myorder/list/my-review"
            className={`link ${
              location.pathname === "/myorder/list/my-review" ? "active" : ""
            }`}
          >
            <div className="list">작성한 리뷰</div>
          </Link>
          <Link
            to="/myorder/list/inquery"
            className={`link ${
              location.pathname === "/myorder/list/inquery" ? "active" : ""
            }`}
          >
            <div className="list">문의 내역</div>
          </Link>
        </Orderlist>
      </Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
