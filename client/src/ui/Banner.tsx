

const Banner = () => {
  return (
    <div className='banner__wrapper h-fit px-2' >

  <div className="banner__container  h-fit flex  relative container mx-auto max-w-[1400px]">


   <img  className='rounded-md object-cover object-center absolute h-full w-full top-0 left-0 z-[1]' src="/banner/img1.webp" alt="" />

    <div className="banner__content p-7 py-5 h-full flex flex-col  justify-center  text-white relative z-[2]">
        <p className='font-bold text-[14px] md:text-[16px]'>APPLY CARD TODAY AND <span className='text-yellow-500'>GET DISCOUNT</span></p>
      <span className='text-[12px] md:text-[14px] font-[500] text-[#c2bfbf]'>in rewards on your first day of purchase when you are approved for the card</span>
    </div>
  </div>
    </div>
  )
}

export default Banner