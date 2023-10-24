import testimage from "../../images/test-img.jpg";
import { BannerContainer } from "./styles";

const SlideBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <BannerContainer {...settings}>
      <img src={testimage} />

      <img src={testimage} />

      <img src={testimage} />

      <img src={testimage} />

      <img src={testimage} />

      <img src={testimage} />
    </BannerContainer>
  );
};

export default SlideBanner;
