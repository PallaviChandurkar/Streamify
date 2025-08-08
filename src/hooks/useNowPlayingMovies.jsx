import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utiles/movieSlice";
import { API_Options } from "../utiles/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_Options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    nowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;