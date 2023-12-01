import styled from "@emotion/styled";
import Slider from "react-slick";

type BannerSize = {
  widthSize: string;
  heightSize: string;
};

export const BannerContainer = styled.div<BannerSize>`
  height: ${(props) => props.heightSize || "500px"};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  > div:last-of-type {
    position: absolute;
    background-color: silver;
    width: 140px;
    height: 30px;
    bottom: 0;
    border-radius: 10px 10px 0px 0px;
  }
`;

export const Banner = styled(Slider)<BannerSize>`
  display: flex;
  justify-content: center;
  width: ${(props) => props.widthSize || "1840px"};
  height: calc(${(props) => props.heightSize || "470px"} - 30px);
  .slick-list {
    width: ${(props) => props.widthSize || "1840px"};
    height: ${(props) => props.heightSize || "500px"};
  }

  .slick-track {
    width: ${(props) => props.widthSize || "1840px"};
    height: ${(props) => props.heightSize || "500px"};
  }

  .slick-slide {
    width: ${(props) => props.widthSize || "1840px"};
    height: ${(props) => props.heightSize || "500px"};
    div {
      width: ${(props) => props.widthSize || "1840px"};
      height: ${(props) => props.heightSize || "500px"};
      img {
        height: ${(props) => props.heightSize || "500px"};
      }
    }
  }

  .slick-dots {
    z-index: 90;
  }

  .slick-dots li button:focus:before {
    opacity: 0.25;
    color: black;
  }

  li.slick-active button:hover:before,
  li.slick-active button:focus:before {
    opacity: 1;
    color: white;
  }

  .slick-dots li button:hover:before,
  li.slick-active button:before {
    opacity: 1;
    color: white;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition-delay: 10ms;
  }
`;
