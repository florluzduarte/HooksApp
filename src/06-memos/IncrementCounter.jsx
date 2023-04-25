import React from "react";

export const IncrementCounter = React.memo(({ increment }) => {
  console.log("Me volví a dibujar :(");

  return (
    <button
      className="btn btn-primary mt-2"
      onClick={() => {
        increment(2);
      }}
    >
      Increment
    </button>
  );
});
