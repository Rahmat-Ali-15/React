import PropTypes from "prop-types";
import React from "react";

const style = {
  width: "70px",
  height: "70px",
  border: "2px solid gray",
  margin: "10px",
  padding: "10px",
  textAlign: "center",
  borderRadius: "10px",
};

export const PinItems = React.forwardRef(({ max, onChange, onBackspace, onPaste }, ref) => {
  const handleKeyDown = (e) => {
    console.log("🚀 ~ e:", e);

    switch (e.keyCode) {
      case 8:
          // return onchange()
      if (e.target.value === "") {
        onBackspace();
      }
      break

      case 9:
        // for tab behave default
        e.preventDefault();
        break;

      default:
        onChange(e.target.value);
    }
  };

  const handlePaste = (e) => {
      e.preventDefault();
      const pasted = e.clipboardData.getData("text");
      onPaste(pasted);
    };

  return (
    <>
      <input
        className="input-box"
        ref={ref}
        type="text"
        style={style}
        maxLength={max}
        onKeyUp={handleKeyDown}
        onPaste={handlePaste}
      />
    </>
  );
});

PinItems.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
