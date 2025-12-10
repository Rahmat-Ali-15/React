import PropTypes from "prop-types";
import React from "react";

const style = {
  width: "50px",
  height: "50px",
  border: "2px solid gray",
  margin: "10px",
  padding: "10px",
  textAlign: "center",
};

export const PinItems = React.forwardRef(({ max, onChange }, ref) => {
  const handleKeyDown = (e) => {
    console.log("🚀 ~ e:", e);

    switch (e.keyCode) {
      // case 8:
      //     return onchange()

      case 9:
        // for tab behave default
        e.preventDefault();
        break;

      default:
        onChange(e.target.value);
    }
  };

  return (
    <>
      <input
        ref={ref}
        type="text"
        style={style}
        maxLength={max}
        onKeyUp={handleKeyDown}
      />
    </>
  );
});

PinItems.propTypes = {
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
