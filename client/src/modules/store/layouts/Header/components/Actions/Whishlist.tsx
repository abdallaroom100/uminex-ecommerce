import { FaRegHeart } from "react-icons/fa";

const Whishlist = () => {
  return (
    <div className="whichlist__icon relative p-1 cursor-pointer">
      <p className="whichlist__counter absolute top-0  h-[17px] w-[17px] text-center  right-[-20%] p-[3px] rounded-full text-white leading-[1] text-[11px] bg-red-500">
        0
      </p>
      <FaRegHeart size={22} />
    </div>
  );
};

export default Whishlist;
