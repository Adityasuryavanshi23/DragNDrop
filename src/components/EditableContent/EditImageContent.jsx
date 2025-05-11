import { Input } from "@heroui/react";
import EditRemoveFeature from "./EditRemoveFeature";
import useCanvasState from "../../store/ZusStore";
import { Form, Formik } from "formik";
const EditImageContent = ({ item }) => {
  const updateElement = useCanvasState((state) => state.updateElement);
  const removeElement = useCanvasState((state) => state.removeElement);
  const initialValues = {
    width: item?.data?.width || 200,
    height: item?.data?.height || 200,
    image: item?.data?.image || "",
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
            name="width"
            onBlur={handleBlur}
            label="Image Width"
            value={values.width}
            size="sm"
            type="number"
          />
          <Input
            onChange={handleChange}
            name="height"
            onBlur={handleBlur}
            value={values.height}
            label="Image Height"
            size="sm"
            type="number"
          />
          <Input
            onChange={handleChange}
            name="image"
            onBlur={handleBlur}
            value={values.image}
            label="Put Image URL"
            size="sm"
            type="text"
          />

          <EditRemoveFeature handleRemove={handleRemove} />
        </Form>
      )}
    </Formik>
  );
};

export default EditImageContent;
