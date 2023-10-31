import { Link, Outlet } from "react-router-dom";
import { Container } from "./styled";
import { Suspense } from "react";

const Layout = () => {
  return (
    <Container>
      <section>
        <article>
          <Link to="/products">
            <span>상품</span>
          </Link>
        </article>
        <article>
          <Link to="/products/hottest-items">
            <span>인기상품</span>
          </Link>
        </article>
        <article>
          <Link to="/products/discount-items">
            <span>할인상품</span>
          </Link>
        </article>
      </section>
      <section>
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </Container>
  );
};

export default Layout;
