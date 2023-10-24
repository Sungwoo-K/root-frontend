import styled from "@emotion/styled";
import Slider from "react-slick";

export const BannerContainer = styled(Slider)`
  height: 400px;
  .slick-list {
    height: 430px;
  }

  .slick-track {
    height: 430px;
  }

  .slick-slide {
    height: 430px;
    div {
      height: 430px;
      img {
        height: 430px;
        object-fit: contain;
      }
    }
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 0.25;
    color: black;
  }

  li.slick-active button:hover:before,
  li.slick-active button:focus:before {
    opacity: 1;
    color: white;
  }

  li.slick-active button:before {
    opacity: 1;
    color: white;
  }
`;
