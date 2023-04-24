import { useRef } from "react";

export const FocusForm = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Ref</h1>
      <hr />
      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />
      <button className="btn btn-primary mt-3" onClick={handleFocus}>
        Focus
      </button>
    </>
  );
};
