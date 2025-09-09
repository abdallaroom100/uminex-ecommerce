import PrimarySlider from "../../../../../../shared/sliders/PrimarySlider"
import SectionTitle from "../../../../../../ui/SecitonTitle"
import { featuredSliderData } from "../../../../../../shared/data/featuredSliderData"
const index = () => {
  return (
    <div className="featured__wrapper py-5">
      <div className="featured__container  container mx-auto max-w-[1400px]">
        <SectionTitle
          title="Featured products"
          viewAllLink="View All Products"
        />
        <div className="slider__container ">

        <PrimarySlider slidesPerView={1.5} data={featuredSliderData} xllScreen={6} xlScreen={5} lgScreen={5} mdScreen={2}/>
        </div>
      </div>
        
    </div>
  )
}

export default index