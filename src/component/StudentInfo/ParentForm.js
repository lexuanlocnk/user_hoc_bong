function ParentForm({ studentData }) {
  return (
    <>
      {/* ho ten cha */}
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-8 gap-4">
        <div className="min-w-[300px] w-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherName"
            >
              Họ tên cha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherName"
              type="text"
              name="fatherName"
              value={"Truong Thanh Hung"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherDob"
            >
              Ngày tháng năm sinh
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherDob"
              type="text"
              name="fatherDob"
              value={"18/05/1999"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherAddress"
            >
              Địa chỉ
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherAddress"
              type="text"
              name="fatherAddress"
              value={"245B Trần Quang Khải, p Tân Định, Quận 1, Tp. HCM"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherTel"
            >
              Số điện thoại
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherTel"
              type="text"
              name="fatherTel"
              value={"0843332929"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherIdCard"
            >
              Số CCCD/ CMND
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherIdCard"
              type="text"
              name="fatherIdCard"
              value={"058186000028"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="fatherEmail"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fatherEmail"
              type="text"
              name="fatherEmail"
              value={"nhquoc99@gmail.com"}
              readOnly
            />
          </div>
        </div>
        {/* ho ten */}
        <div className="min-w-[300px] w-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherName"
            >
              Họ tên mẹ
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherName"
              type="text"
              name="motherName"
              value={"Truong Thanh Hung"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherDob"
            >
              Ngày tháng năm sinh
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherDob"
              type="text"
              name="motherDob"
              value={"18/05/1999"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherAddress"
            >
              Địa chỉ
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherAddress"
              type="text"
              name="motherAddress"
              value={"245B Trần Quang Khải, p Tân Định, Quận 1, Tp. HCM"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherTel"
            >
              Số điện thoại
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherTel"
              type="text"
              name="motherTel"
              value={"0843332929"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherIdCard"
            >
              Số CCCD/ CMND
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherIdCard"
              type="text"
              name="motherIdCard"
              value={"058186000028"}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-base font-semibold mb-2"
              htmlFor="motherEmail"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="motherEmail"
              type="text"
              name="motherEmail"
              value={"nhquoc99@gmail.com"}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ParentForm;
