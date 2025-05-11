import { Input, Select, SelectItem } from "@heroui/react";
import EditRemoveFeature from "./EditRemoveFeature";
import useCanvasState from "../../store/ZusStore";
import { Form, Formik } from "formik";
const EditInputContent = ({ item }) => {
  const updateElement = useCanvasState((state) => state.updateElement);
  const removeElement = useCanvasState((state) => state.removeElement);
  const initialValues = {
    placeholder: item?.data?.placeholder || "text",
    fontsize: item?.data?.fontsize || "13px",
    color: item?.data?.color || "aqua",
    type: item?.data?.type || "text",
  };

  const texttypes = [
    { key: "text", label: "Text" },
    { key: "number", label: "Number" },
    { key: "color", label: "Color" },
  ];

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
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ handleChange, handleBlur, values, setFieldValue }) => (
        <Form className="flex flex-col gap-2">
          {console.log(values)}
          <Input
            onChange={handleChange}
            name="placeholder"
            value={values.placeholder}
            onBlur={handleBlur}
            label="placeholder"
            size="sm"
            type="text"
          />

          <Select
           defaultSelectedKeys={[values.type]}
            onChange={(e) => setFieldValue("type", e.target.value)}
            className="max-w-xs"
            label="Select an type"
          >
            {texttypes.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>

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
            <label
              htmlFor="textcolor"
              className={`text-[13px] ${values.color} `}
            >
              text Color
            </label>
            <input
              onChange={handleChange}
              name="color"
              onBlur={handleBlur}
              value={values.color}
              label="text color"
              size="sm"
              id="textcolor"
              type="color"
            />
          </div>

          <EditRemoveFeature handleRemove={handleRemove} />
        </Form>
      )}
    </Formik>
  );
};

export default EditInputContent;
