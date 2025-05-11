import { Input } from "@heroui/react";
import EditRemoveFeature from "./EditRemoveFeature";
import useCanvasState from "../../store/ZusStore";
import { Form, Formik } from "formik";

const EditButtonContent = ({ item }) => {
  const updateElement = useCanvasState((state) => state.updateElement);
  const removeElement = useCanvasState((state) => state.removeElement);
  const initialValues = {
    buttonName: item?.data?.buttonName || "button",
    width: item?.data?.width || 200,
    fontsize: item?.data?.fontsize || "13px",
    bgColor: item?.data?.bgColor || "white",
    color: item?.data?.color || "black",
  };
  const handleSubmit = (values) => {
    console.log(values);
    updateElement({
      ...item,
      data: {
        ...item.data,
        ...values,
      },
    });
  };
  const handleRemove = () => {
    removeElement(item.id);
  };
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ handleChange, handleBlur, values }) => (
        <Form className="flex flex-col gap-2">
          {console.log(values)}
          <Input
            onChange={handleChange}
            name="buttonName"
            value={values.buttonName}
            onBlur={handleBlur}
            label="Button Name"
            size="sm"
            type="text"
          />
          <Input
            onChange={handleChange}
            name="width"
            onBlur={handleBlur}
            label="Width"
            value={values.width}
            size="sm"
            type="number"
          />
          <Input
            onChange={handleChange}
            name="fontsize"
            onBlur={handleBlur}
            value={values.fontsize}
            label="Font Size"
            size="sm"
            type="number"
          />
          <div className="flex justify-start items-center gap-2">
            <label htmlFor="bgColor" className="text-[13px]">
              Background Color
            </label>
            <input
              onChange={handleChange}
              name="bgColor"
              onBlur={handleBlur}
              value={values.bgColor}
              label="Background color"
              size="sm"
              id="bgColor"
              type="color"
            />
          </div>
          <div className="flex justify-start items-center gap-2">
            <label htmlFor="bgColor" className="text-[13px]">
              Text Color
            </label>
            <input
              onChange={handleChange}
              name="color"
              onBlur={handleBlur}
              value={values.color}
              label="Text color"
              size="sm"
              id="color"
              type="color"
            />
          </div>

          <EditRemoveFeature handleRemove={handleRemove} />
        </Form>
      )}
    </Formik>
  );
};

export default EditButtonContent;
