const Category = ({
  img,
  title,
  productsNumber,
}: {
  img: string;
  title: string;
  productsNumber: number;
}) => {
  return (
    <div className="category_slide  flex cursor-pointer items-center justif-center flex-col">
      <div className="image__wrapper mt-2 group mb-2 bg-[#F1F5F6] h-[100px] rounded-full w-[100px] relative">
        <div className="effect absolute h-full w-full category__transition  border-6 border-white opacity-[0] group-hover:opacity-[1] outline-2 outline-[#3853ee] rounded-full scale-[0.8] group-hover:scale-[1]"></div>
        <img className="max-w-full max-h-full" src={img} alt="category 1" />
      </div>
      <p className="text-[14px] font-[500]">{title}</p>
      <p className="text-[12px] font-[300]">{productsNumber} products</p>
    </div>
  );
};

export default Category;
