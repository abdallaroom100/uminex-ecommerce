import "../../modules/store/pages/Home/components/categories/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import { featuredSliderData } from "../data/featuredSliderData";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
import { IoMdCheckmark } from "react-icons/io";
const SecondarySlider = () => {
  return (
    <>
      <Swiper
        
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          1200: {
            grid: {
              rows: 2,
              fill: "row",
            },
            slidesPerView: 3,
          },
          769: {
            grid: {
              rows: 2,
              fill: "row",
            },
            slidesPerView: 2,
          },
          450: {
            grid: {
              rows: 2,
              fill: "row",
            },
            slidesPerView: 1,
          },
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper !h-auto " // 👈 خليها auto
      >
        {featuredSliderData.map((item) => {
          return (
            <SwiperSlide className="flex flex-col p-[20px] bg-white">
              <div className="slide__container relative flex gap-3 md:gap-6">
                {item.discound > 0 && (
                  <div className="discount__sign absolute flex justify-center z-10 top-0 left-0 text-[14px] px-4 rounded-sm py-1 bg-red-500 text-white w-11">
                    -{item.discound}%
                  </div>
                )}

                <div style={{width:"width: min(90%, 180px)"}} className="slide__image shrink-0 group w-[150px] h-[150px] md:w-[180px] mx-auto relative z-[1]">
                  <img
                    className="max-w-full hover:opacity-0 opacity-[1] primary__transition z-[2] relative "
                    src={item.mainImage}
                    alt=""
                  />
                  <img
                    className="max-w-full group-hover:scale-[1.1] primary__Image__effect scale-[1]  absolute top-0 z-0"
                    src={item.secondImage}
                    alt=""
                  />
                </div>
                <div
                  className={`slide__content z-[2] bg-white  relative  primary__transition pb-3 text-start flex flex-col `}
                >
                  <p className="my-3 text-[14px] font-[600] text-start h-[45px]">
                    {item.title}
                  </p>
                  <span>{item.reviews.stars} stars</span>
                  <div className="price__bundle flex gap-1 items-end">
                    <p
                      className={`${
                        item.discound ? "text-red-500" : "text-blue-600"
                      }  mr-1`}
                    >
                      ${item.price}.00
                    </p>
                    {item.discound > 0 && (
                      <span className="text-[15px] text-[#8d979e]">
                        <del>
                          $
                          {Math.floor(
                            item.price - (item.price * item.discound) / 100
                          )}
                          .00
                        </del>
                      </span>
                    )}
                  </div>

            
                    <div className="stock__status flex items-center justify-start gap-1 ">
                      <IoMdCheckmark
                        className={`${
                          item.quantity > 0 ? "text-green-500" : "text-red-500"
                        }`}
                        size={15}
                      />
                      <p
                        className={`text-[12px]  ${
                          item.quantity > 0 ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {" "}
                        {item.quantity > 0 ? "in stock" : "out of stock"}
                      </p>
                    </div>
             

                  <div
                    className={` top-[100%] group-hover:opacity-[100] flex justify-center py-2 md:opacity-0 primary__transition relative md:absolute left-1/2 -translate-x-1/2 text-nowrap`}
                  >
                    <button
                      className={`px-13 py-2 primary__transition text-white text-[13px] outline-none cursor-pointer font-[600] ${
                        item.quantity > 0 ? "bg-blue-600" : "bg-red-600"
                      }  rounded-full`}
                    >
                      {item.quantity > 0 ? "Add To Cart" : "Out Of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SecondarySlider;
