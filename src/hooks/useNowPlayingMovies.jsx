import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utiles/movieSlice";
import { API_Options } from "../utiles/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const isMovie = useSelector((store)=>store.movies?.nowPlayingMovies);

  const nowPlayingMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    !isMovie && nowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;