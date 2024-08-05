import { ErrorMessage, Field } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function StudentLoginForm({ isShowPassword, setIsShowPassword }) {
  return (
    <>
      {/* email */}
      <div className="relative mb-8">
        <Field
          name="studentName"
          type="text"
          id="studentName"
          placeholder={`Email`}
          className="w-full px-4 py-3 pr-12 rounded  bg-dark outline-none border border-[#ccc] peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="studentName" />
        </p>
      </div>

      {/* password */}
      <div className="relative mb-8">
        <div className="relative">
          <Field
            name="studentPassword"
            type={isShowPassword ? "text" : "password"}
            id="studentPassword"
            placeholder="Password"
            className="w-full px-4 py-3 pr-12 rounded  bg-dark outline-none border border-[#ccc] peer"
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
          <ErrorMessage name="studentPassword" />
        </p>
      </div>
    </>
  );
}

export default StudentLoginForm;
