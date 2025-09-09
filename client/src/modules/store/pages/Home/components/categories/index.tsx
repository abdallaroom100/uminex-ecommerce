import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Category from "./Category";
import { categoiresData } from "./data";

const index = () => {
  return (
    <div className="categoires__wrapper py-5 pb-14 bg-white">
      <div className="categoires__container container mx-auto max-w-[1400px] ">
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
           breakpoints={{
    320: {     
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {      
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {      
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {     
      slidesPerView: 6,
      spaceBetween: 25,
    },
    1280: {    
      slidesPerView: 8,
      spaceBetween: 30,
    },
  }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {categoiresData.map((item) => {
            return (
              <SwiperSlide>
                <Category
                  img={item.img}
                  title={item.title}
                  productsNumber={item.productsNumber}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default index;
