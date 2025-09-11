import { changeMaskOverlayState } from "./OverLay";


export const changeCartMenuState = (cartState: "open" | "close") => {
 
     const cartMenu = document.querySelector(".cart_menu_wrapper")

    cartMenu?.classList[`${cartState == "close" ? "remove" : "add"}`]("open");

    changeMaskOverlayState(cartState == "open"? "visible":"hide")
    
};
