import { Draggable } from "react-beautiful-dnd";

export const LeftSideBar = () => {
  const items = [
    { id: "image", content: "Image" },
    { id: "button", content: "Button" },
    { id: "input", content: "Input" },
  ];
  const getItemStyle = (draggableStyle, isDragging) => ({
    userSelect: "none",
    background: isDragging ? "lightgreen" : "grey",
    ...draggableStyle,
  });
  return (
    <div className="w-[250px]  min-h-full border text-center overflow-auto p-2  ">
      <div className="flex flex-col ">
        {items.map((item) => (
          <Draggable key={item.id} draggableId={item.id}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  provided.draggableStyle,
                  snapshot.isDragging
                )}
              >
                {item.content}
                {provided.placeholder}
              </div>
            )}
          </Draggable>
        ))}
      </div>
    </div>
  );
};
