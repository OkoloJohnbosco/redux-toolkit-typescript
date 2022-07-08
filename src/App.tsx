import logo from "./logo.svg";
import "./App.css";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  incremented,
  incrementByAmount,
} from "./features/counter/couter-slice";

function App() {
  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();

  const handleClick = () => {
    // dispatch(incremented());
    dispatch(incrementByAmount({ her: 3 }));
  };
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
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
