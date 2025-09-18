import { changeCartMenuState } from "./Cart"
import { changeWhichlistMenuState } from "./whichlist"


 export const CloseEveryMenu = ()=>{
    changeCartMenuState("close")
    changeWhichlistMenuState("close")
 }