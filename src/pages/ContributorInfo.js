import { useEffect, useState } from "react";
import ContributorInfoForm from "../component/ContributorForm/ContributorInfoForm";
import axios from "axios";
import config from "../config";
import { ToastContainer, toast } from "react-toastify";
import { LiaFileContractSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function ContributorInfo() {
  const [contributeData, setContributeData] = useState({});
  const [memberMoney, setMemberMoney] = useState([]);
  const [studentRecommend, seStudentRecommend] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState();
  const [contractData, setContractData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("membervtnk");

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const res = await axios.get(config.host + "/member-infomation", {
        headers: headers,
      });
      setData(res.data);
      setContributeData(res.data.member);
      setContractData(res.data.dataContract);
      setMemberMoney(res.data.listMoney.data);
      seStudentRecommend(res.data.listMember.data);
      setPassword(res.data.member.password);
      setIsLoading(false);
    } catch (error) {
      console.error("fetch data fail.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("membervtnk");

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
      const res = await axios.post(
        config.host + `/member-upload-infomation`,
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
      toast.warning(`Cập nhật mật khẩu thất bại. Xin vui lòng thử lại.`, {
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

  const currencyFormat = (num) => {
    return (
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " đ"
    );
  };

  console.log(contractData);

  return (
    <>
      <ToastContainer />

      {isLoading && (
        <div className="z-10 tw-flex-center fixed top-0 left-0 w-full h-full">
          <div className="w-10 h-10 border-[5px] rounded-full border-primary border-t-transparent animate-spin "></div>
        </div>
      )}

      {!isLoading && (
        <section className="bg-[#f0f0f0] flex justify-center py-5">
          <div className="container mx-auto max-w-[1000px] bg-white rounded-md">
            <h1 className="text-center mt-20 md:mt-10 text-2xl md:text-3xl uppercase font-semibold">
              {`Thông tin ${
                contributeData ? "mạnh thường quân góp quỹ" : "người giới thiệu"
              }`}{" "}
            </h1>
            <form
              onSubmit={handleSubmit}
              className="md:max-w-[800px] mx-auto pt-[32px] px-4"
            >
              <h2 className="mt-6 mb-4 text-lg font-semibold">
                Thông tin mạnh thường quân
              </h2>
              <ContributorInfoForm
                data={contributeData}
                password={password}
                setPassword={setPassword}
              />
            </form>

            <div className="px-5">
              <h2 className="mt-6 mb-4 text-lg font-semibold">
                Danh sách hợp đồng đã ký
              </h2>
              <ul>
                {contractData?.length > 0 ? (
                  contractData.map((item) => (
                    <li key={item.id} className="mb-2 flex items-center gap-1">
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

            <div className="px-5">
              <h2 className="mt-6 mb-4 text-lg font-semibold">
                Thông tin khoản góp
              </h2>
              <div className="flex md:justify-end">
                <div className="mb-4 text-base font-semibold">
                  <div>
                    Tiền cam kết: {currencyFormat(data?.commitmentMoney)}
                  </div>
                  <div>
                    Tiền thực góp: {currencyFormat(data?.actualPayment)}
                  </div>
                  <div>
                    Tiền còn lại: {currencyFormat(data?.remainingMoney)}
                  </div>
                </div>
              </div>
              <div className="w-full overflow-x-auto">
                <table className="w-full  bg-white border border-gray-300 mx-auto">
                  <thead className="bg-gray-600 text-white border border-gray-600">
                    <tr>
                      <th className="py-2 px-4 border-b">STT</th>
                      <th className="py-2 px-4 border-b">
                        Tên mạnh thường quân
                      </th>
                      <th className="py-2 px-4 border-b">Mã phiếu thu</th>
                      <th className="py-2 px-4 border-b">Số tiền góp</th>
                      <th className="py-2 px-4 border-b">Ngày góp</th>
                      <th className="py-2 px-4 border-b">
                        Bản scan PDF phiếu thu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {memberMoney &&
                      memberMoney.length > 0 &&
                      memberMoney.map((row, index = 1) => (
                        <tr key={row.id}>
                          <td className="py-2 px-4 border-b text-center">
                            {index + 1}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            {row.username}
                          </td>

                          <td className="py-2 px-4 border-b text-center">
                            {row.code}
                          </td>

                          <td className="py-2 px-4 border-b text-center">
                            {currencyFormat(row.fundMoneyReal)}
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
                                {row.nameContract}
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full h-full px-5 mb-5">
              <h2 className="mt-6 mb-4 text-lg font-semibold">
                Thông tin người giới thiệu
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-300 ">
                  <thead className="bg-gray-600 text-white border border-gray-600">
                    <tr>
                      <th className="py-2 px-4 border-b">STT</th>
                      <th className="py-2 px-4 border-b">
                        Tên sinh viên giới thiệu
                      </th>
                      <th className="py-2 px-4 border-b">
                        Ngày tháng năm sinh
                      </th>
                      <th className="py-2 px-4 border-b">Địa chỉ</th>
                      <th className="py-2 px-4 border-b">Email</th>
                      <th className="py-2 px-4 border-b">
                        Trường đang theo học
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentRecommend &&
                      studentRecommend.length > 0 &&
                      studentRecommend.map((row, index = 1) => (
                        <tr key={row.id}>
                          <td className="py-2 px-4 border-b text-center">
                            {index + 1}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            {row.nameMember}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            {row.dateBirthMember}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">
                              {row.addressMember}
                            </div>
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            {row.emailMember}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            {row.schoolMember}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ContributorInfo;
