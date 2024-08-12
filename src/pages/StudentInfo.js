import React, { useEffect } from "react";
import { useState } from "react";

import GuardianForm from "../component/StudentInfo/GuardianForm";
import ParentForm from "../component/StudentInfo/ParentForm";
import StudentInfoForm from "../component/StudentInfo/StudentInfoForm";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import { LiaFileContractSolid } from "react-icons/lia";
import TableJobs from "./tableJobs";
import dayjs from "dayjs";

function StudentInfo() {
  const [studentData, setStudentData] = useState({});
  const [referrerData, setReferrerData] = useState({});
  const [personForm, setPersonForm] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [studentLoanData, setStudentLoanData] = useState([]);
  const [password, setPassword] = useState("");
  const [contractData, setContractData] = useState();

  const currencyFormat = (num) => {
    return (
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " đ"
    );
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("studentvtnk");

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const res = await axios.get(config.host + "/student-information", {
        headers: headers,
      });
      setStudentData(res.data.student);
      setReferrerData(res.data.member);
      setContractData(res.data.dataContract);
      // setPassword(res.data.student.password);
      setPersonForm(res.data.student.dependent_person);
      setStudentLoanData(res.data.list.reverse());
      setIsLoading(false);
    } catch (error) {
      console.error("fetch data fail.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      toast.warning(`Vui lòng nhập mật khẩu!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("studentvtnk");

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const res = await axios.post(
        config.host + `/student-upload-infomation`,
        { password: password },
        { headers: headers }
      );
      if (res.data.status === true) {
        toast.success(
          `Cập nhật mật khẩu thành công. Bạn có thể đăng nhập bằng mật khẩu mới.`,
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
    } catch (error) {
      console.error("fetch data to fail.");
      toast.warning(`Cập nhật mật khẩu thất bại. Vui lòng thử lại!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="bg-[#f0f0f0] flex justify-center py-5">
        <div className="container mx-auto max-w-[1000px] bg-white rounded-md">
          {isLoading && (
            <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
              <div className="w-10 h-10 border-[5px] rounded-full border-primary border-t-transparent animate-spin "></div>
            </div>
          )}
          <h1 className="text-center mt-20 md:mt-10 text-2xl md:text-3xl font-semibold">
            Thông tin người nhận học bổng
          </h1>
          {!isLoading && (
            <>
              <form
                onSubmit={handleSubmit}
                className="md:max-w-[800px] mx-auto pt-[32px] px-4"
              >
                <h2 className="mt-6 mb-4 text-lg font-semibold">
                  Thông tin cha mẹ hoặc người giám hộ
                </h2>
                {personForm == "1" ? (
                  <ParentForm studentData={studentData} />
                ) : (
                  <GuardianForm studentData={studentData} />
                )}

                <h2 className="mt-6 mb-4 text-lg font-semibold">
                  Thông tin sinh viên
                </h2>
                <StudentInfoForm
                  studentData={studentData}
                  referrerData={referrerData}
                  password={password}
                  setPassword={setPassword}
                />
              </form>

              <div className="px-5">
                <h2 className="mt-6 mb-4 text-lg font-semibold">
                  Hồ sơ xét duyệt học bổng
                </h2>
                <ul>
                  {contractData?.length > 0 ? (
                    contractData.map((item) => (
                      <li
                        key={item.id}
                        className="mb-2 flex items-center gap-1"
                      >
                        <LiaFileContractSolid size={15} />
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${config.contract}${item.contractDPF}`}
                          className=" hover:text-red-500 visited:text-blue-700"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li>Không có hợp đồng nào.</li>
                  )}
                </ul>
              </div>

              <div className="w-full mx-auto px-5 mb-5">
                <h2 className="mt-6 mb-4 text-lg font-semibold">
                  Thông tin nhận học bổng
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-300 mx-auto">
                    <thead className="bg-gray-600 text-white border border-gray-600">
                      <tr>
                        <th className="py-2 px-4 border-b">STT</th>
                        <th className="py-2 px-4 border-b">Mã phiếu nhận</th>
                        <th className="py-2 px-4 border-b">Số tiền đã nhận</th>
                        <th className="py-2 px-4 border-b">Ngày thực nhận</th>
                        <th className="py-2 px-4 border-b">Ngày tạo phiếu</th>
                        <th className="py-2 px-4 border-b">
                          Bản scan PDF phiếu nhận
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentLoanData &&
                        studentLoanData.length > 0 &&
                        studentLoanData.map((row, index = 1) => (
                          <tr key={row.id}>
                            <td className="py-2 px-4 border-b text-center">
                              {index + 1}
                            </td>

                            <td className="py-2 px-4 border-b text-center">
                              {row.code}
                            </td>

                            <td className="py-2 px-4 border-b text-center">
                              {currencyFormat(row.moneyPaid)}
                            </td>

                            <td className="py-2 px-4 border-b text-center">
                              {dayjs
                                .unix(parseInt(row?.datesReceived))
                                .format("DD-MM-YYYY")}
                            </td>

                            <td className="py-2 px-4 border-b text-center">
                              {row.dates}
                            </td>

                            <td className="py-2 px-4 border-b text-center ">
                              <div className="max-w-[150px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                                <a
                                  className="hover:text-red-500 visited:text-blue-700"
                                  target="_blank"
                                  href={`${config.contract}/${row.contract}`}
                                >
                                  {row.nameContract
                                    ? row.nameContract
                                    : "Không có link"}
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <TableJobs />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default StudentInfo;
