import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie }) => {
  // State to hold the form input values
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (page reload)

    // Check if all fields are filled
    if (!title || !director || !year) {
      alert('Please fill in all required fields.');
      return;
    }

    // Create a new movie object
    const newMovie = {
      title,
      director,
      year,
      imageUrl: imageUrl || 'https://via.placeholder.com/250x350.png?text=No+Image' // Use a placeholder if no URL is provided
    };

    // Call the function passed from the parent to add the new movie
    onAddMovie(newMovie);

    // Clear the form fields after submission
    setTitle('');
    setDirector('');
    setYear('');
    setImageUrl('');
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add a New Movie</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="director">Director</label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL (optional)</label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;