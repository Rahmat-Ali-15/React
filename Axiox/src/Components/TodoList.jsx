/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";

const getData = async (url) => {
  try {
    let res = await axios.get(url);
    // console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const TodoList = (props) => {
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log(apiData, "this is data");
  let api = `https://api-database-1.onrender.com/Todo`;

  const handleEdit = async (id) => {
    try {
      let updateEdit = {
        isEdit: true,
      };
      await axios.patch(`${api}/${id}`, updateEdit);
      setApiData((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, ...updateEdit } : todo))
      );
    } catch (error) {
      console.log(error, "error");
    }
  };

  const handleDel = async (id) => {
    await axios.delete(`${api}/${id}`);
    setApiData((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res1 = await getData(api);
        setApiData(res1);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [props.props]);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>404Error...</h1>;

  return (
    <>
      <h1>Todo List</h1>
      {apiData?.map((el) => (
        <div
          className="todoListTask"
          key={el.id}
        >
          <input
            type="checkbox"
            name="checkBox"
          />
          {/* <h1>{el.todo}</h1> */}
          {el.isEdit ? (
            <input
              type="text"
              value={el.todo}
              onChange={(e) =>
                setApiData((prev) =>
                  prev.map((item) =>
                    item.id === el.id ? { ...item, todo: e.target.value } : item
                  )
                )
              }
            />
          ) : (
            <h1>{el.todo}</h1>
          )}
          <button
            className="btn-edit"
            onClick={() => handleEdit(el.id)}
          >
            Edit
          </button>
          <button
            onClick={() => handleDel(el.id)}
            className="btn-del"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};
