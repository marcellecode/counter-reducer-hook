import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";

function App() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: (state.count = 0) };
      default:
        return { count: state.count };
    }
  }

  return (
    <div className="App">
      <div>
        Count: {state.count}
        <br />
        <br />
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default App;
