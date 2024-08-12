import React, { memo } from "react";
import { Modal, Popconfirm, Table } from "antd";
import config from "../config";
import axios from "axios";
import { toast } from "react-toastify";

function ModalDetailJob({
  handleOpenModal,
  open,
  dataListJob,
  loading,
  fetchDataJob,
  fetchListPostJob,
}) {
  // const handleDeletePost = async (idPost) => {
  //   try {
  //     let headers = {
  //       "Content-Type": "application/json",
  //     };
  //     const token = localStorage.getItem("studentvtnk");

  //     if (token) {
  //       headers.Authorization = `Bearer ${token}`;
  //     }
  //     const res = await axios.get(
  //       config.host + `/delete-link/${idPost}`,

  //       { headers: headers }
  //     );
  //     if (res.data.status === true) {
  //       fetchListPostJob(open.idTask);
  //       fetchDataJob();
  //       toast.success(`Xóa bài viết thành công.`, {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("fetch data to fail.");
  //     toast.error(`Xóa bài viết thất bại.`, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }
  // };

  const columns = [
    {
      title: "Tên bài viết",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "URL bài viết",
      dataIndex: "link",
      key: "link",

      render: (text) => {
        return (
          <a rel="noreferrer" target="_blank" href={text}>
            {text}
          </a>
        );
      },
    },
    // {
    //   title: "#",
    //   dataIndex: "action",
    //   key: "action",
    //   width: 160,

    //   render: (text, record) => {
    //     return (
    //       <Popconfirm
    //         okType={"danger"}
    //         title="Xóa bài viết"
    //         onConfirm={() => handleDeletePost(record.id)}
    //         okText="Chắc chắn"
    //         cancelText="Hủy"
    //       >
    //         <span className="btn_delete_post">Xóa bài viết</span>
    //       </Popconfirm>
    //     );
    //   },
    // },
  ];

  return (
    <Modal
      width={1000}
      open={open.openModalDetail}
      title="Danh sách bài viết"
      onOk={() => handleOpenModal("openModalDetail", true, null)}
      onCancel={() => handleOpenModal("openModalDetail", false, null)}
      footer={null}
    >
      <div>
        <Table
          scroll={{ x: "max-content" }}
          loading={loading}
          dataSource={dataListJob?.listLink || []}
          columns={columns}
        />
      </div>
    </Modal>
  );
}

export default memo(ModalDetailJob);
