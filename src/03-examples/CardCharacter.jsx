import { useLayoutEffect, useRef, useState } from "react";

export const CardCaracter = ({ image, name, status, species }) => {
  const [measures, setMeasures] = useState({ height: 0, width: 0 });
  const nameRef = useRef();

  useLayoutEffect(() => {
    const { height, width } = nameRef.current.getBoundingClientRect();
    setMeasures({ height, width });
  }, [name]);

  return (
    <div className="card" style={{ minWidth: 220, maxWidth: 320 }}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title" style={{ display: "flex" }} ref={nameRef}>
          {name}
        </h3>
        <p className="card-text m-0">Status: {status}</p>
        <p className="card-text">Species: {species}</p>
        <p>{JSON.stringify(measures)}</p>
      </div>
    </div>
  );
};
