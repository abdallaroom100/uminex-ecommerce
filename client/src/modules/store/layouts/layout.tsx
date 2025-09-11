import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartMenu from "./CartMenu";
import MaskOverlay from "./MaskOverlay";
import WhichlistMenu from "./whichlistMenu";
const layout = () => {
  return (
    <>
      <MaskOverlay />
      <CartMenu />
      <WhichlistMenu />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default layout;
