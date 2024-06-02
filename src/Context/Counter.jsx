import { createContext, useState } from "react";
export const CounterContext = createContext(null);
// We are creating something called a "context" named CounterContext and starting it with a value of null. This context will help us share data (in this case, a counter) across different parts of our app without having to pass props manually at every level.
export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};

// Context: A way to share data across different parts of the app without passing props.
// Provider: A component that makes the shared data available to its children.
