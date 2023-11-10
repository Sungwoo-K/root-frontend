import { Banner, BannerContainer } from "./styles";
import { Settings } from "react-slick";

interface BannerSize {
  width: string;
  height: string;
  paths: string[];
}

const SlideBanner = ({ width, height, paths }: BannerSize) => {
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
    pauseOnHover: false,
  };

  const images = {};

  paths.forEach((path, i) => {
    images[`image${i + 1}`] = require(`@/images/${path}`);
  });

  return (
    <BannerContainer widthSize={width} heightSize={height}>
      <Banner widthSize={width} heightSize={height} {...settings}>
        {Object.keys(images).map((key) => (
          <img key={key} src={images[key]} />
        ))}
      </Banner>
      <div></div>
    </BannerContainer>
  );
};

export default SlideBanner;
