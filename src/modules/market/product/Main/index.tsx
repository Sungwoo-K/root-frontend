import { MainContainer } from "./styles";
import SlideBanner from "@/components/market/SlideBanner";
import { PiTentDuotone } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const MarketMain = () => {
  return (
    <>
      <MainContainer>
        <section>
          <SlideBanner width={"1840px"} height={"500px"}></SlideBanner>
        </section>
        <section>
          <Link to="/products">
            <article>
              <PiTentDuotone size={90}></PiTentDuotone>
              <span>상품</span>
            </article>
          </Link>
          <Link to="/products/hottest-items">
            <article>
              <BsFire size={90}></BsFire>
              <span>인기상품</span>
            </article>
          </Link>
          <Link to="/products/discount-items">
            <article>
              <TbDiscount2 size={90}></TbDiscount2>
              <span>할인상품</span>
            </article>
          </Link>
          <Link to="/community">
            <article>
              <FaPeopleGroup size={90}></FaPeopleGroup>
              <span>커뮤니티</span>
            </article>
          </Link>
        </section>
      </MainContainer>
    </>
  );
};

export default MarketMain;
