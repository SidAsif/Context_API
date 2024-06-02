import "./App.css";
import { CounterContext } from "./Context/Counter";
import Counter from "./Component/Counter";
import { useContext } from "react";
function App() {
  const counterState = useContext(CounterContext);
  // Uses the CounterContext to get the current counter state and the function to update it.

  return (
    <>
      <div className="App">
        <h1>Count is {counterState.count}</h1>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
