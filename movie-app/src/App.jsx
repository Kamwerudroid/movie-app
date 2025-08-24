import React, { useState } from "react";

const App = () => {
  const [movies, setMovies] = useState(["The Dark Knight"]);
  const addMovie = () => {
    setMovies([...movies, "New Movie"]);
  };

  return (
    <>
      <div className="border-4 m-5 rounded-md bg-[#0f0a0a] text-[#BDBF09] flex flex-col justify-center items-center p-5">
        <h1 className="text-center text-3xl font-bold">Movie Application</h1>
        <div className="my-5">
          <p className="text-center text-xl">Movie list</p>
          <div>
            <ul className="list-disc pl-5">
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