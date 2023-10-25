import { Banner, BannerContainer } from "./styles";
import image1 from "../../images/pexels-nathan-moore-2603681.jpg";
import image2 from "../../images/pexels-igor-cibulsky-8713324.jpg";
import image3 from "../../images/pexels-roman-odintsov-4555526.jpg";
import image4 from "../../images/pexels-taryn-elliott-4909105.jpg";
import { Settings } from "react-slick";

interface BannerSize {
  width: string;
  height: string;
}

const SlideBanner = ({ width, height }: BannerSize) => {
  const settings: Settings = {
    slide: "img",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    useTransform: false,
  };

  return (
    <BannerContainer>
      <Banner widthSize={width} heightSize={height} {...settings}>
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
      </Banner>
      <div></div>
    </BannerContainer>
  );
};

export default SlideBanner;
