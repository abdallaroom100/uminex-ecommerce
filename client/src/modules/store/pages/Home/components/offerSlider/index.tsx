// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function index() {
  return (
    <>
      <div className="offerSlider py-[2rem] px-4 bg-white">
        <div className="offer__slider__container lg:flex-row flex-col    container relative  gap-1 flex mx-auto max-w-[1400px]">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper max-h-[300px]   md:max-h-[375px] rounded-lg "
          >
            <SwiperSlide className="">
              <img
                className="max-w-full min-h-[350px]  "
                src="/offerslider/offer1.webp"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img className="max-w-full min-h-[350px]  " src="/offerslider/offer2.webp" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="max-w-full min-h-[350px]  " src="offerslider/offer3.webp" />
            </SwiperSlide>
         
          </Swiper>
          <div className="offer__images content-start relative flex-wrap lg:basis-[600px] gap-1 flex lg:flex-col  ">
            <img
              className=" grow-1 max-h-[200px] lg:w-auto w-[48%]"
              src="/offerslider/img1.avif"
              alt=""
            />
            <img
              className=" grow-1 max-h-[200px] min-w-[250px] lg:w-auto w-[48%]"
              src="/offerslider/img2.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
