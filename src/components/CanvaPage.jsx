import { Droppable } from "react-beautiful-dnd";

export const CanvaPage = () => {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    width: 250,
  });
  return (
    <>
      <div className="max-w-[700px] min-h-[80vh] w-full border border-black text-center px-4 ">
        <h1 className="capitalize relative top-16 text-4xl font-mono ">
          display your content here
        </h1>
        <div className="min-h-[500px] w-full bg-gray-200 shadow-lg border rounded-md mt-24  ">
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={getListStyle(snapshot.isDraggingOver)}
              ></div>
            )}
          </Droppable>
        </div>
      </div>
    </>
  );
};
