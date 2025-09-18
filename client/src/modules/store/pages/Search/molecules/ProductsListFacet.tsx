import { useState } from "react";
import { featuredSliderData } from "../../../../../shared/data/featuredSliderData";
import PrimaryCard from "../../../../../ui/PrimaryCard";

const ProductsListFacet = () => {
   const [rowsNumber, setrowsNumber] = useState<Number>(5);
  return (
    <div className="product__list__facet grow-1 flex flex-col">
      <div className="product__list__controller flex mb-3 rounded-sm justify-between p-5 bg-white">
        <p className="products__results">Showing 1 - 15 of 52 results</p>
        <div className="columns__number__control flex gap-2">
         <div className="two__rows__icon" onClick={()=>setrowsNumber(2)}>2</div>
         <div className="three__rows__icon">3</div>
         <div className="four__rows__icon">4</div>
         <div className="five__rows__icon">5</div>
         <div className="one__rows__icon">1</div>
        </div>
      </div>
      <div style={{gridTemplateColumns:`repeat(${rowsNumber},minmax(0,1fr)`}} className="products__cards grid grid-cols-4 gap-2 transition-all">
     {featuredSliderData.map((item,idx)=>{
      return <PrimaryCard item={item} idx={idx}/>
    
     })}
      </div>
    </div>
  );
};

export default ProductsListFacet;
