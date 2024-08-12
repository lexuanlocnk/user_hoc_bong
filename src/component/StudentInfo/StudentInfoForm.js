import axios from "axios";
import { useState } from "react";
import config from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
function StudentInfoForm({ studentData, referrerData, password, setPassword }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <div className="min-w-[300px] mt-4">
      <ToastContainer />
      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentName"
        >
          Họ tên sinh viên
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentName"
          type="text"
          name="studentName"
          value={studentData?.nameMember}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="email"
        >
          Mật khẩu (bạn có thể thay đổi thông tin này)
        </label>
        <div className="relative">
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type={isShowPassword ? "text" : "password"}
            name="email"
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
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentDob"
        >
          Ngày tháng năm sinh
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentDob"
          type="text"
          name="studentDob"
          value={studentData?.dateBirthMember}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentAddress"
        >
          Địa chỉ thường trú
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentAddress"
          type="text"
          name="studentAddress"
          value={studentData?.addressMember}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentTemporaryAddress"
        >
          Địa chỉ tạm trú
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentTemporaryAddress"
          type="text"
          name="studentTemporaryAddress"
          value={studentData?.temporaryAddress}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentTel"
        >
          Số điện thoại
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentTel"
          type="text"
          name="studentTel"
          value={studentData?.phoneMember}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentIdCard"
        >
          Số CCCD/ CMND
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentIdCard"
          type="text"
          name="studentIdCard"
          value={studentData?.IDMember}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentEmail"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentEmail"
          type="text"
          name="studentEmail"
          value={studentData?.emailMember}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentSchool"
        >
          Trường đang theo học
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentSchool"
          type="text"
          name="studentSchool"
          value={studentData?.schoolMember}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentSpecialized"
        >
          Chuyên nghành theo học:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentSpecialized"
          type="text"
          name="studentSpecialized"
          value={studentData?.specialized}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="numberYearOfStudy"
        >
          Số năm học:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="numberYearOfStudy"
          type="text"
          name="numberYearOfStudy"
          value={studentData?.numberYearOfStudy}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="studentConstraction"
        >
          Mã hợp đồng
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentConstraction"
          type="text"
          name="studentConstraction"
          value={studentData?.signCode}
          readOnly
        />
      </div>
      <h2 className="mt-6 mb-4 text-lg font-semibold">
        Thông tin người giới thiệu
      </h2>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="referrer"
        >
          Tên người giới thiệu
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="referrer"
          type="text"
          name="referrer"
          value={referrerData?.username}
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-base font-semibold mb-2"
          htmlFor="referrerPhone"
        >
          Số điện thoại liên hệ
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="referrerPhone"
          type="text"
          name="referrerPhone"
          value={referrerData?.phoneCompany}
          readOnly
        />
      </div>

      {/* <div className="mb-4">
				<label className="block text-gray-700 text-base font-semibold font-bold mb-2" htmlFor="studentRecommendation">
					Mã giới thiệu
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="studentRecommendation"
					type="text"
					name="studentRecommendation"
					value={studentData?.referralCode}
					readOnly
				/>
			</div> */}

      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="px-3 py-2 rounded border border-primary hover:bg-primary hover:text-white"
        >
          Cập nhật
        </button>
      </div>
    </div>
  );
}

export default StudentInfoForm;
