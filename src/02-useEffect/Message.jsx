import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    addEventListener("mousemove", onMouseMove);

    return () => {
      removeEventListener("mousemove", onMouseMove);
      console.log("component unmounted!");
    };
  }, []);

  return (
    <>
      <h3>El usuario ya existe</h3>
      <p>{JSON.stringify(coords)}</p>
    </>
  );
};
