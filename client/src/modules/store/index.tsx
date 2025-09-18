import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/layout";
import Search from "./pages/Search";
const index = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search/:value" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};

export default index;
