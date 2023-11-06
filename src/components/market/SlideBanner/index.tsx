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

  return (
    <BannerContainer>
      <Banner widthSize={width} heightSize={height} {...settings}>
        {paths.map((path) => (
          <img src={`http://192.168.45.205:8080/product/files/${path}`} />
        ))}
      </Banner>
      <div></div>
    </BannerContainer>
  );
};

export default SlideBanner;
