import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import "./style.css";
import { useState } from "react";
import Add from "./Add";
import Edit from "./Edit";

const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);


  return (
    <>
      <ul className="flex md:flex-col gap-3">
        <li className="category-item">
          <span className="text-white">Tümü</span>
        </li>
        {categories?.map((item, index) => (
          <li className="category-item" key={index}>
            <span className="text-white">{item?.title}</span>
          </li>
        ))}

        <li
          className="category-item  !bg-slate-700 hover:opacity-90"
          onClick={() => setIsAddModalOpen(true)}
        >
          <PlusOutlined className="md:text-2xl text-white" />
        </li>
        <li
          className="category-item !bg-slate-700 hover:opacity-90"
          onClick={() => setIsEditModalOpen(true)}
        >
          <EditOutlined className="md:text-2xl text-white" />
        </li>

        <Add
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          categories={categories}
          setCategories={setCategories}
        />
        <Edit
          isEditModalOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          categories={categories}
          setCategories={setCategories}
        />
      </ul>
    </>
  );
};

export default Categories;
