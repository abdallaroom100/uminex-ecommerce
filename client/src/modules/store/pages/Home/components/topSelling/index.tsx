import SecondarySlider from "../../../../../../shared/sliders/SecondarySlider"
import SectionTitle from "../../../../../../ui/SecitonTitle"


const index = () => {
  return (
    <div className="topSelling__wrapper">
    <div className="topSelling__container container mx-auto max-w-[1400px]">
    <SectionTitle title="top selling products" viewAllLink="View All Products"/>
    <SecondarySlider />
    </div>
    </div>
  )
}

export default index