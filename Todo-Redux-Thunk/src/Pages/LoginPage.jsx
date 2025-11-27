import { field } from "../Redux/auth/Action";

export const LoginPage = () => {
  return (
    <>
      <form
        action=""
        className="login-form"
      >
        {field &&
          field.slice(1).map((el, i) => (
            <div
              key={i}
              className="input-group"
            >
              <label htmlFor={el.label}>{el.label}</label>
              <input
                type={el.type}
                placeholder={el.placeholder}
                name={el.name}
                required={el.required}
                autoComplete={el.autocomplete}
              />
            </div>
          ))}
        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>
      </form>
    </>
  );
};
