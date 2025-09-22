import React from 'react'

import {CustomComponent} from "./CustomComponent"

export const Form = () => {

    const field = [
        {
            name: "username",
            placeholder : "Enter your username",
            type : "text",
            label : "username",
            required : true
        },
        {
            name: "email",
            placeholder : "Enter your email",
            type : "email",
            label : "email",
            required : true
        },
        {
            name: "password",
            placeholder : "Enter your password",
            type : "password",
            label : "password",
            required : true
        },
        {
            name: "confirm_password",
            placeholder : "Enter your confirm_password",
            type : "password",
            label : "confirm password",
            required : true
        },
        {
            name: "Phone",
            placeholder : "Enter your phone",
            type : "tel",
            label : "phone",
            required : true
        }
    ]

  return (
    <>
      <CustomComponent props = {field} />
    </>
  )
}

