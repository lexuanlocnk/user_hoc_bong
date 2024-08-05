// import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../../assets/logo_NguyenKim_ao.png";

import { Dropdown } from "antd";

function Sidebar({ isSidebarActive, onCloseSidebar }) {
  const memberLogin = localStorage.getItem("membervtnk");
  const studentLogin = localStorage.getItem("studentvtnk");
  const memberUserName = localStorage.getItem("memberName");
  const studentUsername = localStorage.getItem("studentName");

  let location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/dang-nhap");
  };

  const items = [
    {
      key: "1",
      label: (
        <button onClick={handleLogout} className="font-base ">
          Đăng xuất
        </button>
      ),
    },
  ];

  return (
    <>
      <nav
        className={`fixed  z-30 h-screen top-0 pt-8 pl-8 w-[70vw] shrink-0 shadow-md bg-primary -translate-x-full transition duration-300  lg:sticky lg:flex lg:justify-center lg:w-full lg:max-h-[80px] lg:p-0 lg:top-0 lg:translate-x-0 lg:shadow-none ${
          isSidebarActive && "translate-x-0"
        }`}
      >
        <div
          className={` flex flex-col items-center lg:flex-row justify-center lg:items-center lg:justify-between lg:w-full text-[18px] bg-primary font-medium uppercase px-5`}
        >
          <Link to={"/"}>
            <div className="w-[120px] h-[50px] relative top-[12%] hidden lg:inline-block">
              <LazyLoadImage
                src={Logo}
                alt="logo Nguyen Kim"
                effect="opacity"
                className="object-cover w-full h-full"
              />
            </div>
          </Link>

          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-5 lg:items-center">
            <button
              onClick={onCloseSidebar}
              className="absolute top-[3%] right-[3%] text-white lg:hidden"
            >
              <MdOutlineClose size={40} />
            </button>
            <li>
              <Link
                to="/"
                className={`flex gap-6 items-center hover:text-white transition duration-300 `}
              >
                <p
                  className={`${
                    location.pathname === "/" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  {" "}
                  Về chúng tôi
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/tin-tuc"
                className={`flex gap-6 items-center hover:text-white transition duration-300 z-30`}
              >
                <p
                  className={`${
                    location.pathname === "/tin-tuc" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  Tin tức
                </p>
              </Link>
            </li>

            <li>
              <Link
                to="/hoat-dong"
                className={`flex gap-6 items-center hover:text-white transition duration-300 z-30`}
              >
                <p
                  className={`${
                    location.pathname === "/hoat-dong" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  Hoạt động
                </p>
              </Link>
            </li>

            {!memberLogin && !studentLogin && (
              <Link
                to="/dang-ky-hoc-bong"
                className={`flex gap-6 items-center  font-medium lg:p-2 rounded lg:text-white lg:bg-blue-400 lg:relative  hover:text-white lg:hover:text-red-600  transition duration-300 `}
              >
                <p
                  className={`${
                    location.pathname === "/dang-ky-hoc-bong" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  Đăng ký học bổng
                </p>
              </Link>
            )}

            {!memberLogin && !studentLogin && (
              <Link
                to="/dang-ky-mtq"
                className={`flex gap-6 items-center  font-medium lg:p-2 rounded lg:text-white lg:bg-blue-400 lg:relative  hover:text-white lg:hover:text-red-600  transition duration-300 `}
              >
                <p
                  className={`${
                    location.pathname === "/dang-ky-mtq" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  Đăng ký góp quỹ/ người giới thiệu
                </p>
              </Link>
            )}

            {memberLogin && (
              <li>
                <Link
                  to="/thong-tin-mtq"
                  className={`flex gap-6 items-center hover:text-white transition duration-300 z-30`}
                >
                  <p
                    className={`${
                      location.pathname === "/thong-tin-mtq" &&
                      "border-b-4 border-white text-white font-medium"
                    }`}
                  >
                    thông tin góp
                  </p>
                </Link>
              </li>
            )}

            {studentLogin && (
              <li>
                <Link
                  to="/thong-tin-sv"
                  className={`flex gap-6 items-center hover:text-white transition duration-300 z-30`}
                >
                  <p
                    className={`${
                      location.pathname === "/thong-tin-sv" &&
                      "border-b-4 border-white text-white font-medium"
                    }`}
                  >
                    thông tin vay
                  </p>
                </Link>
              </li>
            )}
          </ul>

          <div className="flex w-100 lg:mr-0 lg:items-center lg:gap-3 mt-4 lg:mt-0">
            {memberLogin && (
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <div
                  className={`border-none shadow-none uppercase text-white ${
                    location.pathname === "/auth" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  {memberUserName}
                </div>
              </Dropdown>
            )}

            {studentLogin && (
              <Dropdown menu={{ items }} placement="bottomLeft" arrow>
                <div
                  className={`border-none shadow-none uppercase text-white ${
                    location.pathname === "/auth" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  {studentUsername}
                </div>
              </Dropdown>
            )}

            {!memberLogin && !studentLogin && (
              <Link
                to="/dang-nhap"
                className={`flex gap-6 justify-start md:justify-end hover:text-white transition duration-300 `}
              >
                <p
                  className={`${
                    location.pathname === "/dang-nhap" &&
                    "border-b-4 border-white text-white font-medium"
                  }`}
                >
                  Đăng nhập
                </p>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Overflow */}
      <div
        onClick={onCloseSidebar}
        className={`fixed z-20 top-0 left-0 w-full h-full bg-black/60 transition duration-300 lg:opacity-0 ${
          isSidebarActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
}

export default Sidebar;
