export const CardCaracter = ({ image, name, status, species }) => {
  return (
    <div className="card" style={{ minWidth: 220, maxWidth: 320 }}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text m-0">Status: {status}</p>
        <p className="card-text">Species: {species}</p>
      </div>
    </div>
  );
};
