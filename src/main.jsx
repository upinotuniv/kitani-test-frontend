import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/pages";
import Error from "./components/pages/404";
import AddProductStock from "./components/pages/add-product-stock";
import DeductProductStock from "./components/pages/deduct-product-stock";
import Success from "./components/pages/success";
import Failed from "./components/pages/failed";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/add-product-stock/:sku_code",
    element: <AddProductStock />,
  },
  {
    path: "/deduct-product-stock/:sku_code",
    element: <DeductProductStock />,
  },
  {
    path: "/response/success/:sku_code",
    element: <Success />,
  },
  {
    path: "/response/failed/:sku_code",
    element: <Failed />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
