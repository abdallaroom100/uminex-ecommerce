
const index = () => {
  return (
    <div className="banners__wrapper py-6 md:py-10 lg:py-15">
     <div className="banners__container px-2 container mx-auto max-w-[1400px] gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       
       <div className="grid__item rounded-sm overflow-hidden  cursor-pointer relative w-fit mx-auto">
                <img className="max-w-full hover:scale-[1.15] transition-all" src="/banners/banner1.webp"  alt="" />
         <div className="banner__content  pointer-events-none  absolute top-1/2 -translate-y-1/2 left-7">
          <div className="title text-white text-[22px] font-[500]">
            <p className=" ">Gamepad</p>
            <p><span className="text-yellow-200">Save 20% </span>Product</p>
            <span className="capitalize text-[14px]">
              free shipping 20km radius
            </span>
          </div>
         </div>
       </div>  
       <div className="grid__item rounded-sm overflow-hidden relative w-fit mx-auto">
                <img className="max-w-full hover:scale-[1.15] transition-all" src="/banners/banner2.webp"  alt="" />
         <div className="banner__content absolute top-1/2 -translate-y-1/2 left-7">
          <div className="title text-white text-[22px] font-[500]">
            <p className=" ">Camera</p>
            <p><span className="text-yellow-200">Quality 2k </span>Ultra</p>
            <span className="capitalize text-[14px]">
              Save 20% On Today's
            </span>
          </div>
         </div>
       </div>  
       <div className="grid__item rounded-sm overflow-hidden relative w-fit mx-auto">
                <img className="max-w-full hover:scale-[1.15] transition-all" src="/banners/banner3.webp"  alt="" />
         <div className="banner__content absolute top-1/2 -translate-y-1/2 left-7">
          <div className="title text-white text-[22px] font-[500]">
            <p className=" ">Save 20%</p>
            <p><span className="text-yellow-200">Tablet Pro</span> 2022</p>
            <span className="capitalize text-[14px]">
             Top Quality Products
            </span>
          </div>
         </div>
       </div>  
       
      
     
       
     </div>
    </div>
  )
}

export default index