import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useCanvasState from "../store/ZusStore";
import CanvasItem from "./CanvasItem";
import { generateObject } from "../utils";
import { RigthSideBar } from "./RigthSideBar";

// Define item types
const ItemTypes = {
  SIDEBAR_ITEM: "sidebarItem",
  CANVAS_ITEM: "canvasItem",
};

// Draggable item component
const DraggableItem = ({ id, content, isDraggable = true, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.SIDEBAR_ITEM,
    item: { id, content, type },
    canDrag: isDraggable,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const style = {
    userSelect: "none",
    padding: "10px",
    margin: "0 0 8px 0",
    color: "white",
    textTransform: "uppercase",
    borderRadius: "5px",
    background: isDragging ? "lightgreen" : "#f52783",
    cursor: isDraggable ? "grab" : "default",
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={drag} style={style}>
      {content}
    </div>
  );
};

// The main component that will be exported
const CanvasState = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <CanvasContent />
    </DndProvider>
  );
};

// The actual content component that uses the DnD hooks
const CanvasContent = () => {
  const [sidebarItems] = useState([
    { id: "image", type: "image", content: "Image" },
    { id: "button", type: "button", content: "Button" },
    { id: "input", type: "input", content: "Input" },
  ]);

  const { canvasState, addToCanvasState } = useCanvasState((store) => store);
  const [isOver, setIsOver] = useState(false);

  // Setup droppable for canvas
  const [{ isOver: dropIsOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SIDEBAR_ITEM,
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
    hover: (item, monitor) => {
      setIsOver(monitor.isOver());
    },
  }));

  // Update isOver state when the drop monitor changes
  React.useEffect(() => {
    setIsOver(dropIsOver);
  }, [dropIsOver]);

  const handleDrop = (item) => {
    console.log("Item dropped:", item);
    // Check if the item is from sidebar
    const sidebarItem = sidebarItems.find((sItem) => sItem.id === item.id);
    if (sidebarItem) {
      // Create a new item with unique ID
      const newItem = {
        id: `${sidebarItem.id}-${Date.now()}`,
        type: item.type,
        data: generateObject(item.type),
      };
      // Add to canvas
      addToCanvasState(newItem);
      console.log("Added item to canvas:", newItem);
    }
    setIsOver(false);
  };
  console.log("Canvas State:", canvasState);
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 max-sm:p-4   max-w-screen-xl m-auto">
      {/* Sidebar */}
      <div className=" min-h-full border text-center overflow-hidden p-2">
        <div className="bg-gray-100 p-2 min-h-24">
          {sidebarItems.map((item) => (
            <DraggableItem
              key={item.id}
              id={item.id}
              content={item.content}
              type={item.type}
            />
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1">
        <div className="max-w-3xl min-h-screen w-full border border-black text-center px-4">
          <h1 className="capitalize relative top-16 text-4xl font-mono">
            display your content here
          </h1>
          <div
            ref={drop}
            className={`w-full shadow-lg border rounded-md mt-24 p-2 transition-colors duration-200 min-h-96 ${
              isOver ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            {isOver && (
              <div className="text-green-600 font-bold mb-2">✅ Drop here!</div>
            )}
            {canvasState.map((item) => (
              <CanvasItem item={item} />
            ))}
          </div>
        </div>
      </div>

      <RigthSideBar />
    </div>
  );
};

export default CanvasState;
