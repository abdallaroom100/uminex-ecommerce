import { BsCart3 } from "react-icons/bs";
import { changeCartMenuState } from "../../../../../../helper/globalFunctions/Cart";

const Cart = () => {
  return (
    <>
      <div onClick={()=>changeCartMenuState("open")} className="cart__icon relative p-1 cursor-pointer">
        <p className="cart__counter absolute top-0  h-[17px] w-[17px] text-center  right-[-20%] p-[3px] rounded-full text-white leading-[1] text-[11px] bg-red-500">
          0
        </p>
        <BsCart3 size={22} />
      </div>
      <div className="cart__price  flex-col justify-start hidden lg:flex">
        <p className="text-[10px]">Your Cart</p>
        <p className="text-[13px] font-[600] ">$1400</p>
      </div>
    </>
  );
};

export default Cart;
