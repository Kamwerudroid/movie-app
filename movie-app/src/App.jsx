import React, { useState } from 'react';
import MovieList from './MovieList';
import AddMovieForm from './AddMovieForm'; // Import the new form component
import { movies as initialMovies } from './movies';
import './App.css';

const App = () => {
  
  const [movies, setMovies] = useState(initialMovies);
  
  const handleAddMovie = (newMovie) => {
    // Add a unique ID to the new movie
    const movieWithId = {
      ...newMovie,
      id: Date.now() // A simple way to generate a unique ID
    };
    
   
    setMovies([...movies, movieWithId]);
  };

  return (
    <div className="App">
      <h1>React Movie List</h1>
      <AddMovieForm onAddMovie={handleAddMovie} /> {/* Pass the handler to the form */}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;