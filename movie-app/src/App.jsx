import React, { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm'; // Import the new form component
import { movies as initialMovies } from './data/movies';
import './App.css';

const App = () => {
  // Use useState to manage the list of movies
  const [movies, setMovies] = useState(initialMovies);

  // Function to add a new movie to the state
  const handleAddMovie = (newMovie) => {
    // Add a unique ID to the new movie
    const movieWithId = {
      ...newMovie,
      id: Date.now() // A simple way to generate a unique ID
    };
    
    // Update the movies state immutably by creating a new array
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