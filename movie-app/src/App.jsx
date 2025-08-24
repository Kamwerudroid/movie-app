import React, { useState } from "react";

const App = () => {
  // 1. Create a separate state for the input field
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(["Batman Begins"]);

  const addMovie = () => {
    // 2. Add the value from the input's state
    if (movieName.trim() !== "") { // Add a check to prevent adding empty strings
      setMovies([...movies, movieName]);
      setMovieName(""); // 3. Clear the input field after adding
    }
  };

  return (
    <>
      <div className="border-4 m-5 rounded-md bg-[#0f0a0a] text-[#BDBF09] flex flex-col justify-center items-center p-5">
        <h1 className="text-center text-3xl font-bold">Movie Application</h1>
        <div className="my-5">
          <p className="text-center text-xl">Movie list</p>
          <div>
            {/* 4. Correctly bind the input to its state variable */}
            <input
              type="text"
              value={movieName}
              onChange={(e) => setMovieName(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-md border border-gray-600"
              placeholder="Enter a movie name"
            />
            <ul className="list-disc pl-5 mt-4">
              {movies.map((movie, index) => (
                <li key={index} className="my-1">
                  {movie}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <button
                className="bg-[#BDBF09] text-[#0f0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#8d8e06]"
                onClick={addMovie}
              >
                Add Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;