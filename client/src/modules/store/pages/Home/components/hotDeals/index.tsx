import PrimarySlider from "../../../../../../shared/sliders/PrimarySlider";
import { primarySiderData } from "../../../../../../shared/data/primarySliderData";
import SecitonTitle from "../../../../../../ui/SecitonTitle";
const index = () => {
  return (
    <div className=" bg-[#F1F5F6] pt-11 pb-12">
      <div className="dear__offer__container container mx-auto w-full max-w-[1400px]">
        <SecitonTitle
          title="Hot Deals! Get our best prices"
          viewAllLink="a"
          timer={44}
        />
        <div className="deal__offer__slider flex-col md:flex-row px-1 flex gap-3 md:gap-1 max-w-[1400px]  mx-auto">
          <div className="deal__offer__image flex justify-center w-full md:w-[33%]  ">
            <img
              className="max-w-full h-full max-h-[400px]  "
              src="/deals/dealoffer.webp"
              alt=""
            />
          </div>
          <div className="carousal__wrapper md:w-[67%] ">
            <PrimarySlider
              data={primarySiderData}
              slidesPerView={1.4}
              xllScreen={4}
              xlScreen={4}
              lgScreen={3}
              mdScreen={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
