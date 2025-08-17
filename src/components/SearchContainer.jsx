import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const SearchContainer = () => {

  const movies = useSelector((store)=>store.movies?.searchMovies);

  if(!movies){
    return (
      <>
        <div className="w-full mx-auto my-10 text-white text-center">
          <h1 className="text-2xl font-bold">Start searching for movies above</h1>
        </div>
      </>
    )
  }

  if(movies.length===0){
    return (
      <>
        <div className="w-full mx-auto my-10 text-white text-center">
          <h1 className="text-2xl font-bold">Movies not found!!!</h1>
        </div>
      </>
    )
  }

  // console.log(movies);

  return (
    <>
    <div className="w-full mx-auto my-10">
      <h1 className="text-white text-2xl font-bold">Movie List</h1>
      <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
      {
        movies.map((movie)=> <MovieCard key={movie.id} poster_key={movie?.poster_path} />)
      }
      </div>
    </div>
    </>
  )
}

export default SearchContainer