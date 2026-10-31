import React from "react";

export const PinItems = React.forwardRef(
  ({ style, max, handleChange, handleBackSpace }, ref) => {
    const handleKeyUp = (e) => {
      switch (e.keyCode) {
        case 8:
          handleBackSpace();
          break;
        default:
          handleChange(e.target.value);
      }
    };

    return (
      <>
        <input
          ref={ref}
          style={style}
          maxLength={max}
          onKeyUp={handleKeyUp}
        />
      </>
    );
  },
);
