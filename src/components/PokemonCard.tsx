interface PokemonCardProps {
  pokemon: { sprites: { front_default: string }; name: string };
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="shadow-md p-1">
      <img
        className="w-1/2 m-auto"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3 className="text-lg capitalize text-center">{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;
