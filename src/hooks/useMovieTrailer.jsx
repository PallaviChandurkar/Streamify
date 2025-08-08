import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utiles/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utiles/constants";

const useMovieTrailer = (movie_id) => {
   const dispatch = useDispatch();

  const getMovieVideo = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movie_id+"/videos?language=en-US",API_Options);
    const json = await data.json();
    const trailerVideo = json.results.filter((video)=>video.type === "Trailer");
    const trailer = trailerVideo ? trailerVideo[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  }

  useEffect(()=>{
    getMovieVideo();
  },[]);
}

export default useMovieTrailer;