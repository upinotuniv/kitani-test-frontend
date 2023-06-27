import React, { useState, useEffect } from "react";
import axios from "axios";
import MainLayout from "../templates/MainLayout";
import Card from "../organisms/Card";
import Button from "../atoms/Button";

export default function App() {
  const [product, setProduct] = useState([]);

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
  );
}
