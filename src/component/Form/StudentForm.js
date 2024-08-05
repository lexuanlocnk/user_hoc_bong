import { Field, ErrorMessage } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function StudentForm({
  checkValue,
  studentEmailValue,
  setStudentEmailValue,
  setCheckReceiveCode,
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowCode, setIsShowCode] = useState(false);

  return (
    <>
      <h1 className="text-lg font-semibold mb-5">
        Thông tin sinh viên đăng ký
      </h1>

      {/* username */}
      {/* <div className="relative mb-8">
        <label className="ml-2" htmlFor="username">
          Tên đăng nhập:
        </label>
        <Field
          name="username"
          type="text"
          id="username"
          placeholder={`Nhập họ và tên người đăng kí...`}
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"

        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="username" />
        </p>
      </div> */}
      {/* ho va ten */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="fullName">
          Họ và tên sinh viên:
        </label>
        <Field
          name="fullName"
          type="text"
          id="fullName"
          placeholder={`Nhập họ và tên người đăng ký...`}
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="fullName" />
        </p>
      </div>

      {/* Password */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="password">
          Mật khẩu đăng nhập:
        </label>

        <div className="relative">
          <Field
            name="password"
            type={isShowPassword ? "text" : "password"}
            id="password"
            placeholder={`Nhập họ và tên người đăng ký...`}
            className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
          />
          {!isShowPassword ? (
            <AiOutlineEyeInvisible
              onClick={() => setIsShowPassword(true)}
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
            />
          ) : (
            <AiOutlineEye
              onClick={() => setIsShowPassword(false)}
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
            />
          )}
        </div>

        <p className="text-red-600 mt-1">
          <ErrorMessage name="password" />
        </p>
      </div>
      {/* Password Confirm*/}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="passwordConfirm">
          Xác nhận lại mật khẩu:
        </label>
        <Field
          name="passwordConfirm"
          type="password"
          id="passwordConfirm"
          placeholder={`Nhập họ và tên người đăng ký...`}
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
        />
        <p className="text-red-600 mt-1">
          <ErrorMessage name="passwordConfirm" />
        </p>
      </div>

      {/* dob */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="dob">
          Ngày tháng năm sinh:
        </label>

        <Field
          name="dob"
          type="date"
          id="dob"
          placeholder="Nhập ngày tháng năm sinh..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="dob" />
        </p>
      </div>

      {/* dia chi thuong tru*/}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="address">
          Địa chỉ thường trú:
        </label>

        <Field
          name="address"
          type="text"
          id="address"
          placeholder="Nhập địa chỉ thường trú..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="address" />
        </p>
      </div>

      {/* dia chi tam tru*/}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="temporaryAddress">
          Địa chỉ tạm trú:
        </label>

        <Field
          name="temporaryAddress"
          type="text"
          id="temporaryAddress"
          placeholder="Nhập địa chỉ tạm trú..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="temporaryAddress" />
        </p>
      </div>

      {/* so dien thoai */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="tel">
          Số điện thoại:
        </label>

        <Field
          name="tel"
          type="tel"
          id="tel"
          placeholder="Nhập số điện thoại..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="tel" />
        </p>
      </div>
      {/* so CCCD */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="idCard">
          Số CCCD/ CMDN:
        </label>

        <Field
          name="idCard"
          type="text"
          id="idCard"
          placeholder="Nhập số CCCD/ CMDN..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="idCard" />
        </p>
      </div>

      {/* truong */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="school">
          Tên trường đang học hiện tại:
        </label>

        <Field
          name="school"
          type="text"
          id="school"
          placeholder="Nhập tên trường đang theo học..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="school" />
        </p>
      </div>

      {/* nganh hoc */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="specialized">
          Chuyên nghành đang học:
        </label>

        <Field
          name="specialized"
          type="text"
          id="specialized"
          placeholder="Nhập chuyên nghành đang theo học..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="specialized" />
        </p>
      </div>

      {/* so năm hoc */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="numberYearOfStudy">
          Số năm học:
        </label>

        <Field
          name="numberYearOfStudy"
          type="number"
          id="numberYearOfStudy"
          placeholder="Nhập số năm học..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="numberYearOfStudy" />
        </p>
      </div>

      {/* email */}
      <div className="relative mb-8">
        {/* <div
          className={`relative mb-5 ${
            checkValue === 1 ? "md:max-w-[80%]" : "md:max-w-[70%]"
          }  w-full`}
        ></div> */}

        <label className="ml-2" htmlFor="email">
          Email:
        </label>

        <div className="relative">
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Nhập email..."
            className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
            value={studentEmailValue}
            onChange={(e) => setStudentEmailValue(e.target.value)}
          />
          <button
            onClick={() => setCheckReceiveCode((prev) => !prev)}
            className="mt-4 rounded-md lg:absolute lg:mt-0 lg:top-[1px] lg:right-[-1px] px-4 py-3 lg:max-w-44 bg-blue-400 text-white lg:rounded-tl-none lg:rounded-bl-none hover:brightness-90 transition duration-300"
          >
            Nhận mã xác nhận
          </button>
        </div>
        <p className="text-red-600 mt-1">
          <ErrorMessage name="email" />
        </p>
      </div>

      {/* ma giao dich */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="magd">
          Mã xác nhận:
        </label>
        <div className="relative">
          <Field
            name="magd"
            type={isShowCode ? "text" : "password"}
            id="magd"
            placeholder="Nhập mã xác nhận từ email đã đăng ký..."
            className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
          />

          {!isShowCode ? (
            <AiOutlineEyeInvisible
              onClick={() => setIsShowCode(true)}
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
            />
          ) : (
            <AiOutlineEye
              onClick={() => setIsShowCode(false)}
              size={20}
              className="absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
            />
          )}
        </div>

        <p className="text-red-600 mt-1">
          <ErrorMessage name="magd" />
        </p>
      </div>

      {/* ma gioi thieu */}
      <div className="relative mb-8">
        <label className="ml-2" htmlFor="magt">
          Mã giới thiệu:
        </label>
        <Field
          name="magt"
          type="text"
          id="magt"
          placeholder="Nhập số điện thoại người giới thiệu..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="magt" />
        </p>
      </div>
    </>
  );
}

export default StudentForm;
