import { ErrorMessage, Field } from "formik";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
function MemberLoginForm({ isShowPassword, setIsShowPassword }) {
  return (
    <>
      {/* email */}
      <div className="relative mb-8">
        <Field
          name="memberName"
          type="text"
          id="memberName"
          placeholder={`Email`}
          className="w-full px-4 py-3 pr-12 rounded  bg-dark outline-none border border-[#ccc] peer"
        />

        <p className="text-red-600 mt-1">
          <ErrorMessage name="memberName" />
        </p>
      </div>

      {/* password */}
      <div className="relative mb-8">
        <div className="relative">
          <Field
            name="memberPassword"
            type={isShowPassword ? "text" : "password"}
            id="memberPassword"
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
          <ErrorMessage name="memberPassword" />
        </p>
        {/* <IoEyeSharp
					onClick={() => setIsShowPassword((prev) => !prev)}
					size={20}
					className="absolute top-[34%] right-[3%] cursor-pointer"
				/> */}
      </div>
    </>
  );
}

export default MemberLoginForm;
