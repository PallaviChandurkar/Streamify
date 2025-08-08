import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  if(!movies || !movies.nowPlayingMovies) return null;

  return (
    <div className="bg-black">
      <MovieList movie={movies.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movie={movies.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movie={movies.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movie={movies.nowPlayingMovies} title={"Now Playing"} />
    </div>
  )
}

export default SecondaryContainer