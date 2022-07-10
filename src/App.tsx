import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  incremented,
  incrementByAmount,
} from "./features/counter/couter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(incremented());
    dispatch(incrementByAmount({ her: 3 }));
  };
  const [dogNum, setDogNum] = React.useState<number>(10);

  const { data = [], isFetching } = useFetchBreedsQuery(dogNum);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={handleClick} type="button">
            count is: {count}
          </button>
        </p>
        <select
          value={dogNum}
          onChange={(e) => setDogNum(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <div>
          <p>Number of dogs fetched {data.length}</p>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt="" height="150px" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
