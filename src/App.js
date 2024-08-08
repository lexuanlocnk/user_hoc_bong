import { useState } from "react";

import { Link, Navigate, Route, Routes } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { GiHamburgerMenu } from "react-icons/gi";

import AboutUs from "../src/pages/AboutUs";
import News from "../src/pages/News";
import ActionNews from "../src/pages/ActionNews";
import ScholarshipRegister from "../src/pages/ScholarshipRegister";
import Auth from "../src/pages/Auth";
import Error from "../src/pages/Error";
import ContributorInfo from "../src/pages/ContributorInfo";
import StudentInfo from "../src/pages/StudentInfo";

import ScrollUpButton from "./component/Common/ScrollUpButton";
import Sidebar from "./component/Common/Sidebar";
import Footer from "./component/Common/Footer";

import Logo from "../src/assets/logo_NguyenKim_ao.png";
import ScrollToTop from "./component/Common/ScrollTotop";
import NewDetail from "./pages/NewsDetail";
import ActionNewsDetail from "./pages/ActionNewsDetail";
import SignUp from "./component/Auth/SignUp";
// import PublicRoute from './routes/publicRoute';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <>
      <ScrollToTop />
      <ScrollUpButton />

      {/* START HEADER FOR MOBILE */}
      <header className="fixed top-0 left-0 bottom-0 right-0 z-10 w-full h-full max-h-14 flex items-center justify-between px-5 bg-primary lg:hidden">
        <Link>
          <div className="w-20 h-w-20">
            <LazyLoadImage
              src={Logo}
              alt="logo Nguyen Kim"
              effect="opacity"
              className="object-cover relative top-[3px]"
            />
          </div>
        </Link>
        <button onClick={() => setIsSidebarActive((prev) => !prev)}>
          <GiHamburgerMenu size={25} className="text-white" />
        </button>
      </header>
      {/* END HEADER FOR MOBILE */}

      {/* Sidebar when clicked */}
      <Sidebar
        isSidebarActive={isSidebarActive}
        onCloseSidebar={() => setIsSidebarActive(false)}
      />
      {/* Sidebar when clicked */}

      <Routes>
        <Route index element={<AboutUs />} />
        <Route path="tin-tuc" element={<News />} />
        <Route path="tin-tuc/:news" element={<NewDetail />} />
        <Route path="hoat-dong" element={<ActionNews />} />
        <Route path="hoat-dong/:news" element={<ActionNewsDetail />} />
        <Route path="dang-ky-hoc-bong" element={<ScholarshipRegister />} />
        <Route path="dang-nhap" element={<Auth />} />
        <Route path="/dang-ky-mtq" element={<SignUp />} />
        <Route path="thong-tin-sv" element={<StudentInfo />} />
        <Route path="thong-tin-mtq" element={<ContributorInfo />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
