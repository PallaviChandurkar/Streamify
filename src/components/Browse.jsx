import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

const Browse = () => {

  const isSearch = useSelector((store)=>store.search?.searchMovie);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="overflow-hidden">
      {
        isSearch ? (<SearchPage />) : (
          <>
             <MainContainer />
             <SecondaryContainer />
          </>
        )
      }
    </div>
  )
}

export default Browse;