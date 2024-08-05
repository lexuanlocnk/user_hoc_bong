import React, { memo } from "react";
import { Button, DatePicker, Form, Input, message, Modal } from "antd";
import dayjs from "dayjs";

function ModalSubmitPost({ handleOpenModal, open }) {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success("Submit success!");
  };
  return (
    <Modal
      open={open.openModalPost}
      title="Đăng bài"
      onOk={() => handleOpenModal("openModalPost", true)}
      onCancel={() => handleOpenModal("openModalPost", false)}
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
          <Input placeholder="input placeholder" />
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
          <Input placeholder="input placeholder" />
        </Form.Item>

        <Form.Item name="dayPost" label="Ngày đăng bài ">
          <DatePicker
            format="DD/MM/YYYY HH:mm:ss"
            defaultValue={dayjs()}
            disabled={true}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(ModalSubmitPost);
