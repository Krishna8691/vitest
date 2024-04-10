import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { createContext, useState } from "react";

type CounterContext = {
  increamentCounter: () => void;
  decreamentCounter: () => void;
};

export const CounterContext = createContext<CounterContext>({
  increamentCounter: () => {},
  decreamentCounter: () => {},
});

export default function App() {
  const [count, setCount] = useState(0);

  const increamentCounter = () => setCount((c) => c + 1);
  const decreamentCounter = () => setCount((c) => c - 1);

  return (
    <div>
      <header>
        <Navigation count={count} />
      </header>
      <main
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CounterContext.Provider
          value={{ increamentCounter, decreamentCounter }}
        >
          <Outlet />
        </CounterContext.Provider>
      </main>
    </div>
  );
}
