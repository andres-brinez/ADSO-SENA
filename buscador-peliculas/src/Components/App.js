import React, { useState } from 'react';
import axios from 'axios';
import './app.css';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

function App() {

  
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=504c42f0b0b8db2ff20da3ec94097fe2&query=${query}`);
      setMovies(response.data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="App">
      <h1>Buscador de Películas</h1>
      <SearchBar searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
