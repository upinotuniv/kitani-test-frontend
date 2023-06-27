import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import AmountLayout from "../templates/AmountLayout";
import Button from "../atoms/Button";

export default function Success() {
  const [product, setProduct] = useState([]);
  const [message, setMessage] = useState("");
  const { sku_code } = useParams();

  useEffect(() => {
    const getSkuCode = async (sku_code) => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/product/${sku_code}`
        );
        setProduct(data.data);
        setMessage(data.message);
      } catch (error) {
        console.log(error);
      }
    };

    getSkuCode(sku_code);
  }, []);

  return (
    <AmountLayout>
      <div className="flex flex-col justify-start items-start w-full h-full sm:w-full 2xl:w-1/2 bg-white border-2 drop-shadow-lg p-10 gap-y-5 rounded-lg">
        <div className="flex flex-col justify-start items-start w-full gap-y-2">
          <h1 className="text-xl font-bold uppercase">Add Stock</h1>
          <h1 className="text-lg font-bold uppercase text-green-500">
            Success
          </h1>
          <h1 className="text-gray-500 font-semibold text-md">
            {product.sku_code}
          </h1>
          <h1 className="font-bold text-xl">{product.sku_name}</h1>
          <p className="text-gray-500 font-medium text-xl">Status: {message}</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <Button onClick={() => (window.location.href = "/")}>OK</Button>
        </div>
      </div>
    </AmountLayout>
  );
}
