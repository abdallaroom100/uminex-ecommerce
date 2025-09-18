type ProductAttributesType = {
  tag: string;
  values: string[];
  color?: string;
}[];

const ProductFilterFacet = ({
  attributes,
}: {
  attributes: ProductAttributesType;
}) => {
  return (
    <div className="basis-[260px] shrink-0 px-6 py-5 bg-white flex flex-col gap-4">
      {attributes.map((attribute) => {
        return (
          <div className="attribute__container flex flex-col gap-2">
            <p className="font-bold text-xl ">{attribute.tag}</p>
            <ul className="values flex flex-col gap-3 ">
              {attribute.values.map((value) => {
                return (
                  <div className="flex gap-3">
                    <input type="checkbox" /> <li>{value}</li>
                  </div>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ProductFilterFacet;
