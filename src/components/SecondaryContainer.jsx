import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies);
  if(!movies || !movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies || !movies.upcomingMovies ) return null;

  return (
    <div className="bg-black">
      <MovieList className="-mt-16 md:-mt-44" movie={movies.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movie={movies.topRatedMovies} title={"Top Rated"} />
      <MovieList movie={movies.upcomingMovies} title={"Upcoming"} />
      <MovieList movie={movies.popularMovies} title={"Popular"} />
    </div>
  )
}

export default SecondaryContainer