import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  [key: string]: any; // Add this line to allow any additional properties
}

const PokemonList = ({ searchQuery }: { searchQuery: string }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const pokemonData = await Promise.all(
          response.data.results.map(async (pokemon: { url: string }) => {
            const pokemonRecord = await axios.get(pokemon.url);
            return pokemonRecord.data;
          })
        );
        setPokemons(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <p className="text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Loading...
      </p>
    );
  }

  return (
    <div className="p-3 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
