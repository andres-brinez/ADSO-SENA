import React from 'react';

function MovieList({ movies }) {
  return (
    <div className="movie-list">

      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p>Año: {movie.release_date}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
