import { useCounter, useFetch } from "../hooks/";
import { CardCaracter } from "./CardCharacter";
import { LoadingCharacter } from "./LoadingCharacter";

export const RickAndMortyCharacters = () => {
  const initialCounterValue = 1;
  const { counter, handleIncrease } = useCounter(initialCounterValue);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />

      {isLoading ? (
        <LoadingCharacter />
      ) : (
        <CardCaracter
          image={data.image}
          name={data.name}
          status={data.status}
          species={data.species}
        />
      )}

      <button
        className="btn btn-primary mt-3"
        onClick={handleIncrease}
        disabled={isLoading}
      >
        Next Character
      </button>
    </>
  );
};
