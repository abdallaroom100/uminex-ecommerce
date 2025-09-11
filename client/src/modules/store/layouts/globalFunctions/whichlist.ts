import { changeMaskOverlayState } from "./OverLay";


export const changeWhichlistMenuState = (cartState: "open" | "close") => {
 
     const whichlistMenu = document.querySelector(".whichlist_menu_wrapper")

    whichlistMenu?.classList[`${cartState == "close" ? "remove" : "add"}`]("open");

    changeMaskOverlayState(cartState == "open"? "visible":"hide")
    
};
