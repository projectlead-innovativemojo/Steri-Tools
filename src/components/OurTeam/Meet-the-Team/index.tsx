import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard, Navigation, Scrollbar } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";
import slidePic1 from "../src/assets/Pictures/image1.png";
import slidePic2 from "../src/assets/Pictures/image2.png";
import slidePic3 from "../src/assets/Pictures/image3.png";
import movenextbtn from "@/public/images/team/ArrowCircleRight.svg";
import moveprevbtn from "@/public/images/team/ArrowCircleRight.svg";
// import { useState } from "react";

const TeamSlider = () => {
  // const [activeIndex, setActiveIndex] = useState(2);

  const swiper = useSwiper();

  const handleprevbtn = () => {
    swiper?.slidePrev();
  };

  const handleNextvbtn = () => {
    swiper?.slideNext();
  };

  // const handleSlideChange = (swiper) => {
  //   setActiveIndex(swiper.activeIndex);
  // };

  return (
    <div className="parent-div">
      <div className="swiper-main-div">
        <Image
          className="custom-prev"
          onClick={handleprevbtn}
          src={moveprevbtn}
          alt="moveprevbtn"
        />

        <Swiper
          // onSlideChange={handleSlideChange}
          slidesPerView={3}
          // activeIndex={activeIndex}
          initialSlide={1}
          spaceBetween={-70}
          centeredSlides={true}
          // slidesPerGroupSkip={3}
          // scrollbar={true}
          loop={true}
          navigation={{
            nextEl: ".custom-next",

            prevEl: ".custom-prev",
          }}
          modules={[Keyboard, Navigation, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="outer-div">slide 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">slide 2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">slide 3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">slide 4</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="outer-div">slide 6</div>
          </SwiperSlide>
        </Swiper>

        <img
          className="custom-next"
          onClick={handleNextvbtn}
          src={movenextbtn}
          alt="movenextbtn"
          width="47px"
          height="47px"
        />
      </div>
    </div>
  );
};

export default TeamSlider;
