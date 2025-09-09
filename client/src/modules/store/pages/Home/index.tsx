import OfferSlider from "./components/offerSlider";
import Categoires from "./components/categories"
import HotDeal from "./components/hotDeals"
import Featured from "./components/featured"
import Banner from "../../../../ui/Banner";
import TopSelling from "./components/topSelling"
import Banners from "./components/banners"
import Recommended from "./components/Recommended"
import BlogSlider from "./components/blogSlider"
const Home = () => {

  return (
    <div className="bg-[#F1F5F6]">
      <OfferSlider />
      <Categoires />
      <HotDeal />
      <Featured />
      <Banner />
     <TopSelling />
     <Banners />
     <Recommended />
    <BlogSlider />
    </div>
  );
};

export default Home;














{/* <form onSubmit={handleSubmit}>
  <div className="nameField">
    <label htmlFor="name">name</label>
    <input type="text" onChange={(e)=>handleChange(e.target)} className="namefield" id="name" />
  </div>
  <div className="ageField">
    <label htmlFor="age">age</label>
    <input type="text" onChange={(e)=>handleChange(e.target)} className="age" id="age" />
  </div>
  <div className="imageField">
    <label htmlFor="image">image</label>
    <input type="file" className="image" id="profileImage" onChange={(e)=>handleChange(e.target)} />
  </div>

  <button type="submit">submit</button>
</form> */}