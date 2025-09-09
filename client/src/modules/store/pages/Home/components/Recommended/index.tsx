import PrimarySlider from "../../../../../../shared/sliders/PrimarySlider"
import SectionTitle from "../../../../../../ui/SecitonTitle"
 import { recommendedSliderData } from "../../../../../../shared/data/recommendedData"
const index = () => {
  return (
    <div className="recommended__wrapper">
        <div className="recommended__container container mx-auto max-w-[1400px]">
            <SectionTitle title="Recommended For You" viewAllLink="View All Product"/>
            <PrimarySlider data={recommendedSliderData} slidesPerView={1.4} xllScreen={6} xlScreen={5} lgScreen={5} mdScreen={2}/>
        </div>
    </div>
  )
}

export default index