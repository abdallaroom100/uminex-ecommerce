
import { TfiWallet } from "react-icons/tfi";
const index = () => {
  return (
    <div className="services__wrapper">
         <div className="servcies__container py-9  container mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4"> 
          {[...Array(4)].map(()=>{
            return <div className="grid__item flex flex-col gap-1 items-center justify-center">
            <TfiWallet className="text-blue-600" size={27}/>
            <p className="text-[13px] font-[600] mt-4 leading-[1]">
              SAVE PAYMENT
            </p>
            <span className="text-[14px]  font-[400] text-[#a8a8a8]">
                100% Secure Payment
            </span>
          </div>
          })}
         </div>
         <hr  className=" text-[#c9c5c5] w-full h-[1px]"/>
    </div>
  )
}

export default index