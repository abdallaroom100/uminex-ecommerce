import { useParams } from "react-router-dom"
import Searchtitle from "./atoms/Searchtitle"
import ProductTemplate from "./template/ProductTemplate";


const index = () => {
    const {value} = useParams()

  return (
    <div className="serach__template bg-[#F1F5F6]">
       <div className="search__container mx-auto container max-w-[1400px]">
        <Searchtitle />
        <ProductTemplate />
       </div>
    </div>
  )
}

export default index