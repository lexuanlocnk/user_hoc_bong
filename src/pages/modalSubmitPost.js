import React, { memo } from "react";
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import config from "../config";
import { toast } from "react-toastify";

function ModalSubmitPost({ handleOpenModal, open, fetchDataJob }) {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };
      const token = localStorage.getItem("studentvtnk");

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const res = await axios.post(
        config.host + `/update-task/${open.idTask}`,
        { title: values.titlePost, link: values.url },
        { headers: headers }
      );
      if (res.data.status === true) {
        toast.success(`Đăng bài ${values.titlePost} thành công.`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        fetchDataJob();
        handleOpenModal("openModalPost", false, null);
        form.resetFields();
      }

      console.log("res.data res.data", res.data);
    } catch (error) {
      console.error("fetch data to fail.");

      toast.error(`Đăng bài ${values.titlePost} thất bại.`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      form.resetFields();
    }
  };

  return (
    <Modal
      open={open.openModalPost}
      title="Đăng bài"
      onOk={() => handleOpenModal("openModalPost", true, null)}
      onCancel={() => handleOpenModal("openModalPost", false, null)}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="titlePost"
          label="Tiêu đề bài viết"
          rules={[
            {
              required: true,
              message: "Tiêu đề bài viết không được bỏ trống!",
            },
          ]}
        >
          <Input placeholder="Tiêu đề bài viết" />
        </Form.Item>

        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
              message: "URL không được bỏ trống!",
            },
            {
              type: "url",
              warningOnly: true,
              message: "Bạn hãy nhập URL bài viết!",
            },
            {
              type: "string",
              min: 6,
              message: "URL không được dưới 6 ký tự!",
            },
          ]}
        >
          <Input placeholder="URL bài viết" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Đăng bài</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(ModalSubmitPost);
