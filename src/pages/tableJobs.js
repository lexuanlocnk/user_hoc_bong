import React, { useCallback, useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import ModalSubmitPost from "./modalSubmitPost";
import ModalDetailJob from "./modalDetailJob";
import axios from "axios";
import config from "../config";
import dayjs from "dayjs";

function TableJobs() {
  const [open, setOpen] = useState({
    openModalPost: false,
    openModalDetail: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [dataJob, setDataJob] = useState();

  const handleOpenModal = useCallback((modalName, status) => {
    setOpen((prev) => ({ ...prev, [modalName]: status }));
  }, []);

  const fetchDataJob = async () => {
    setIsLoading(true);

    let headers = {
      "Content-Type": "application/json",
    };
    const token = localStorage.getItem("studentvtnk");

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const res = await axios.get(config.host + `/list-task`, {
        headers: headers,
      });
      if (res.data.status === true) {
        setIsLoading(false);
        setDataJob(res.data.data);
      }
    } catch (error) {
      console.error("fail to fetch data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataJob();
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên công việc",
      dataIndex: "nameJob",
      key: "nameJob",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Trạng thái công việc",
      dataIndex: "statusJob",
      key: "statusJob",
      render: (text) => {
        let color = text === "Đã hoàn thành" ? "green" : "red";
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: "Mô tả công việc",
      dataIndex: "descriptionJob",
      key: "descriptionJob",
      width: 150,
    },
    {
      title: "Ngày hết hạn",
      dataIndex: "deadline",
      key: "deadline",
      width: 150,
    },
    {
      title: "#",
      key: "action",
      width: 180,

      render: (_, record) => (
        <Space size="middle">
          <span
            onClick={() => handleOpenModal("openModalPost", true)}
            className="btn_submit_post"
          >
            Đăng bài
          </span>

          <span
            onClick={() => handleOpenModal("openModalDetail", true)}
            className="btn_detail_post"
          >
            Xem chi tiết
          </span>
        </Space>
      ),
    },
  ];

  const data =
    dataJob && dataJob.length > 0
      ? dataJob.map((item, index) => ({
          key: index, // Sử dụng key từ item hoặc chỉ số nếu không có key
          stt: index + 1, // Sử dụng stt từ item hoặc chỉ số + 1 nếu không có stt
          nameJob: item.title,
          deadline: dayjs.unix(item.endDate).format("DD/MM/YYYY"),
          statusJob: item.status === 0 ? "Chưa hoàn thành" : "Đã Hoàn thành",
          descriptionJob: (
            <div dangerouslySetInnerHTML={{ __html: item.description }} />
          ),
        }))
      : [];

  return (
    <div className="px-5">
      <h2 className="mt-6 mb-4 text-lg font-semibold">Danh sách công việc</h2>
      <Table loading={isLoading} dataSource={data} columns={columns} />

      <ModalSubmitPost open={open} handleOpenModal={handleOpenModal} />

      <ModalDetailJob open={open} handleOpenModal={handleOpenModal} />
    </div>
  );
}

export default TableJobs;
