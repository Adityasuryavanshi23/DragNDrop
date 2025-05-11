import DummyImage from "../../assets/dummy.webp";
const ImageContent = ({ item }) => {
  return (
    <img
      style={{ width: item.data.width, height: item.data.height }}
      src={item.data.image || DummyImage}
      alt={item.id}
      className="w-full h-full"
    />
  );
};

export default ImageContent;
