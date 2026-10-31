import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { PinItems } from "./Pinitems";

export const InputBox = ({ setMainVal, perBox, length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    if (v && i < length - 1) {
      elements.current[i + 1]?.focus();
      setMainVal(vals.join(""));
    }
  };

  const handleBackSpace = (i) => {
    console.log("🚀 ~ values:", values);
    const vals = [...values];

    vals[i] = "";
    setValues(vals);
    if (i === 0) return;
    elements.current[i - 1].focus();
    setMainVal(vals.join(""));
  };

  return (
    <>
      {values.map((item, index) => (
        <PinItems
          ref={(v) => (elements.current[index] = v)}
          style={style}
          key={index}
          max={perBox}
          handleChange={(dataVal) => handleChange(dataVal, index)}
          handleBackSpace={() => handleBackSpace(index)}
        />
      ))}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};

InputBox.defaultProps = {
  label: "hello",
  length: 3,
  perBox: 1,
};
