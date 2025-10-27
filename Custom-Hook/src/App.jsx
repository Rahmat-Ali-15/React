import './App.css'
import { useFetch } from './Hook/useFetch';
import { useToggle } from './Hook/useToggle';

export function App() {

  const BASE_URL = `https://jsonplaceholder.typicode.com/posts`;

  const [value, toggleValue] = useToggle(true);
  const [data, toggleData] = useToggle(true);
  const {datas, error, loading} = useFetch(BASE_URL);

  return (
    <>
      <button onClick={toggleValue}>Toggle Handling</button>
      <button onClick={()=> toggleValue(false)}>Hide Heading</button>
      <button onClick={()=> toggleValue(true)}>Show Heading</button>

      {value? <h1>Custom Hook</h1> : null}

      <button onClick={toggleData}>Toggle Heading</button>
      <button onClick={()=>toggleData(false)}>Hide Heading</button>
      <button onClick={()=>toggleData(true)}>Show Heading</button>

      {data? <h1>second Hook data</h1> : null}

      <div className="fetch">
        <h1>Custom react hook [data fetching]</h1>
        {loading && <h3>loading...</h3>}
        {error && <h3>Error: Something went wrong...</h3>}
        {datas.length}
        <pre>{JSON.stringify(datas, null, )}</pre>
      </div>
    </>
  );
}
