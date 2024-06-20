interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (s: string) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery }: SearchBarProps) => {
  return (
    <input
      className="text-lg p-1 text-black"
      type="text"
      placeholder="Search Pokémon"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
