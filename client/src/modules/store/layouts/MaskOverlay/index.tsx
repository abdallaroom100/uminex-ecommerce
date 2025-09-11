import { CloseEveryMenu } from "../globalFunctions/CloseAll"
import "./overlay.css"
const index = () => {
  return (
       <div onClick={CloseEveryMenu} className="mask_overlay transition-all fixed h-screen w-full z-[99] bg-black "></div>
  )
}




export default index