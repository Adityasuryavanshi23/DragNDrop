import { Accordion, AccordionItem } from "@heroui/react";
import useCanvasState from "../../store/ZusStore";
import EditCanvasItem from "./EditCanvasItem";

const EditableContent = () => {
  const { canvasState } = useCanvasState((store) => store);

  return (
    <Accordion variant="splitted">
      {canvasState.map((item) => (
        <AccordionItem key={item.id} aria-label="Accordion 1" title={item.type}>
          <EditCanvasItem item={item} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default EditableContent;
