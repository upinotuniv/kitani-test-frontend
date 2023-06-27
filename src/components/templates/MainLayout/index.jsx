import React from "react";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <div className="flex flex-col justify-center items-center w-full p-10 bg-lime-300 gap-y-10 ">
      {children}
    </div>
  );
}
