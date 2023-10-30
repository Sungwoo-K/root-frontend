import { Link } from "react-router-dom";
import { Container } from "./styled";

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
      <section></section>
    </Container>
  );
};

export default Layout;
