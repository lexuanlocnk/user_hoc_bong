import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInfo from "../component/Form/FormInfo";
import { Radio } from "antd";
import StudentForm from "../component/Form/StudentForm";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ScholarshipRegister() {
  const [value, setValue] = useState(1);
  const [studentEmailValue, setStudentEmailValue] = useState("");
  const [checkReceiveCode, setCheckReceiveCode] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    cha: {
      cha_fullName: "",
      cha_dob: "",
      cha_address: "",
      cha_tel: "",
      cha_idCard: "",
      cha_email: "",
    },
    me: {
      me_fullName: "",
      me_dob: "",
      me_address: "",
      me_tel: "",
      me_idCard: "",
      me_email: "",
    },
    giamho: {
      giamho_fullName: "",
      giamho_dob: "",
      giamho_address: "",
      giamho_tel: "",
      giamho_idCard: "",
      giamho_email: "",
    },
    sv: {
      password: "",
      passwordConfirm: "",
      fullName: "",
      dob: "",
      address: "",
      temporaryAddress: "",
      tel: "",
      idCard: "",
      email: "",
      specialized: "",
      numberYearOfStudy: "",
      school: "",
      magd: "",
      magt: "",
    },
  };

  const parentFormValidation = {
    // cha
    cha_fullName: Yup.string().required("*Họ và tên là bắt buộc"),
    cha_dob: Yup.date().required("*Ngày tháng năm sinh là bắt buộc"),
    cha_address: Yup.string().required("*Địa chỉ là bắt buộc"),
    cha_tel: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
    cha_idCard: Yup.string()
      .matches(/^[0-9]+$/, "*Số CCCD/CMDN chỉ được chứa các chữ số")
      .min(9, "*Số CCCD/CMDN phải có ít nhất 9 số")
      .max(12, "*Số CCCD/CMDN không được vượt quá 12 số")
      .required("*Số CCCD/CMDN là bắt buộc"),
    cha_email: Yup.string()
      .email("*Email không hợp lệ")
      .required("*Email là bắt buộc"),
    // me
    me_fullName: Yup.string().required("*Họ và tên là bắt buộc"),
    me_dob: Yup.date().required("*Ngày tháng năm sinh là bắt buộc"),
    me_address: Yup.string().required("*Địa chỉ là bắt buộc"),
    me_tel: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
    me_idCard: Yup.string()
      .matches(/^[0-9]+$/, "*Số CCCD/CMDN chỉ được chứa các chữ số")
      .min(9, "*Số CCCD/CMDN phải có ít nhất 9 số")
      .max(12, "*Số CCCD/CMDN không được vượt quá 12 số")
      .required("*Số CCCD/CMDN là bắt buộc"),
    me_email: Yup.string()
      .email("*Email không hợp lệ")
      .required("*Email là bắt buộc"),
    //sv
    // username: Yup.string().required("*Tên đăng nhập là bắt buộc"),
    password: Yup.string().required("*Mật khẩu là bắt buộc"),
    passwordConfirm: Yup.string()
      .required("*Mật khẩu xác nhận là bắt buộc")
      .oneOf([Yup.ref("password")], "*Mật khẩu xác nhận không trùng khớp."),
    fullName: Yup.string().required("*Họ và tên là bắt buộc"),
    dob: Yup.date().required("*Ngày tháng năm sinh là bắt buộc"),
    address: Yup.string().required("*Địa chỉ thường trú là bắt buộc"),
    temporaryAddress: Yup.string().required("*Địa chỉ tạm trú là bắt buộc"),
    tel: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
    idCard: Yup.string()
      .matches(/^[0-9]+$/, "*Số CCCD/CMDN chỉ được chứa các chữ số")
      .min(9, "*Số CCCD/CMDN phải có ít nhất 9 số")
      .max(12, "*Số CCCD/CMDN không được vượt quá 12 số")
      .required("*Số CCCD/CMDN là bắt buộc"),
    // email: Yup.string()
    //   .email("*Email không hợp lệ")
    //   .required("*Email là bắt buộc"),
    school: Yup.string().required("*Thông tin trường là bắt buộc"),
    specialized: Yup.string().required("*Thông tin nghành học bắt buộc"),
    numberYearOfStudy: Yup.string().required(
      "*Thông tin số năm học là bắt buộc"
    ),
    // debt: Yup.string()
    //   .matches(/^[0-9]+$/, "*Số tiền vay chỉ được chứa các chữ số")
    //   .min(7, "*Số tiền vay tối thiểu phải trên 1 triệu.")
    //   .max(8, "*Số tiền vay không được vượt quá 50 triệu.")
    //   .required("*Số tiền vay là bắt buộc"),
    magd: Yup.string().required("*Mã giao dịch là bắt buộc"),
    magt: Yup.string()
      .matches(/^[0-9]+$/, "*Mã giới thiệu chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số"),
    // .required("*Số điện thoại là bắt buộc"),
  };

  const guardianFormValidation = {
    // giamho
    giamho_fullName: Yup.string().required("*Họ và tên là bắt buộc"),
    giamho_dob: Yup.date().required("*Ngày tháng năm sinh là bắt buộc"),
    giamho_address: Yup.string().required("*Địa chỉ là bắt buộc"),
    giamho_tel: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
    giamho_idCard: Yup.string()
      .matches(/^[0-9]+$/, "*Số CCCD/CMDN chỉ được chứa các chữ số")
      .min(9, "*Số CCCD/CMDN phải có ít nhất 9 số")
      .max(12, "*Số CCCD/CMDN không được vượt quá 12 số")
      .required("*Số CCCD/CMDN là bắt buộc"),
    giamho_email: Yup.string()
      .email("*Email không hợp lệ")
      .required("*Email là bắt buộc"),
    //sv
    // username: Yup.string().required("*Tên đăng nhập là bắt buộc"),
    password: Yup.string().required("*Mật khẩu là bắt buộc"),
    passwordConfirm: Yup.string()
      .required("*Mật khẩu xác nhận là bắt buộc")
      .oneOf([Yup.ref("password")], "*Mật khẩu xác nhận không trùng khớp."),
    fullName: Yup.string().required("*Họ và tên là bắt buộc"),
    dob: Yup.date().required("*Ngày tháng năm sinh là bắt buộc"),
    address: Yup.string().required("*Địa chỉ thường trú là bắt buộc"),
    temporaryAddress: Yup.string().required("*Địa chỉ tạm trú là bắt buộc"),
    tel: Yup.string()
      .matches(/^[0-9]+$/, "*Số điện thoại chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số")
      .required("*Số điện thoại là bắt buộc"),
    idCard: Yup.string()
      .matches(/^[0-9]+$/, "*Số CCCD/CMDN chỉ được chứa các chữ số")
      .min(9, "*Số CCCD/CMDN phải có ít nhất 9 số")
      .max(12, "*Số CCCD/CMDN không được vượt quá 12 số")
      .required("*Số CCCD/CMDN là bắt buộc"),
    // email: Yup.string()
    //   .email("*Email không hợp lệ")
    //   .required("*Email là bắt buộc"),
    school: Yup.string().required("*Thông tin trường là bắt buộc"),
    // debt: Yup.string()
    //   .matches(/^[0-9]+$/, "*Số tiền vay chỉ được chứa các chữ số")
    //   .min(7, "*Số tiền vay tối thiểu phải trên 1 triệu.")
    //   .max(8, "*Số tiền vay không được vượt quá 50 triệu.")
    //   .required("*Số tiền vay là bắt buộc"),
    specialized: Yup.string().required("*Thông tin nghành học bắt buộc"),
    numberYearOfStudy: Yup.string().required(
      "*Thông tin số năm học là bắt buộc"
    ),
    magd: Yup.string().required("*Mã giao dịch là bắt buộc"),
    magt: Yup.string()
      .matches(/^[0-9]+$/, "*Mã giới thiệu chỉ được chứa các chữ số")
      .min(10, "*Số điện thoại phải có ít nhất 10 số")
      .max(11, "*Số điện thoại không được vượt quá 11 số"),
    // .required("*Số điện thoại là bắt buộc"),
  };

  useEffect(() => {
    fetchCodeData();
  }, [checkReceiveCode]);

  const fetchCodeData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post(config.host + "/student-getcode", {
        gmail: studentEmailValue,
      });

      if (res.data.status === true) {
        toast.success(
          "Mã giao dịch đã được gửi đến gmail của bạn. Vui lòng xác nhận mã code để đăng ký.",
          {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            onClose: () => {
              setIsLoading(false);
            },
          }
        );
      } else {
        if (res.data.message == "exist gmail") {
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
          toast.error("Nhận mã giao dịch thất bại.", {
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
    } catch (error) {
      console.error("fetch data fail.");
    } finally {
      setIsLoading(false);
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const res = await axios.post(config.host + "/student-register", {
        nameFather: values.cha_fullName,
        addressFather: values.cha_address,
        dateBirthFather: values.cha_dob,
        phoneFather: values.cha_tel,
        emailFather: values.cha_email,
        IDFather: values.cha_idCard,

        nameMother: values.me_fullName,
        addressMother: values.me_address,
        dateBirthMother: values.me_dob,
        phoneMother: values.me_tel,
        emailMother: values.me_email,
        IDMother: values.me_idCard,

        nameGuardian: values.giamho_fullName,
        addressGuardian: values.giamho_address,
        dateBirthGuardian: values.giamho_dob,
        phoneGuardian: values.giamho_tel,
        emailGuardian: values.giamho_email,
        IDGuardian: values.giamho_idCard,

        nameMember: values.fullName,
        addressMember: values.address,
        temporaryAddress: values.temporaryAddress,
        dateBirthMember: values.dob,
        phoneMember: values.tel,
        emailMember: studentEmailValue,
        IDMember: values.idCard,
        schoolMember: values.school,
        code: values.magd,
        password: values.password,
        phoneCompany: values.magt,
        specialized: values.specialized,
        numberYearOfStudy: values.numberYearOfStudy,

        dependent_person: value,
      });

      if (res.data.status === true) {
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
              navigate("/dang-nhap");
              setIsLoading(false);
            },
          }
        );
      } else {
        if (res.data.message == "exist email member") {
          toast.error("Email đã được đăng ký. Vui lòng nhập email khác.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else if (res.data.message == "exist id member") {
          toast.error(
            "Mã định danh đã được đăng ký. Vui lòng nhập mã định danh khác.",
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
        } else if (res.data.message == "code is wrong") {
          toast.error("Mã giao dịch không tồn tại. Vui lòng thử lại.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Đăng ký thất bại.", {
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
    } catch (error) {
      console.error("fail to fetch data.");
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
      <section className="bg-[#f0f0f0] mt-5 md:py-5">
        <section
          className={`${
            value === 1 ? "max-w-[1000px]" : "max-w-[650px]"
          } w-full px-[40px] py-[60px] bg-white rounded-md mx-auto shadow-md`}
        >
          <h1 className="text-center text-2xl md:text-3xl font-semibold uppercase">
            Đăng ký nhận học bổng
          </h1>
          <h2 className="mt-8 text-lg font-semibold">Thông tin phụ huynh</h2>
          <div className="mt-4">
            <h3>Nhập thông tin cha,mẹ hoặc người giám hộ</h3>
            <Radio.Group onChange={onChange} value={value} className="mt-2">
              <Radio value={1} className="text-base font-arial">
                Cha và mẹ
              </Radio>
              <Radio value={2} className="text-base font-arial">
                Người giám hộ
              </Radio>
            </Radio.Group>
          </div>
          <Formik
            key={value}
            initialValues={initialValues}
            validationSchema={Yup.object(
              value === 1 ? parentFormValidation : guardianFormValidation
            )}
            onSubmit={handleSubmit}
          >
            <Form>
              <div
                className={`mt-4 ${
                  value === 1 && "md:flex md:justify-between"
                }`}
              >
                {value && value === 1 && (
                  <>
                    <FormInfo name={"cha"} title={"cha"} />
                    <FormInfo name={"me"} title={"mẹ"} />
                  </>
                )}
                {value && value === 2 && (
                  <FormInfo name={"giamho"} title={"người giám hộ"} />
                )}
              </div>
              <StudentForm
                checkValue={value}
                studentEmailValue={studentEmailValue}
                setStudentEmailValue={setStudentEmailValue}
                setCheckReceiveCode={setCheckReceiveCode}
              />
              <div className="tw-flex-center mt-8">
                <button
                  type="submit"
                  className="px-4 py-2 border border-primary rounded-md hover:bg-primary hover:text-white duration-300 transition"
                >
                  Đăng ký
                </button>
              </div>
            </Form>
          </Formik>
        </section>
      </section>
    </>
  );
}

export default ScholarshipRegister;
