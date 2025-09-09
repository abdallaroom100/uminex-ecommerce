import "./App.css";
import "./i18n.ts";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Store = lazy(() => import("./modules/store/index.tsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/store/*" element={<Store />}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

// import { useTranslation } from "react-i18next";

// const { t, i18n } = useTranslation();

// const changeLanguage = () => {
//   i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
//   localStorage.setItem("lang",i18n.language)
// };
// document.documentElement.dir = i18n.language !== "ar" ? "ltr":"rtl"
