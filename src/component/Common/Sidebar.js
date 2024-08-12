// import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../../assets/logo_NguyenKim_ao.png";

import { Dropdown } from "antd";
import { useState } from "react";

function Sidebar({ isSidebarActive, onCloseSidebar }) {
  const memberLogin = localStorage.getItem("membervtnk");
  const studentLogin = localStorage.getItem("studentvtnk");
  const memberUserName = localStorage.getItem("memberName");
  const studentUsername = localStorage.getItem("studentName");

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLogoutOpen, setDropdownLogoutOpen] = useState(false);

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
        className={`fixed z-30 h-screen top-0 pt-6 pl-6 sm:pt-8 sm:pl-8 md:pt-10 md:pl-10 w-[70vw] shrink-0 shadow-md bg-primary -translate-x-full transition duration-300  lg:sticky lg:flex lg:justify-center lg:w-full lg:max-h-16 lg:p-0 lg:top-0 lg:translate-x-0 lg:shadow-none lg:px-3 ${
          isSidebarActive && "translate-x-0"
        }`}
      >
        <button
          onClick={onCloseSidebar}
          className="absolute top-[1%] right-[2%] text-white lg:hidden"
        >
          <MdOutlineClose size={40} />
        </button>

        <div
          className={`flex flex-col lg:flex-row justify-center lg:items-center lg:justify-between lg:w-full text-lg bg-primary font-medium  px-2 sm:px-5`}
        >
          <Link to={"/"}>
            <div className="w-24 h-10 relative  hidden lg:inline-block">
              <LazyLoadImage
                src={Logo}
                alt="logo Nguyen Kim"
                effect="opacity"
                className="object-cover w-full h-full"
              />
            </div>
          </Link>

          <ul className="flex flex-col gap-4 lg:flex-row lg:gap-5 lg:items-center">
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

            {/* Dropdown cho học bổng và người giới thiệu */}
            {!memberLogin && !studentLogin && (
              <li className="relative group  hidden lg:block xl:hidden">
                <div
                  className="flex gap-6 items-center cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <p className="flex gap-1 hover:text-white transition duration-300">
                    Đăng ký
                    <span className="text-sm text-gray-400">▼</span>
                  </p>
                </div>
                <ul
                  className={`absolute w-[300px] bg-white text-black shadow-lg rounded-lg mt-2 transition-opacity duration-300 ${
                    dropdownOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="absolute top-[-10px] left-0 w-full h-[20px] bg-transparent "></div>
                  <li>
                    <Link
                      to="/dang-ky-hoc-bong"
                      className="block px-4 py-2 hover:bg-yellow-200 rounded-lg"
                    >
                      Đăng ký học bổng
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dang-ky-mtq"
                      className="block px-4 py-2 hover:bg-yellow-200 rounded-lg"
                    >
                      Đăng ký góp quỹ/ người giới thiệu
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            {!memberLogin && !studentLogin && (
              <Link
                to="/dang-ky-hoc-bong"
                className={`flex gap-6 items-center  font-medium lg:p-2 rounded lg:hidden xl:block lg:text-white lg:bg-blue-400 lg:relative  hover:text-white lg:hover:text-red-600 transition duration-300 `}
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
                className={`flex gap-6 items-center  font-medium lg:p-2 rounded lg:hidden xl:block lg:text-white lg:bg-blue-400 lg:relative  hover:text-white lg:hover:text-red-600 transition duration-300 `}
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
                    Thông tin góp quỹ
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
                    Thông tin học bổng
                  </p>
                </Link>
              </li>
            )}
          </ul>

          <div className="flex flex-col gap-4 w-100 lg:mr-0 lg:items-center lg:gap-3 mt-4 lg:mt-0">
            {memberLogin && (
              <div
                className={`border-none shadow-none uppercase text-white lg:hidden ${
                  location.pathname === "/auth" &&
                  "border-b-4 border-white text-white font-medium"
                }`}
              >
                {memberUserName}
              </div>
            )}

            {memberLogin && (
              <div className="relative group hidden lg:block ">
                <div
                  className="flex gap-6 items-center cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <p className="flex gap-1 hover:text-white transition duration-300">
                    {memberUserName}
                    <span className="text-sm text-gray-400">▼</span>
                  </p>
                </div>
                <ul
                  className={`absolute max-w-md bg-white text-black shadow-lg rounded-lg mt-2 transition-opacity duration-300 ${
                    dropdownOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="absolute top-[-10px] left-0 w-full h-[20px] bg-transparent "></div>
                  <li
                    onClick={handleLogout}
                    className="block px-3 py-2 hover:bg-yellow-200 text-base rounded-lg whitespace-nowrap"
                  >
                    <p className="cursor-pointer">Đăng xuất</p>
                  </li>
                </ul>
              </div>
            )}

            {studentLogin && (
              <div
                className={`border-none shadow-none uppercase text-white lg:hidden ${
                  location.pathname === "/auth" &&
                  "border-b-4 border-white text-white font-medium"
                }`}
              >
                {studentUsername}
              </div>
            )}

            {studentLogin && (
              <div className="relative group hidden lg:block ">
                <div
                  className="flex gap-6 items-center cursor-pointer"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <p className="flex gap-1 hover:text-white transition duration-300">
                    {studentUsername}
                    <span className="text-sm text-gray-400">▼</span>
                  </p>
                </div>
                <ul
                  className={`absolute w-max max-w-md bg-white text-black shadow-lg rounded-lg mt-2 transition-opacity duration-300 ${
                    dropdownOpen
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="absolute top-[-10px] left-0 w-full h-[20px] bg-transparent "></div>
                  <li
                    onClick={handleLogout}
                    className="block px-3 py-2 hover:bg-yellow-200 text-base rounded-lg whitespace-nowrap"
                  >
                    <p className="cursor-pointer">Đăng xuất</p>
                  </li>
                </ul>
              </div>
            )}

            {(memberLogin || studentLogin) && (
              <div
                onClick={handleLogout}
                className={`flex gap-6 justify-start hover:text-white lg:hidden transition duration-300 cursor-pointer`}
              >
                <p className="">Đăng xuất</p>
              </div>
            )}

            {!memberLogin && !studentLogin && (
              <Link
                to="/dang-nhap"
                className={`flex gap-6 justify-start hover:text-white transition duration-300 `}
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
