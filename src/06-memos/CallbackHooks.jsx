import { useCallback, useState } from "react";
import { IncrementCounter } from "./IncrementCounter";

export const CallbackHooks = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  return (
    <>
      <h1>Callback Counter: {counter}</h1>
      <hr />
      <IncrementCounter increment={incrementFather} />
    </>
  );
};
