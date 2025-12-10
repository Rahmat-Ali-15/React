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
