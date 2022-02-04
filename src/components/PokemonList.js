import Pokemon from "./Pokemon";
import { useGetPokemonsByTypeQuery } from "../services/pokemon";

const PokemonList = ({ type }) => {
  const { data, error, isLoading } = useGetPokemonsByTypeQuery(type);
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        data.map((item, index) => (
          <Pokemon key={index} name={item.pokemon.name} />
        ))
      ) : null}
    </>
  );
};

export default PokemonList;
