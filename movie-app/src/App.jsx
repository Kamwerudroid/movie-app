import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm'; 
import { movies as initialMovies } from './movies';
import './App.css';

const App = () => {
  
  const [movies, setMovies] = useState(initialMovies);
  
  const handleAddMovie = (newMovie) => {
    // Add a unique ID to the new movie
    const movieWithId = {
      ...newMovie,
      id: Date.now() 
    };
    
   
    setMovies([...movies, movieWithId]);
  };

  return (
    <div className="App">
      <h1 className='text-3xl font-bold'>Movie App</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;