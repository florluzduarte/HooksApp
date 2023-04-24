import { useCounter } from "../hooks/useCounter.js";
import { Small } from "./Small.jsx";

export const Memorize = () => {
  const { counter, handleIncrease } = useCounter(10);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={handleIncrease}>
        +1
      </button>
    </>
  );
};
