import { DetailCard } from "./DetailCard";
import engine from "../images/engine.png";
import right from "../images/right.png";
import left from "../images/left.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const Carousel = () => {
  //   function NextArrow(props) {
  //     const { onClick } = props;
  //     return (
  //       <div className="arrow arrow-right" onClick={onClick}>
  //         <BsArrowRight />
  //       </div>
  //     );
  //   }
  //   function PrevArrow(props) {
  //     const { onClick } = props;
  //     return (
  //       <div className="arrow arrow-left" onClick={onClick}>
  //         <BsArrowLeft />
  //       </div>
  //     );
  //   }
  const dataTest = [1, 2, 3, 4, 5, 6];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="w-3/4 m-auto">
      <div>
        <Slider {...settings}>
          {dataTest.map((i) => (
            <DetailCard
              mainHeader={"Engine"}
              subHeader={"Power"}
              icon={engine}
              detail={"@ 5,550 - 6,250 rpm"}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};
