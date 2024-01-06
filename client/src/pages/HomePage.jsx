import React from "react";
import Header from "../components/header/Header";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import CartTotals from "../components/cart/CartTotals";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="home px-6 flex md:flex-row flex-col justify-between md:pb-0 pb-24">
        <div className="categories overflow-auto max-h-[calc(100vh_-_90px)] md:pb-10">
          <Categories />
        </div>
        <div className="products flex-[0.7] max-h-[calc(100vh_-_90px)] overflow-y-auto pb-10">
          <Products />
        </div>
        <div className="cart flex-[0.2] border shadow-md cart-wrapper min-w-[300px]">
          <CartTotals />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
