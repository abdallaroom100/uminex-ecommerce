import "../categories/styles.css";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const index = () => {
  return (
    <div className="blogSlider__wrapper py-14">
     <div className="blogSlider__container contanier mx-auto max-w-[1400px]">
         <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
       
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(5)].map(()=>{
            return <SwiperSlide className="transparent ">
            <div className="slide__container ">
               <div className="silde__image ">
                <img  className="max-w-full min-h-[200px]  rounded-t-sm" src="/blog/img1.avif" alt="" />
            </div>  
            <div className="slide__content rounded-b-sm p-7 flex flex-col bg-white gap-3 text-start">
                <span className="slide__contegory font-[600] text-[12px] text-blue-600 uppercase">
                    Technology
                </span>
                <p className="slide__title text-md capitalize font-[600]">
                    the smartphone has just launched in sep 2023
                </p>
                <span className="postedBy text-[#999999] font-[600] text-[12px] uppercase">
             post by alo support
                </span>
                <div className="description text-[14px] mb-4 my-2">
                    Ipad Pro is the fastest device of its kind it's designed to take full advanatage
                </div>
             <hr className="w-full h-[1px] bg-[#eee] text-[#eee] "/>
             <div className="more__information flex justify-between font-[600] text-[12px]">
                <p>READ MORE</p>
                <p className="createdAt text-[#8d979e]">
                    MAR, 03 2023
                </p>
             </div>
            </div>
            </div>
           

        </SwiperSlide>
        })}
        
  
  
      </Swiper>
     </div>
    </div>
  )
}

export default index