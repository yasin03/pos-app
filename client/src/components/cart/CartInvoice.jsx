import { Button, Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CartInvoice = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Oluştur"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={false}
    >
      <Form layout="vertical">
        <Form.Item
          label="Müşteri Adı"
          name={"customerName"}
          rules={[{ required: true, message: "Username is Required!" }]}
        >
          <Input placeholder="Müşteri Adı Giriniz" />
        </Form.Item>
        <Form.Item
          label="Telefon"
          name={"phoneNumber"}
          rules={[{ required: true, message: "Phone Number is Required!" }]}
        >
          <Input placeholder="Telefon No Giriniz" />
        </Form.Item>
        <Form.Item
          label="Ödeme Tipi"
          rules={[{ required: true, message: "Payment Method is Required!" }]}
          name={"paymentMode"}
        >
          <Select placeholder="Ödeme Tipi Seçiniz">
            <Select.Option value="Nakit">Nakit</Select.Option>
            <Select.Option value="Kart">Kredi Kartı</Select.Option>
          </Select>
        </Form.Item>

        <Card>
          <div className="flex justify-between">
            <span>Ara Toplam</span>
            <span>549.00 ₺</span>
          </div>
          <div className="flex justify-between my-2">
            <span>KDV Toplam %8</span>
            <span className="text-red-600">+43.92 ₺</span>
          </div>
          <div className="flex justify-between">
            <b>Toplam</b>
            <b>592.92 ₺</b>
          </div>
        </Card>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full mt-3"
          onClick={() => setIsModalOpen(true)}
        >
          Sipariş Oluştur
        </Button>
      </Form>
    </Modal>
  );
};

export default CartInvoice;
