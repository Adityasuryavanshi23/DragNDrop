import  { useCallback } from "react";
import ImageContent from "./CanvasContent/ImageContent";
import ButtonContent from "./CanvasContent/ButtonContent";
import InputContent from "./CanvasContent/InputContent";

const CanvasItem = ({ item }) => {
  const rendeContent = useCallback(() => {
    switch (item.type) {
      case "image":
        return <ImageContent item={item} />;
      case "button":
        return <ButtonContent item={item} />;
      case "input":
        return <InputContent item={item} />;
      default:
        return null;
    }
  }, [item]);
  return <div className="p-3 m-3">{rendeContent()}</div>;
};

export default CanvasItem;
