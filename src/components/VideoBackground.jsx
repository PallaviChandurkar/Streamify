import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);

  const movie = useSelector((store) => store.movies?.movieTrailer);
  if (!movie) return;

  return (
    <div>
      <iframe
        className="w-full h-96 md:w-screen md:h-screen"
        src={`https://www.youtube.com/embed/${movie?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
