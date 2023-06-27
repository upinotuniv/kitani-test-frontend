import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../templates/MainLayout";
import Card from "../organisms/Card";
import Button from "../atoms/Button";
import AddProduct from "../molecules/Form/FormAddProduct";

export default function App() {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/product");
        console.log("Product Data: ", data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {show && <AddProduct setShow={setShow} show={show} />}

      <div className="flex justify-between items-center w-full bg-white drop-shadow-md p-4">
        <h1 className="text-2xl font-black text-gray-900 uppercase">
          Fruit Stock
        </h1>
        <div className="w-1/2 pl-16 2xl:w-1/5">
          <Button color="bg-black" onClick={() => setShow(true)}>
            Add Product
          </Button>
        </div>
      </div>
      <MainLayout>
        {product.data &&
          product.data.map((products, i) => (
            <Card key={i}>
              <Card.Body
                src={`http://localhost:5000/${products.sku_image}`}
                sku_code={products.sku_code}
                sku_name={products.sku_name}
                amount={products.amount}
              />
              <Card.Footer>
                {products.amount === 0 ? (
                  <Button
                    onClick={() => {
                      window.location.href = `add-product-stock/${products.sku_code}`;
                    }}
                  >
                    Add Stock
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => {
                        window.location.href = `add-product-stock/${products.sku_code}`;
                      }}
                    >
                      Add Stock
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.href = `deduct-product-stock/${products.sku_code}`;
                      }}
                      color="bg-orange-500"
                    >
                      Deduct Stock
                    </Button>
                  </>
                )}
              </Card.Footer>
            </Card>
          ))}
      </MainLayout>
    </div>
  );
}
