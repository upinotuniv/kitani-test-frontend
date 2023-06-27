import React from "react";

export default function Card(props) {
  const { children } = props;
  return (
    <div className="w-full 2xl:w-1/2 flex flex-col justify-center items-center border-2 drop-shadow-lg rounded-md bg-white gap-y-10 py-10">
      {children}
    </div>
  );
}

function Body(props) {
  const { src, sku_code, sku_name, amount } = props;
  return (
    <div className="flex flex-1 justify-center items-center w-full px-2 gap-x-4">
      <div className="flex flex-1 justify-center items-center">
        <img src={src} alt="image" />
      </div>
      <div className="flex flex-1 flex-col justify-start items-start">
        <h1 className="text-xs font-semibold text-gray-500">{sku_code}</h1>
        <h1 className="text-md font-bold">{sku_name}</h1>
        <h1 className="text-sm font-semibold">QTY: {amount}</h1>
      </div>
    </div>
  );
}

function Footer(props) {
  const { children } = props;
  return (
    <div className="flex flex-1 justify-center items-center w-full gap-x-5 px-5">
      {children}
    </div>
  );
}

Card.Body = Body;
Card.Footer = Footer;
