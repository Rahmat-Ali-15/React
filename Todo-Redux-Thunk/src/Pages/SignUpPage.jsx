import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getSignUpFailure, getSignUpSuccess } from "../Redux/auth/Action";
import { useNavigate } from "react-router";

import { field } from "../Redux/auth/Action";


let api = "http://localhost:3000/user";

export const SignUpPage = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    field.reduce((acc, current) => {
      acc[current.name] = "";
      return acc;
    }, {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(api, formData)
      .then((res) => dispatch(getSignUpSuccess(res.data)))
      .catch((err) => dispatch(getSignUpFailure(err)));
      navigate("/login"); 
    // onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="signup-form"
      >
        {field &&
          field.map((el, i) => (
            <div
              className="input-group"
              key={i}
            >
              <label htmlFor={el.label}>{el.label}</label>
              <input
                type={el.type}
                name={el.name}
                placeholder={el.placeholder}
                required={el.required}
                autoComplete={el.autocomplete}
                style={{ marginBottom: "10px" }}
                onChange={handleChange}
              />
            </div>
          ))}
        <button type="submit" className="submit-btn" >Create Account</button>
      </form>
    </>
  );
};
