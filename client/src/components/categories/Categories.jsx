import { PlusOutlined } from "@ant-design/icons";
import "./style.css";
import { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";

const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/categories/add-category", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi!");
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ul className="flex md:flex-col gap-3">
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        <li
          className="category-item !bg-slate-700"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusOutlined className="md:text-2xl text-white" />
        </li>
      </ul>
      <Modal
        title="Kategori Ekle"
        open={isAddModalOpen}
        onCancel={() => setIsAddModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            label="Kategori Adı"
            rules={[
              { required: true, message: "Kategori alanı boş geçilemez!" },
            ]}
            name="title"
          >
            <Input />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Categories;
