import { useState } from "react"
import PropTypes from 'prop-types';

export const CustomForm = ({field, onSubmit, buttonText}) => {

    const [formData, setFormData] = useState(() => {
        return field.reduce((acc,current) => {
            acc[current.name] = "";
            return acc;
        },{});
    });
    console.log(formData);
    console.log(setFormData);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value,
        }));
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                {
                    field && field.map((el,i) =>(
                        <div key={i}>
                            <label htmlFor={el.name}>{el.label}</label>
                            <input
                             type={el.type} 
                             name={el.name} 
                             placeholder={el.placeholder}
                             required = {el.required}
                             value={formData[el.name]}
                             onChange={(e)=>handleChange(e)}
                            />
                        </div>
                    ))
                }
                <button type="submit">{buttonText}</button>
            </form>
        </>
    )
};

CustomForm.propTypes = {
  field: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      label: PropTypes.string.isRequired,
      required: PropTypes.bool,
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};