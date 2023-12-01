import { Link, Outlet, useLocation } from "react-router-dom";
import { Container, Orderlist } from "./styles";
import { Suspense } from "react";

export const Favorite = () => {
  const location = useLocation();

  return (
    <>
      <Container>
        <Orderlist>
          <Link
            to="scrap"
            className={`link ${
              location.pathname.includes("/scrap") ? "active" : ""
            }`}
          >
            <div className="list">장바구니</div>
          </Link>
          <Link
            to="follow"
            className={`link ${
              location.pathname.includes("/follow") ? "active" : ""
            }`}
          >
            <div className="list">구독</div>
          </Link>
        </Orderlist>
      </Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Favorite;
