   import ProductsListFacet from "../molecules/ProductsListFacet"
import ProductsFilterFacet from "../molecules/ProductFilterFacet"


 const attributesData  = [
  {
    tag:'storage',
    values:["256"] ,
    
  },
  {
    tag:'colors',
    values:["black","red","blue","yellow","green","indianred"] 
  },
 ]

const ProductTemplate = () => {


  return (
    <>
      {/* <CKeditor /> */}
      <div className="product__template w-full flex gap-8 ">
     <ProductsFilterFacet attributes={attributesData}/>
     <ProductsListFacet />

    </div>
    </>
  
  )
}

export default ProductTemplate