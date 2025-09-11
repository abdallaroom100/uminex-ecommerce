
import {changeWhichlistMenuState} from "../globalFunctions/whichlist";
import "./whichlist.css"
import { GrClose } from "react-icons/gr";
const index = () => {
  return (
    <div  className="whichlist_menu_wrapper w-full  h-screen md:w-[30%] max-w-[450px] fixed top-0 right-0  z-[100]">
        <div className="whichlist_menu_container w-full h-full bg-white">
            <div className="menu__head p-4 px-7 flex justify-between  items-center bg-[#F1F5F6]">
            <p className="menu__title font-bold text-[14px] uppercase">
                favourite cart
            </p>
          <GrClose className=" cursor-pointer" onClick={()=>changeWhichlistMenuState("close")} size={18}/>
            </div>
        </div>
    </div>
  )
}

export default index