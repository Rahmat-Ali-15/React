import React, { useState } from 'react'

export const CustomComponent = ({ props }) => {

  console.log(props, "Props h re")

  const [formData, setFormData] = useState(
    props.reduce((acc, current) => {
      console.log(current)
      acc[current.name] = ""
      return acc
    })
  )
  console.log(formData);
  console.log(setFormData);

  return (
    <>
      <h1>CustomComponent</h1>
      <form>
        {
          props.map(el => (
            <div key={el.name}>
              <label htmlFor={el.label} style={{"textTransform":"capitalize"}}>{el.label}</label>
              <input type={el.type} name={el.name} placeholder={el.placeholder} required={el.required} />
            </div>
          ))
        }
      </form>
    </>
  )
}

