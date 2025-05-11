import { useCallback } from "react";
import EditImageContent from "./EditImageContent";
import EditButtonContent from "./EditButtonContent";
import EditInputContent from "./EditInputContent";

const EditCanvasItem = ({ item }) => {
  const rendeContent = useCallback(() => {
    switch (item.type) {
      case "image":
        return <EditImageContent item={item} />;
      case "button":
        return <EditButtonContent item={item} />;
      case "input":
        return <EditInputContent item={item} />;
      default:
        return null;
    }
  }, [item]);
  return <div className="p-2 ">{rendeContent()}</div>;
};

export default EditCanvasItem;
