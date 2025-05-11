const EditRemoveFeature = ({ handleRemove }) => {
  return (
    <div className="flex justify-end items-center gap-3">
      <button className="w-4 h-4 grid place-content-center" type="submit">
        <i class="text-[16px] cursor-pointer fa-solid fa-floppy-disk"></i>
      </button>
      <i
        class="  text-[16px] cursor-pointer fa-solid fa-trash"
        onClick={handleRemove}
      ></i>
    </div>
  );
};

export default EditRemoveFeature;
