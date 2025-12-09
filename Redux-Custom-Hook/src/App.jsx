import "./App.css";
import { useFetch } from "./Hook/useFetch";
import { useLocalStorage } from "./Hook/useLocalStorage";
import { useTimer } from "./Hook/useTimer";
import { useToggle } from "./Hook/useToggle";

export function App() {
  const BASE_URL = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

  const { time, startTimer, stopTimer, resetTimer } = useTimer();

  const [name, setName] = useLocalStorage("username", "");

  const [value, toggleValue] = useToggle(true);
  const [data, toggleData] = useToggle(true);

  const { datas, error, loading } = useFetch(BASE_URL);

  return (
    <>
      <button onClick={toggleValue}>Toggle Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>

      {value ? <h1>Custom Hook</h1> : null}
      <hr />


      <button onClick={toggleData}>Toggle Heading</button>
      <button onClick={() => toggleData(false)}>Hide Heading</button>
      <button onClick={() => toggleData(true)}>Show Heading</button>

      {data ? <h1>Second hook data</h1> : null}


      <div className="fetch">
        <h1>Custom react hook [data fetching]</h1>
        {loading && <h3>Loading...</h3>}
        {error && <h3>Error: Something went wrong...</h3>}
        {datas.length}
        <pre>{JSON.stringify(datas, null, 2)}</pre>
      </div>

      {/* local storage */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Saved Name: {name}</p>


      {/* this is timer */}
      <h2>Time: {time}s</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
