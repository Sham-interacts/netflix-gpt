import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const response = await data.json();
    return response.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Golmal, Sholay, Koi Mil gaya";

    const gptResults = await openai.responses.create({
      model: "openai/gpt-oss-20b",
      input: gptQuery,
    });

    if (!gptResults.output_text) {
      // TODO: error handling
    }
    
    const gptMovieNames = gptResults.output_text.split(",");
    const moviesResponse = gptMovieNames.map((movie) => searchMovieTMDB(movie));
    const tmdbMoviesResults = await Promise.all(moviesResponse);
    dispatch(
      addGptMovieResults({
        movieNames: gptMovieNames,
        movieResults: tmdbMoviesResults,
      }),
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4 col-span-9 bg-white"
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
