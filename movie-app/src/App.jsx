import React, { useState } from "react";

const App = () => {

  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState(["Batman Begins"]);

  const addMovie = () => {
    
    if (movieName.trim() !== "") { //prevents empty strings
      setMovies([...movies, movieName]);
      setMovieName(""); // clears input
    }
  };

  //delete function
  const handleDelete = (indexToDelete) => {    
    setMovies(movies.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="border-4 m-5 rounded-md bg-[#0f0a0a] text-[#f5c518] flex flex-col justify-center items-center p-5 mx-40">
        <h1 className="text-center text-3xl font-bold">Movie Application</h1>
        <div className="my-5">
          <p className="text-center text-xl pb-3 font-bold">Movie list</p>
          <div>
           
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
                  <button
                    onClick={() => handleDelete(index)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <button
                className="bg-[#f5c518] text-[#0f0a0a] px-4 py-2 rounded-md font-semibold hover:bg-[#8d8e06]"
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