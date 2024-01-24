import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item border rounded-md hover:shadow-lg hover:scale-105 cursor-pointer transition-all select-none">
      <div className="product-img">
        <img
          src={item.img}
          alt=""
          className="h-28 rounded-md object-cover w-full border-b"
        />
      </div>
      <div className="product-info flex flex-col p-3">
        <span className="font-bold">{item.title}</span>
        <span>{item.price}₺</span>
      </div>
    </div>
  );
};

export default ProductItem;
