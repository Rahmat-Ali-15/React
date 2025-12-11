import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PinItems } from "./PinItems";

export const InputBox = ({ label, length, perBox }) => {
  console.log("🚀 ~ label:", label);
  const [data, setData] = useState(new Array(length).fill(""));

  const element = useRef(new Array(length).fill(0));

  const handleAddFunc = (values, index) => {
    const val = [...data];
    val[index];
    setData(val);
    if (index < length - 1) {
      element.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (index) => {
    if (index > 0) {
      element.current[index - 1]?.focus();
    }
  };


  const handlePasteFunc = (pasteValue, index) => {
  let chars = pasteValue.split("");

  const updated = [...data];

  for (let i = 0; i < chars.length && index + i < length; i++) {
    updated[index + i] = chars[i];
    element.current[index + i].value = chars[i];
  }

  setData(updated);

  // Focus last filled box
  const lastIndex = Math.min(index + chars.length - 1, length - 1);
  element.current[lastIndex]?.focus();
};



  return (
    <>
      {data &&
        data.map((el, index) => {
          return (
            <PinItems
              ref={(n) => (element.current[index] = n)}
              max={perBox}
              key={index}
              onChange={(values) => handleAddFunc(values, index)}
              onBackspace={() => handleBackspace(index)}
              onPaste={(val) => handlePasteFunc(val, index)}
            />
          );
        })}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};
