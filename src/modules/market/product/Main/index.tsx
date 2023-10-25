import { MainContainer } from "./styles";
import SlideBanner from "@/components/SlideBanner";

const MarketMain = () => {
  return (
    <>
      <MainContainer>
        <section>
          <SlideBanner width={"1840px"} height={"500px"}></SlideBanner>
        </section>
        <section></section>
      </MainContainer>
    </>
  );
};

export default MarketMain;
