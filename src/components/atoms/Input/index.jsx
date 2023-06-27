import React from "react";

export default function Input(props) {
  const { ring = "focus:ring-lime-300" } = props;
  return (
    <input
      {...props}
      className={`w-full text-sm 2xl:text-md transition duration-500 py-2 px-4 outline-none bg-gray-200 rounded-lg focus:ring ${ring}`}
    />
  );
}
