import { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";

function ContributorInfoForm({ data, password, setPassword }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <div className="min-w-[300px] w-full mt-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="contributorName"
          >
            Họ và tên mạnh thường quân:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contributorName"
            type="text"
            name="contributorName"
            value={data?.username}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="contributorPassword"
          >
            Mật khẩu (bạn có thể thay đổi thông tin này)
          </label>

          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contributorPassword"
              type={isShowPassword ? "text" : "password"}
              name="contributorPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="contributorEmail"
          >
            Email cá nhân
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contributorEmail"
            type="text"
            name="contributorEmail"
            value={data?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="contributorCompany"
          >
            Tên công ty
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contributorCompany"
            type="text"
            name="contributorCompany"
            value={data?.nameCompany}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="companyAddress"
          >
            Địa chỉ công ty
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyAddress"
            type="text"
            name="companyAddress"
            value={data?.addressCompany}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-base font-bold mb-2"
            htmlFor="companyEmail"
          >
            Số điện thoại liên hệ
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyEmail"
            type="text"
            name="companyEmail"
            value={data?.phoneCompany}
            readOnly
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-3 py-2 rounded border border-primary hover:bg-primary hover:text-white"
          >
            Cập nhật
          </button>
        </div>
      </div>
    </>
  );
}

export default ContributorInfoForm;
