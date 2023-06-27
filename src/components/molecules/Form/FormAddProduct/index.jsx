import React, { useState } from "react";
import Button from "../../../atoms/Button";
import Label from "../../../atoms/Label";
import Input from "../../../atoms/Input";
import axios from "axios";

export default function AddProduct({ show, setShow }) {
  const [form, setForm] = useState({
    sku_code: "",
    sku_name: "",
    sku_image: null,
    amount: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "sku_image") {
      setForm({ ...form, [e.target.name]: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    // request data
    formData.append("sku_code", form.sku_code);
    formData.append("sku_name", form.sku_name);
    formData.append("sku_image", form.sku_image);
    formData.append("amount", parseInt(form.amount));

    try {
      await axios.post("http://localhost:5000/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setShow(false);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center fixed inset-0 bg-black/80 z-20 w-full">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg w-[80%] 2xl:w-1/4">
        <div className="flex justify-start items-center w-full border-b border-gray-500 p-4">
          <h1 className="text-xl font-bold">Add Product</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center w-full gap-y-4 px-4 py-2">
            <div className="flex flex-col w-full gap-y-1">
              <Label htmlFor="sku_code">SKU Code</Label>
              <Input
                type="text"
                placeholder="SKU - 0001"
                name="sku_code"
                value={form.sku_code}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <Label htmlFor="sku_name">SKU Name</Label>
              <Input
                type="text"
                placeholder="Product name"
                name="sku_name"
                value={form.sku_name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <Label htmlFor="sku_image">SKU Image</Label>
              <Input
                type="file"
                name="sku_image"
                accept="image/png, image/jpg, image/jpeg"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col w-full gap-y-1">
              <Label htmlFor="sku_code">Amount</Label>
              <Input
                type="number"
                min={0}
                placeholder="0"
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full px-10 py-5 gap-x-5">
            <Button color="bg-red-500" onClick={() => setShow(false)}>
              No
            </Button>
            <Button>Yes</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
