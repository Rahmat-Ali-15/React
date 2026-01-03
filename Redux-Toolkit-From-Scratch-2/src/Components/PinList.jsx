import { useDispatch, useSelector } from "react-redux";
import { completeTodo, completeTodoChecked } from "../Reducer/Reducer";

export const PinList = () => {
  const dispatch = useDispatch()
  const pin = useSelector(completeTodoChecked);

  const handleUnPin = (id) => {
    dispatch(completeTodo(id));
  };

  console.log("🚀 ~ pin:", pin);
  return (
    <>
    <h1>Pin List</h1>
    <div className="pinList-container">
        {pin &&
          pin.map((el, i) => (
            <div
              key={i}
              className={`pinList-content ${el.isComplete ? "completed" : ""}`}
              
            >
              <input
                type="checkbox"
                checked={el.isComplete}
                onChange={() => handleUnPin(el.id)}
              />
              <p>{el.id}</p>
              <p>{el.text}</p>
              <div>
                <button disabled>Edit</button>
                <button disabled>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
