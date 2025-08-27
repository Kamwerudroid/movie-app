import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <div className="movie-poster-container"> 
        <img src={movie.imageUrl} alt={`${movie.title} poster`} className="movie-poster" />
      </div>
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Year: {movie.year}</p>
    </div>
  );
};

export default MovieItem;