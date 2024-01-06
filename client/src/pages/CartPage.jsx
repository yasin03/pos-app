import React, { useState } from "react";
import Header from "../components/header/Header";
import { Button, Card, Table } from "antd";
import CartInvoice from "../components/cart/CartInvoice";

const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-center font-bold text-4xl my-4">Sepetim</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end my-4">
          <Card className="w-72">
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
            <Button
              type="primary"
              className="w-full mt-3"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Sipariş Oluştur
            </Button>
          </Card>
        </div>
      </div>
      <CartInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default CartPage;
