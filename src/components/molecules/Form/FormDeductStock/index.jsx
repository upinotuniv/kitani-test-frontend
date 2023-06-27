import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import Label from "../../../atoms/Label";

export default function FormDeductStock(props) {
  const { title } = props;
  const [product, setProduct] = useState([]);
  const [deduct, setDeduct] = useState();
  const { sku_code } = useParams();

  useEffect(() => {
    const getSkuCode = async (sku_code) => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/product/${sku_code}`
        );
        setProduct(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getSkuCode(sku_code);
  }, []);

  const handleSubmit = async (sku_code) => {
    try {
      if (deduct > product.amount) {
        window.location.href = `/response/failed/${sku_code}`;
      } else {
        const { data } = await axios.post(
          `http://localhost:5000/product/${sku_code}/deduct-stock`,
          {
            amount: parseInt(deduct),
          }
        );
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full 2xl:w-1/2 flex flex-col border-2 drop-shadow-lg rounded-md bg-white gap-y-16 py-10 px-5">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="text-2xl font-bold uppercase">{title}</h1>
        <h1 className="text-lg font-semibold text-gray-500">
          {product.sku_code}
        </h1>
        <h1 className="text-4xl font-bold">{product.sku_name}</h1>
      </div>
      <form
        className="flex flex-col justify-start items-start w-full gap-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(product.sku_code);
        }}
      >
        <div className="flex flex-col justify-start items-start w-full">
          <Label htmlFor="deduct">Amount</Label>
          <Input
            type="number"
            min={0}
            value={deduct}
            onChange={(e) => setDeduct(e.target.value)}
            ring="focus:ring-orange-300"
          />
        </div>
        <Button type="submit" color="bg-orange-500">
          Submit
        </Button>
      </form>
    </div>
  );
}
