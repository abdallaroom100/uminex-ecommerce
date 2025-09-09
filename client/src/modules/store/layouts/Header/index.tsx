


import Logo from "./components/Logo";
import Search from "./components/Search";
import Actions from "./components/Actions";
import { IoMenuSharp } from "react-icons/io5";

const menuData = {
  shopLayout: [
    "Filter Left Sidebar",
    "Filter Right Sidebar",
    "Off Canvas Filter",
    "Grid 4 Columns",
    "Grid 5 Columns",
    "Grid 6 Columns",
    "List View",
  ],
  productLayout: [
    "Collection List",
    "Pagination Page",
    "Load More Button",
    "Infinite Scrolling",
    "Product - Left Thumbnails",
    "Product - Right Thumbnails",
    "Product - Bottom Thumbnails",
 "Product - 1 Column",
  ],
  productType: [
    "Product Default",
    "Product Variable",
    "Bought Together",
    "Product External",
    "Product Pre-Order",
    "Product 3D",
    "Product With Video",
    "Product - 2 Column",
  ],
};

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header relative border-b-1 border-[#dfd9d9] px-4">
        <div className="container py-5  mx-auto flex justify-between items-center h-[85px] max-w-[1400px]">
          <Logo />
         <span className="hidden lg:block grow-1"> <Search /></span>
          <Actions />
        </div>
      </div>
      <div className="translations px-4 border-b-1 border-[#dfd9d9] hidden lg:block">
        <div className="translations__container relative flex container mx-auto max-w-[1400px]">
          <div className="categories__menu py-3 cursor-pointer relative w-[250px]">
            <p className="text-[14px] flex gap-2 items-center">
              <span>
                <IoMenuSharp size={24} />
              </span>
              Browser all Categories
            </p>
          </div>
          <div className="links__wrapper grow-1 ">
            <ul className="links__container text-[12px] h-full xl:text-sm font-[600] flex items-center pl-8 gap-2 xl:gap-4 ">
              <li className="py-3 relative group z-[2] px-3">
                Home
                <div className="py-4 drop__down__menu pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 -left-[10%] translate-y-4 group-hover:translate-y-0 absolute w-[180px] opacity-0 bg-[#eeeaea] top-[100%]">
                  {menuData.shopLayout.map((item, index) => (
                    <p
                      key={index}
                      className="p-1 transition-all hover:translate-x-3 relative text__dropdown ml-4 hover:text-[#2b38d1]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </li>
              <li className="py-3 static group z-[2] px-3">
                Shop
                <div className="py-6 pb-9 left-1/2 -translate-x-1/2 px-8 rounded-md drop__down__menu pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 absolute w-[1000px] mx-auto opacity-0 bg-[#eeeaea] top-[100%]">
                  <div className="columns__wrapper flex leading-[29px] text-[14px]">
                    {Object.entries(menuData).map(([key, values], columnIndex) => (
                      <div key={columnIndex} className="column w-[242px]">
                        <p className="font-bold mb-3">{key.replace(/([A-Z])/g, " $1")}</p>
                        {values.map((value, index) => (
                          <li  className="transition-all hover:translate-x-3  hover:text-[#2b38d1] cursor-pointer" key={index}>{value}</li>
                        ))}
                      </div>
                    ))}
                    <div className="image__side relative w-auto">
                    <button className="absolute bottom-[2rem] text-nowrap left-1/2 -translate-x-1/2 bg-white text-black text-[14px]  rounded-full px-8 mx-auto  py-1">Laptop & Ipad</button>
                    <img className="w-[212px] h-[264px] object-cover"   src="/store/shop.webp" alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 static group z-[2] px-3">
                Products
                <div className="py-6 pb-9 left-1/2 -translate-x-1/2 px-8 rounded-md drop__down__menu pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 absolute w-[1000px] mx-auto opacity-0 bg-[#eeeaea] top-[100%]">
                  <div className="columns__wrapper flex leading-[29px] text-[14px]">
                    {Object.entries(menuData).map(([key, values], columnIndex) => (
                      <div key={columnIndex} className="column w-[242px]">
                        <p className="font-bold mb-3">{key.replace(/([A-Z])/g, " $1")}</p>
                        {values.map((value, index) => (
                          <li className="transition-all hover:translate-x-3  hover:text-[#2b38d1] cursor-pointer" key={index}>{value}</li>
                        ))}
                      </div>
                    ))}
                    <div className="image__side relative w-auto">
                    <button className="absolute bottom-[2rem] text-nowrap left-1/2 -translate-x-1/2 bg-white text-black text-[14px]  rounded-full px-8 mx-auto  py-1">Laptop & Ipad</button>
                    <img className="w-[212px] h-[264px] object-cover"   src="/store/shop.webp" alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-3 relative group z-[2] px-3">
                pages
                <div className="py-4 drop__down__menu pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 -left-[10%] translate-y-4 group-hover:translate-y-0 absolute w-[180px] opacity-0 bg-[#eeeaea] top-[100%]">
                  {menuData.shopLayout.map((item, index) => (
                    <p
                      key={index}
                      className="p-1 transition-all hover:translate-x-3 relative text__dropdown ml-4 hover:text-[#2b38d1]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </li>
              <li className="py-3 relative group z-[2] px-3">
                blog
                <div className="py-4 drop__down__menu pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 -left-[10%] translate-y-4 group-hover:translate-y-0 absolute w-[180px] opacity-0 bg-[#eeeaea] top-[100%]">
                  {menuData.shopLayout.map((item, index) => (
                    <p
                      key={index}
                      className="p-1 transition-all hover:translate-x-3 relative text__dropdown ml-4 hover:text-[#2b38d1]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </li>
              <li>
                contact us
              </li>
               <li className="ml-2">
                Buy Uminex
               </li>
            </ul>
          </div>
          <div className="offer__wrapper flex items-center justify-center gap-2">
            <img src="/store/offer.svg" alt="" />
            <p className="xl:text-lg text-sm">Sale $20 Off Your First Order.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;