
const generateImageObject = (data) => {
  const {width = "" , height ="" , image = ""} = data || {}
  return {
    width: width || 200,
    height: height || 200,
    image : image || ""
  };
};

const generateButtonObject = (data) => {
  const {buttonName = "" , fontsize = "" , bgColor = "" , width  , color} = data || {}
  return {
    buttonName: buttonName || "button",
    width: width || 200,
    fontsize:fontsize ||  13,
    bgColor: bgColor || "#f52783",
    color:color || "#fff"
  };
};

const generateinputObject = (data) => {
  const {type="" , fontsize = "" , color = "",placeholder = "" } = data || {}
  return ({
    type: type || "text",
    fontsize: fontsize || 13,
    color : color || '#00ffff' , 
    placeholder: placeholder || ""
    
  });
};

const generateObject = (type, data) => {
  let result = null;
  switch (type) {
    case "image":
      result = generateImageObject(data);
      break;
    case "button":
      result = generateButtonObject(data);
      break;
    case "input":
      result = generateinputObject(data);
      break;
  }
  return result;
};

export { generateImageObject, generateButtonObject, generateinputObject , generateObject };

// type: Image
//    props: width , height , (button for changing image)
//    object : {
//     width: 200,
//     height: 200,
//     image : ""
//    }

// type: button
//    props: buttonName , fontsize , bacground color ;
//    object : {
//     buttonName: "button",
//     fontsize: "13px",
//     bgColor: "" 
//    }


// type: Input
//    props: type , fontsize , color
//    object : {
//     type: 200,
//     fontsize: 200,
//     color : ""
//    }
