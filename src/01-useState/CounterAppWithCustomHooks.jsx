import { useCounter } from "../hooks/useCounter";

export const CounterAppWithCustomHooks = () => {
  const startValue = 1;
  const { counter, handleIncrease, handleDecrease, handleReset } =
    useCounter(startValue);

  return (
    <>
      <h1>Counter App With Custom Hooks</h1>
      <hr />
      <h2>Counter: {counter}</h2>
      <hr />
      <button className="btn btn-primary" onClick={handleIncrease}>
        +1
      </button>
      <button className="btn btn-danger" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={handleDecrease}>
        -1
      </button>
    </>
  );
};
