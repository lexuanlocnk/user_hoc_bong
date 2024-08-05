import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IoEyeSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import BlackBackdrop from "../Common/BlackBackdrop";
import Background from "../../assets/auth-background.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import "../../css/signIn.css";

import { Radio } from "antd";
import StudentLoginForm from "./StudentLoginForm";
import MemberLoginForm from "./MemberLoginForm";
import { ToastContainer, toast } from "react-toastify";

import { Modal } from "antd";
import PasswordTokenForm from "../ForgetPassword/PasswordTokenForm";

function SignIn({ setIsShowSignInBox }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  // const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [studentEmail, setStudentEmail] = useState();
  const [memberEmail, setMemberEmail] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowSetNewPassForm, setIsShowNewPassForm] = useState(false);

  const [value, setValue] = useState(1);
  const [forgetPasswordValues, setForgetPasswordValues] = useState(1);
  const [formLoading, setFormLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBannerData();
  }, []);

  const [bannerData, setBannerData] = useState([]);

  const fetchBannerData = async () => {
    try {
      const res = await axios.get(config.host + `/banner`);
      if (res.data.status === true) {
        setBannerData(
          res.data.list
            .filter((item) => item.name == "image-login" && item.status === 1)
            .map((item) => item.picture)
            .join("")
        );
      }
    } catch (error) {
      console.error("Lỗi không thể fetch banner data.", error);
    }
  };

  const handleSubmit = async (values) => {
    if (value === 1) {
      try {
        const res = await axios.post(config.host + "/member-login", {
          email: values.memberName,
          password: values.memberPassword,
        });

        console.log(res);

        if (res.data.status === true) {
          localStorage.setItem("membervtnk", res.data.token);
          localStorage.setItem("memberName", res.data.admin.username);
          navigate("/");
        }
      } catch (error) {
        console.error("login error", error);
        toast.error(
          `Tên tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    } else {
      try {
        const res = await axios.post(config.host + "/student-login", {
          emailMember: values.studentName,
          password: values.studentPassword,
        });
        if (res.data.status == true) {
          localStorage.setItem("studentvtnk", res.data.token);
          localStorage.setItem("studentName", res.data.name);
          navigate("/");
        }
      } catch (error) {
        console.error("login error", error);
        toast.error(
          `Tên tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.`,
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
  };

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const memberValidation = {
    memberName: Yup.string().required("*Tên đăng nhập là bắt buộc"),
    memberPassword: Yup.string().required("*Mật khẩu là bắt buộc"),
  };
  const studentValidation = {
    studentName: Yup.string().required("*Tên đăng nhập là bắt buộc"),
    studentPassword: Yup.string().required("*Mật khẩu là bắt buộc"),
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleGetStudentPassToken = async (e) => {
    e.preventDefault();
    console.log("studentEmail:", studentEmail);
    try {
      setFormLoading(true);
      const res = await axios.post(
        "http://adminhocbong.vitinhnguyenkim.vn/api/student-forgetPassword",
        { email: studentEmail }
      );
      if (res.data.status === true) {
        setStudentEmail("");
        setIsModalOpen(false);
        setIsShowNewPassForm(true);
        setFormLoading(false);
      } else if (res.data.status === "warning") {
        toast.warning(`${res.data.mess}. Vui lòng thử lại.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormLoading(false);
      }
    } catch (error) {
      console.error("fail to fetch data.");
    }
  };

  const handleGetMemberPassToken = async (e) => {
    e.preventDefault();
    console.log("memberEmail:", memberEmail);
    try {
      setFormLoading(true);
      const res = await axios.post(
        "http://adminhocbong.vitinhnguyenkim.vn/api/member-forgetPassword",
        { email: memberEmail }
      );
      if (res.data.status === true) {
        setMemberEmail("");
        setIsModalOpen(false);
        setIsShowNewPassForm(true);
        setFormLoading(false);
      } else if (res.data.status === "warning") {
        toast.error(`${res.data.mess}. Vui lòng thử lại.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormLoading(false);
      }
    } catch (error) {
      console.error("fail to fetch data.");
    }
  };

  const handleSubmitNewPassForm = async (values) => {
    console.log(">>>> check values new pass form: ", values);
    if (forgetPasswordValues === 1) {
      try {
        const res = await axios.post(
          "http://adminhocbong.vitinhnguyenkim.vn/api/member-forgetPasswordChange",
          {
            password_token: values.memberPasswordToken,
            password_new: values.memberNewPassword,
          }
        );
        if (res.data.status === true) {
          toast.success(`Mật khẩu mới đã được cập nhật. Bạn có thể đăng nhập`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.warning(`Cập nhật mật khẩu thất bại. Vui lòng thử lại.`, {
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
        console.error("fail to fetch data.");
        toast.error(`Mật khẩu token không tồn tại. Vui lòng thử lại.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      try {
        const res = await axios.post(
          "http://adminhocbong.vitinhnguyenkim.vn/api/student-forgetPasswordChange",
          {
            password_token: values.studentPasswordToken,
            password_new: values.studentNewPassword,
          }
        );
        if (res.data.status === true) {
          toast.success(`Mật khẩu mới đã được cập nhật. Bạn có thể đăng nhập`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.warning(`Cập nhật mật khẩu thất bại. Vui lòng thử lại.`, {
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
        console.error("fail to fetch data.");
        toast.error(`Mật khẩu token không tồn tại. Vui lòng thử lại.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />

      {
        <Modal
          title="Tạo lại mật khẩu mới"
          open={isShowSetNewPassForm}
          footer={null}
          onCancel={() => setIsShowNewPassForm(false)}
        >
          <Formik
            key={forgetPasswordValues}
            initialValues={{
              studentPasswordToken: "",
              studentNewPassword: "",
              memberPasswordToken: "",
              memberNewPassword: "",
            }}
            validationSchema={Yup.object(
              forgetPasswordValues === 1
                ? {
                    memberPasswordToken: Yup.string().required(
                      "Mật khẩu token là bắt buộc."
                    ),
                    memberNewPassword: Yup.string().required(
                      "Mật khẩu mới là bắt buộc."
                    ),
                  }
                : {
                    studentPasswordToken: Yup.string().required(
                      "Mật khẩu token là bắt buộc."
                    ),
                    studentNewPassword: Yup.string().required(
                      "Mật khẩu mới là bắt buộc."
                    ),
                  }
            )}
            onSubmit={handleSubmitNewPassForm}
          >
            <Form>
              {forgetPasswordValues === 1 ? (
                <>
                  <div className="relative mb-8">
                    <label className="ml-2 text-base" htmlFor="userName">
                      Mật khẩu token nhận từ gmail:
                    </label>
                    <Field
                      name="memberPasswordToken"
                      type="text"
                      id="memberPasswordToken"
                      placeholder={`Nhập mật khẩu nhận từ gmail`}
                      className="w-full px-4 py-3 pr-12 rounded-md text-base  bg-dark outline-none border border-[#ccc] peer"
                    />

                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="memberPasswordToken" />
                    </p>
                  </div>

                  <div className="relative mb-8">
                    <label className="ml-2 text-base" htmlFor="userName">
                      Mật khẩu mới:
                    </label>
                    <Field
                      name="memberNewPassword"
                      type="text"
                      id="memberNewPassword"
                      placeholder={`Nhập mật khẩu mới`}
                      className="w-full px-4 py-3 pr-12 rounded-md text-base bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="memberNewPassword" />
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="userName">
                      Mật khẩu token nhận từ gmail:
                    </label>
                    <Field
                      name="studentPasswordToken"
                      type="text"
                      id="studentPasswordToken"
                      placeholder={`Nhập mật khẩu nhận từ gmail`}
                      className="w-full px-4 py-3 pr-12 rounded-md  bg-dark outline-none border border-[#ccc] peer"
                    />

                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="studentPasswordToken" />
                    </p>
                  </div>

                  <div className="relative mb-8">
                    <label className="ml-2" htmlFor="userName">
                      Mật khẩu mới:
                    </label>
                    <Field
                      name="studentNewPassword"
                      type="text"
                      id="studentNewPassword"
                      placeholder={`Nhập mật khẩu mới`}
                      className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
                    />
                    <p className="text-red-600 mt-1">
                      <ErrorMessage name="studentNewPassword" />
                    </p>
                  </div>
                </>
              )}
              <button
                type="submit"
                className=" py-3 w-full rounded-md bg-primary mb-2 text-white text-base uppercase hover:bg-[#4161cc] transition duration-300"
              >
                Xác nhận
              </button>
            </Form>
          </Formik>
        </Modal>
      }

      {
        <Modal
          title="Lấy lại mật khẩu"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <div className="mb-4">
            <h2 className="font-arial text-base text-gray-txt">
              Chọn vai trò của bạn:
            </h2>
            <Radio.Group
              className="mt-4"
              onChange={(e) => setForgetPasswordValues(e.target.value)}
              value={forgetPasswordValues}
            >
              <Radio
                className="font-arial text-base text-gray-txt mb-2"
                value={1}
              >
                Mạnh thường quân/ Người giới thiệu
              </Radio>
              <Radio className="font-arial text-base text-gray-txt" value={2}>
                Người nhận học bổng
              </Radio>
            </Radio.Group>
          </div>
          {forgetPasswordValues === 1 ? (
            <PasswordTokenForm
              onGetPassToken={handleGetMemberPassToken}
              isLoading={formLoading}
              emailValue={memberEmail}
              setEmailValue={setMemberEmail}
            />
          ) : (
            <PasswordTokenForm
              isLoading={formLoading}
              onGetPassToken={handleGetStudentPassToken}
              emailValue={studentEmail}
              setEmailValue={setStudentEmail}
            />
          )}
        </Modal>
      }

      <section className=" bg-[#f0f0f0] md:h-[600px] w-full h-full tw-flex-center py-5 md:px-[40px] select-none mt-[56px] lg:mt-0 ">
        <div className="h-full hidden md:hidden lg:block">
          <LazyLoadImage
            src={config.img + bannerData}
            className="h-full w-full object-cover rounded-tl-md rounded-bl-md"
          />
        </div>
        <div className=" max-w-[350px] md:max-w-[450px]  w-full h-full bg-white rounded-md lg:rounded-tr-md lg:rounded-br-md  px-[30px]  py-6 ">
          <h1 className="text-center text-2xl md:text-3xl mb-5">Đăng nhập</h1>

          <div className="mb-4">
            <h2 className="text-base">Đăng nhập với vai trò:</h2>
            <Radio.Group className="mt-4" onChange={onChange} value={value}>
              <Radio
                className="text-base font-arial mb-2 text-gray-txt"
                value={1}
              >
                Mạnh thường quân/ Người giới thiệu
              </Radio>
              <Radio className="text-base font-arial text-gray-txt" value={2}>
                Người nhận học bổng
              </Radio>
            </Radio.Group>
          </div>

          <Formik
            key={value}
            initialValues={{
              memberName: "",
              memberPassword: "",
              studentName: "",
              studentPassword: "",
            }}
            validationSchema={Yup.object(
              value === 1 ? memberValidation : studentValidation
            )}
            onSubmit={handleSubmit}
          >
            <Form>
              {value === 1 ? (
                <MemberLoginForm
                  isShowPassword={isShowPassword}
                  setIsShowPassword={setIsShowPassword}
                />
              ) : (
                <StudentLoginForm
                  isShowPassword={isShowPassword}
                  setIsShowPassword={setIsShowPassword}
                />
              )}
              <button
                type="submit"
                className=" p-3 w-full rounded bg-primary mb-2 text-white text-base uppercase hover:bg-[#4161cc] transition duration-300"
              >
                Đăng nhập
              </button>
            </Form>
          </Formik>

          <div className="flex justify-end">
            <button className="text-blue-500" onClick={showModal}>
              Quên mật khẩu
            </button>
          </div>

          <p className="text-base flex gap-2 mt-16 md:mt-10 justify-center">
            <span>Hãy chung tay cùng chúng tôi?</span>
            <Link
              to={"/dang-ky-mtq"}
              // onClick={() => setIsShowSignInBox(false)}
              className="text-blue-500 underline"
            >
              Đăng ký
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default SignIn;
