
import { useState } from 'react'
import { PinItems } from './PinItems';
import  PropTypes  from 'prop-types';

export const InputBox = ({length, style}) => {

    const [values, setValues] = useState(new Array(length).fill(0))
    console.log("🚀 ~ values:", values);

  return (
    <>
      {
        values.map((items, index) => <PinItems style = {style} key = {index} />)
      }
    </>
  )
}

InputBox.prototype = {
    label: PropTypes.string.isRequired
}

InputBox.defaultProps = {
    label : "Hello"
}
