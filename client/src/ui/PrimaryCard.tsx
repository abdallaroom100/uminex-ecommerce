import { useEffect, useRef, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

type PrimarySlideData = {
  mainImage: string;
  secondImage: string;
  title: string;
  reviews: { stars: number; comment: string };
  price: number;
  quantity: number;
  discound: number;
  quantityLimit?: number;
};
const PrimaryCard = ({
  item,
  idx,
}: {
  item: PrimarySlideData;
  idx: number;
}) => {
  const hideRef = useRef<HTMLDivElement | null>(null);
  const [hideElementHeight, sethideElementHeight] = useState<number>(0);
  const [currentSlideHovered, setCurrentSlideHovred] = useState<number | null>(
    null
  );
  useEffect(() => {
    if (hideRef.current) {
      sethideElementHeight(hideRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <div
        onMouseEnter={() => setCurrentSlideHovred(idx)}
        onMouseLeave={() => setCurrentSlideHovred(null)}
        className=" overflow-hidden group bg-white p-5   pb-0 rounded-sm"
      >
        <div className="slide__container relative transition-all">
          {item.discound > 0 && (
            <div className="discount__sign absolute flex justify-center z-10 top-0 left-0 text-[14px] px-4 rounded-sm py-1 bg-red-500 text-white w-11">
              -{item.discound}%
            </div>
          )}

          <div className="slide__image group h-[186px] w-[186px] mx-auto relative z-[1]">
            <img
              className="max-w-full hover:opacity-0 opacity-[1] primary__transition z-[2] relative "
              src={item.mainImage}
              alt=""
            />
            <img
              className="max-w-full group-hover:scale-[1.1] primary__Image__effect scale-[1]  absolute top-0 z-0"
              src={item.secondImage}
              alt=""
            />
          </div>
          <div
            style={{
              transform:
                typeof window !== "undefined"
                  ? window.innerWidth > 769
                    ? idx == currentSlideHovered
                      ? `translateY(-${hideElementHeight + 15}px)`
                      : ""
                    : ""
                  : "",
            }}
            className={`slide__content z-[2] bg-white  relative  primary__transition pb-3 text-start flex flex-col `}
          >
            <p className="my-3 text-[14px] font-[600] text-start h-[45px]">
              {item.title}
            </p>
            <span>{item.reviews.stars} stars</span>
            <div className="price__bundle flex gap-1 items-end">
              <p
                className={`${
                  item.discound ? "text-red-500" : "text-blue-600"
                }  mr-1`}
              >
                ${item.price}.00
              </p>
              {item.discound > 0 && (
                <span className="text-[15px] text-[#8d979e]">
                  <del>
                    $
                    {Math.floor(
                      item.price - (item.price * item.discound) / 100
                    )}
                    .00
                  </del>
                </span>
              )}
            </div>

            {item.quantityLimit ? (
              <div>
                
                <div className="relative w-full h-2 rounded-2xl mt-2 progress bg-[#eeeeee]">
                  <span
                    style={{
                      width: `${(
                        (item.quantity / item.quantityLimit) *
                        100
                      ).toFixed(0)}%`,
                    }}
                    className={`absolute top-0 left-0 h-full progress   rounded-2xl bg-red-500`}
                  ></span>
                </div>
                <span className="text-start text-[14px]">
                  Sold {""}
                  <span className="font-[600] text-[13px]">
                    {item.quantity}/{item.quantityLimit} {""}
                  </span>
                  products
                </span>
              </div>
            ) : (
              <div className="stock__status flex items-center justify-start gap-1 ">
                <IoMdCheckmark
                  className={`${
                    item.quantity > 0 ? "text-green-500" : "text-red-500"
                  }`}
                  size={15}
                />
                <p
                  className={`text-[12px]  ${
                    item.quantity > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {" "}
                  {item.quantity > 0 ? "in stock" : "out of stock"}
                </p>
              </div>
            )}

            <div
              ref={hideRef}
              className={` top-[100%] group-hover:opacity-[100] flex justify-center py-2 md:opacity-0 primary__transition relative md:absolute left-1/2 -translate-x-1/2 text-nowrap`}
            >
              <button
                className={`px-13 py-2 primary__transition text-white text-[13px] outline-none cursor-pointer font-[600] ${
                  item.quantity > 0 ? "bg-blue-600" : "bg-red-600"
                }  rounded-full`}
              >
                {item.quantity > 0 ? "Add To Cart" : "Out Of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;

