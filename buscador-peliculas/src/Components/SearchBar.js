import React, { useState } from 'react';

function SearchBar({ searchMovies }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    searchMovies(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar Películas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
}

export default SearchBar;
