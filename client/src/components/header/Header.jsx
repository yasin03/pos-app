import { Badge, Input } from "antd";
import {
  SearchOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  CopyOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-6 py-4 shadow-md mb-4">
      <header className="header flex justify-between items-center gap-10">
        <div>Logo</div>
        <div className="flex-1 flex justify-center">
          <Input
            placeholder="Ara..."
            className="rounded-full max-w-[800px]"
            prefix={<SearchOutlined className="site-form-item-icon " />}
          />
        </div>
        <div className="flex justify-between items-center gap-6 md:static fixed z-50 bottom-0 left-0 w-screen md:w-auto md:bg-transparent bg-white border-t md:border-t-0 md:px-0 px-4 py-1">
          <Link
            to="/"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <HomeOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Ana Sayfa</span>
          </Link>
          <Badge count={5} className="md:flex hidden">
            <Link
              to="/cart"
              className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
            >
              <ShoppingCartOutlined className="md:text-2xl text-xl" />
              <span className="md:text-xs text-[10px]">Sepet</span>
            </Link>
          </Badge>
          <Link
            to="/invoice"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <CopyOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Faturalar</span>
          </Link>
          <Link
            to="/customers"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <UserOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Müşteriler</span>
          </Link>
          <Link
            to="/statistics"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <BarChartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">İstatistikler</span>
          </Link>
          <Link
            Link
            to="/"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <LogoutOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Çıkış</span>
          </Link>
        </div>
        <Badge count={5} className="md:hidden flex">
          <Link
            to="/"
            className="flex flex-col items-center hover:text-red-600 hover:scale-105 transition-all"
          >
            <ShoppingCartOutlined className="md:text-2xl text-xl" />
            <span className="md:text-xs text-[10px]">Sepet</span>
          </Link>
        </Badge>
      </header>
    </div>
  );
};

export default Header;
