import React, { memo } from "react";
import { Button, Form, Input, message, Modal } from "antd";

function ModalDetailJob({ handleOpenModal, open }) {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  return (
    <Modal
      open={open.openModalDetail}
      title="Chi tiết công việc"
      onOk={() => handleOpenModal("openModalDetail", true)}
      onCancel={() => handleOpenModal("openModalDetail", false)}
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="url"
          label="URL"
          rules={[
            {
              required: true,
            },
            {
              type: "url",
              warningOnly: true,
            },
            {
              type: "string",
              min: 6,
            },
          ]}
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default memo(ModalDetailJob);
