import React from "react";

export default function Label(props) {
  const { children } = props;
  return (
    <label {...props} className="text-md font-semibold text-gray-500">
      {children}
    </label>
  );
}
