import { CustomForm } from "./CustomForm"

export const Form = () => {

    const field = [
        {
            name: "username",
            type : "text",
            placeholder : "Enter username",
            label : "username",
            required : true
        },
        {
            name: "email",
            type : "email",
            placeholder : "Enter email",
            label : "email",
            required : true
        },
        {
            name: "password",
            type : "password",
            placeholder : "Enter password",
            label : "password",
            required : true
        },
        {
            name: "confirmPassword",
            type : "password",
            placeholder : "Enter confirm password",
            label : "confirmPassword",
            required : true
        },
        {
            name: "phone",
            type : "tel",
            placeholder : "Enter phone number",
            label : "phone",
            required : true
        }
    ];

    const handleFormSubmit = (data) => {
        console.log(data)
    }

    return(
        <>
            <h1>React Form with props validation</h1>

            <CustomForm field = {field} onSubmit = {handleFormSubmit} buttonText = "Register" />
        </>
    )
}