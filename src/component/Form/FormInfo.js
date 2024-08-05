import { Field, ErrorMessage } from "formik";

function FormInfo({ name, title }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold mb-4">Thông tin {title}</h1>
      {/* ho ten */}
      <div className="relative mb-5">
        <label htmlFor={`${name}_fullName`} className="ml-2 ">
          Họ và tên {title}:
        </label>
        <Field
          name={`${name}_fullName`}
          type="text"
          id={`${name}_fullName`}
          placeholder={`Nhập họ tên ${title}...`}
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_fullName`} />
        </p>
      </div>

      {/* dob */}
      <div className="relative mb-5">
        <label className="ml-2" htmlFor={`${name}_dob`}>
          Ngày tháng năm sinh:
        </label>

        <Field
          name={`${name}_dob`}
          type="date"
          id={`${name}_dob`}
          placeholder="Ngày tháng năm sinh"
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_dob`} />
        </p>
      </div>

      {/* dia chi */}
      <div className="relative mb-5">
        <label className="ml-2" htmlFor={`${name}_address`}>
          Địa chỉ:
        </label>
        <Field
          name={`${name}_address`}
          type="text"
          id={`${name}_address`}
          placeholder="Nhập địa chỉ thường trú..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_address`} />
        </p>
      </div>
      {/* so dien thoai */}
      <div className="relative mb-5">
        <label className="ml-2" htmlFor={`${name}_tel`}>
          Số điện thoại:
        </label>
        <Field
          name={`${name}_tel`}
          type="tel"
          id={`${name}_tel`}
          placeholder="Nhập số điện thoại..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc] peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_tel`} />
        </p>
      </div>
      {/* so CCCD */}
      <div className="relative mb-5">
        <label className="ml-2" htmlFor={`${name}_idCard`}>
          Số CCCD/ CMDN:
        </label>
        <Field
          name={`${name}_idCard`}
          type="text"
          id={`${name}_idCard`}
          placeholder="Nhập số CCCD/ CMDN..."
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_idCard`} />
        </p>
      </div>
      {/* email */}
      <div className="relative mb-5">
        <label className="ml-2" htmlFor={`${name}_email`}>
          Email:
        </label>
        <Field
          name={`${name}_email`}
          type="email"
          id={`${name}_email`}
          placeholder={`Nhập Email...`}
          className="w-full px-4 py-3 pr-12 rounded-md bg-dark outline-none border border-[#ccc]  peer"
        />

        <p className="text-red-600 mt-1 ml-1">
          <ErrorMessage name={`${name}_email`} />
        </p>
      </div>
    </div>
  );
}

export default FormInfo;
