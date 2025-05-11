import React from "react";

const ButtonContent = ({ item }) => {
  return (
    <button
      style={{
        backgroundColor: item.data.bgColor,
        fontSize: item.data.fontsize + "px",
        width: item.data.width + "px",
        color: item.data.color,
      }}
      className=" rounded-md p-2  "
    >
      {item.data.buttonName}
    </button>
  );
};

export default ButtonContent;
