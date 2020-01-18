import React from 'react';
import { useCounterContext } from "../context/CounterContext"

const CounterDisplay = () => {
  const { count } = useCounterContext();
  return (
    <div>
      <p>Counter</p>
      <p>{count}</p>
    </div>
  );
};

export default CounterDisplay;