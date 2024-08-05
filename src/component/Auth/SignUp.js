import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import config from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function SignUp({ setIsShowSignInBox }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const initialValues = {
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    companyName: "",
    companyAddress: "",
    phoneCompany: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("*Họ và tên là bắt buộc"),
    password: Yup.string().required("*Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string().required("*Mật khẩu xác nhận là bắt buộc"),
    email: Yup.string()
      .email("*Email không hợp lệ")
      .required("*Email là bắt buộc"),
    // companyName: Yup.string().required("*Tên công ty là bắt buộc."),
    companyAddress: Yup.string().required("*Tên công ty là bắt buộc."),
    phoneCompany: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
  });

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(config.host + "/member-register/", {
        username: values.userName,
        password: values.password,
        email: values.email,
        nameCompany: values.companyName,
        addressCompany: values.companyAddress,
        phoneCompany: values.phoneCompany,
      });

      if (res.data.status == true) {
        toast.success(
          "Đăng ký thành công. Bạn sẽ được chuyển đến trang đăng nhập trong giây lát.",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
              setIsLoading(false);
              navigate("/dang-nhap");
            },
          }
        );
      } else if (res.data.message == "exist Email ") {
        toast.error("Email đã được đăng ký. Vui lòng nhập email khác.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Đăng ký thất bại. Xin vui lòng thử lại.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("fetch data fail.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />

      {isLoading && (
        <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
          <div className="w-10 h-10 border-[5px] rounded-full border-primary border-t-transparent animate-spin "></div>
        </div>
      )}

      <section className="home-container bg-slate-100 w-full h-full flex justify-center md:px-[60px] px-5 pt-20 md:pt-5 pb-5 select-none">
        <div className=" max-w-[400px] md:max-w-[900px] w-full h-full bg-white rounded-md px-[30px] py-6">
          <h1 className="text-center text-2xl md:text-3xl mb-[30px]">
            Đăng ký
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="md:flex gap-5 justify-between">
                <div>
                  {/* username */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="userName">
                      Họ và tên:
                    </label>
                    <Field
                      name="userName"
                      type="text"
                      id="userName"
                      placeholder={`Nhập họ và tên...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="userName" />
                    </p>
                  </div>
                  {/* password */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="password">
                      Mật khẩu:
                    </label>
                    <div className="relative">
                      <Field
                        name="password"
                        type={isShowPassword ? "text" : "password"}
                        id="password"
                        placeholder={`Nhập mật khẩu...`}
                        className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
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
                  {/* confirm password */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="confirmPassword">
                      Xác nhận mật khẩu:
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      id="confirmPassword"
                      placeholder={`Xác nhận mật khẩu...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="confirmPassword" />
                    </p>
                  </div>
                  {/* email */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="email">
                      Email:
                    </label>
                    <Field
                      name="email"
                      type="email"
                      id="email"
                      placeholder={`Nhập email...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="email" />
                    </p>
                  </div>
                </div>
                <div>
                  {/* company name */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="companyName">
                      Tên công ty (nếu có):
                    </label>
                    <Field
                      name="companyName"
                      type="text"
                      id="companyName"
                      placeholder={`Nhập tên công ty...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="companyName" />
                    </p>
                  </div>
                  {/* company address */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="companyAddress">
                      Địa chỉ liên hệ:
                    </label>
                    <Field
                      name="companyAddress"
                      type="text"
                      id="companyAddress"
                      placeholder={`Nhập địa chỉ liên hệ...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="companyAddress" />
                    </p>
                  </div>

                  {/* phone company */}
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="phoneCompany">
                      Số điện thoại:
                    </label>
                    <Field
                      name="phoneCompany"
                      type="text"
                      id="phoneCompany"
                      placeholder={`Nhập số điện thoại liên hệ...`}
                      className="w-full px-4 py-3 pr-12 rounded bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="phoneCompany" />
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  className=" p-3 md:max-w-[400px] rounded w-full bg-primary mb-2 text-white text-base   uppercase hover:bg-[#4161cc] transition duration-300"
                >
                  Đăng ký
                </button>
              </div>
            </Form>
          </Formik>

          <p className="text-base flex flex-col md:flex-row gap-2 mt-16 justify-center items-center">
            <span>Hãy chung tay cùng chúng tôi.</span>
            <Link to={"/dang-nhap"} className="text-blue-500 underline">
              Đăng nhập
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default SignUp;
