import { Link, Outlet } from "react-router-dom";
import { Container } from "./styled";
import { Suspense, useEffect, useRef, useState } from "react";
import { useHover } from "@/components/market/Header/data";

const Layout = () => {
  const mainScreenRef = useRef(null);
  const mainScreenNavRef = useRef(null);
  const [eventTrigger, setEventTrigger] = useState<boolean>(false);
  const { isHover } = useHover();
  const appearHandle = () => {
    mainScreenNavRef.current.style.transform = "translateY(90px)";
  };
  const disappearHandle = () => {
    mainScreenNavRef.current.style.transform = "translateY(0px)";
  };

  useEffect(() => {
    if (eventTrigger) {
      mainScreenNavRef.current.addEventListener("mouseover", appearHandle);
      mainScreenNavRef.current.addEventListener("mouseout", disappearHandle);
    } else {
      mainScreenNavRef.current.removeEventListener("mouseover", appearHandle);
      mainScreenNavRef.current.removeEventListener("mouseout", disappearHandle);
    }

    return () => {
      if (mainScreenNavRef.current) {
        mainScreenNavRef.current.removeEventListener("mouseover", appearHandle);
        mainScreenNavRef.current.removeEventListener(
          "mouseout",
          disappearHandle
        );
      }
    };
  }, [eventTrigger]);

  const handleScroll = () => {
    if (mainScreenRef.current.scrollTop > 45) {
      setEventTrigger(true);
    } else {
      setEventTrigger(false);
    }
  };

  useEffect(() => {
    if (eventTrigger) {
      mainScreenNavRef.current.style.top = "-90px";
    } else {
      mainScreenNavRef.current.style.transform = "translateY(0px)";
      mainScreenNavRef.current.style.top = "0";
    }
  }, [eventTrigger]);

  useEffect(() => {
    if (mainScreenRef.current.scrollTop > 45) {
      if (isHover) {
        mainScreenNavRef.current.style.transform = "translateY(90px)";
      } else {
        mainScreenNavRef.current.style.transform = "translateY(0px)";
      }
    }
  }, [isHover]);

  return (
    <Container onScroll={handleScroll} ref={mainScreenRef}>
      <section ref={mainScreenNavRef}>
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
        <Suspense fallback="..loading">
          <Outlet />
        </Suspense>
      </section>
    </Container>
  );
};

export default Layout;
