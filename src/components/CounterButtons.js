import React from "react";
import { useCounterContext } from "../context/CounterContext";

const CounterButtons = () => {
  const { increment, decrement } = useCounterContext();

  return (
    <div>
      <button onClick={increment}>ADD</button>
      <button onClick={() => decrement('huh?')}>SUBTRACT</button>
    </div>
  );
};

export default CounterButtons;
