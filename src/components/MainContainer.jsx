import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {

  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return;
  
  const movie = movies[0];
  const {title,overview,id} = movie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movie_id={id} />
    </div>
  )
}

export default MainContainer;