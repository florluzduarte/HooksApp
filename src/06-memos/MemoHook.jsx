import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter.js";

const heavyStuff = (iterationValue = 100) => {
  for (let i = 0; i < iterationValue; i++) {
    console.log("Haciendo iteraciones...");
  }

  return `${iterationValue} iterations done`;
};

export const MemoHook = () => {
  const { counter, handleIncrease } = useCounter(500);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />

      <h5>{memorizedValue}</h5>

      <button className="btn btn-primary" onClick={handleIncrease}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Hide/Show {JSON.stringify(show)}
      </button>
    </>
  );
};
