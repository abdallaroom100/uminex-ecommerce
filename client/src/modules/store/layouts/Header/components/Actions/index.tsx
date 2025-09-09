import Auth from "./Auth";
import Whishlist from "./Whishlist";
import Cart from "./Cart";

const index = () => {
  return (
    <div className="actions flex  w-[25%] justify-end items-center gap-5">
      <Auth />
      <span className="hidden lg:block">
        <Whishlist />
        </span>
      <Cart />
    </div>
  );
};

export default index;
