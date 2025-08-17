import MovieCard from "./MovieCard";

const MovieList = ({title,movie,className}) => {

  return (
    <div className={`px-5 relative z-5 py-3 ${className || ""}`}>
      <h1 className="my-3 text-xl text-white">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide">
      <div className="flex gap-3">
      {movie.map((card)=> <MovieCard key={card.id} poster_key={card.poster_path} />)}
      </div>
      </div>
    </div>
  )
}

export default MovieList