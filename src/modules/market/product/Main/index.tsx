import { Link } from "react-router-dom";
import { MainContainer } from "./styles";
import { useEffect, useRef, useState } from "react";
import SlideBanner from "@/components/SlideBanner";

interface Screen {
  id: number;
}

const MarketMain = () => {
  return (
    <>
      <MainContainer>
        <section>
          <SlideBanner></SlideBanner>
        </section>
        <section></section>
      </MainContainer>
    </>
  );
};

export default MarketMain;
