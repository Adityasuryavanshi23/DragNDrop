import EditableContent from "./EditableContent";

export const RigthSideBar = () => {
  return (
    <div className=" border h-full  text-center overflow-auto text-3xl font-mono">
      <h3>Edit</h3>
      <EditableContent />
    </div>
  );
};
