import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-black text-white p-3">
        <h1 className="text-2xl">PokéDex</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      <PokemonList searchQuery={searchQuery} />
    </div>
  );
}

export default App;
