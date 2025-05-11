import React from "react";

const InputContent = ({ item }) => {
  return (
    <input
      type={item.data.type || "text"}
      style={{
        fontSize: item.data.fontsize + "px",
        color: item.data.color || "black",
      }}
      placeholder={item.data.placeholder || "Enter text"}
      className={`border  ${
        item.data.type === "color" ? "" : "p-2"
      } rounded-md`}
    />
  );
};

export default InputContent;
