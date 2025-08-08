import MovieCard from "./MovieCard";

const MovieList = ({title,movie}) => {

  return (
    <div className="px-5 py-3">
      <h1 className="my-3 text-xl text-white">{title}</h1>
      {/* poster_path */}
      <div className="overflow-x-scroll scrollbar-hide">
      <div className="flex gap-3">
      {movie.map((card)=> <MovieCard key={card.id} poster_key={card.poster_path} />)}
      </div>
      </div>
    </div>
  )
}

export default MovieList