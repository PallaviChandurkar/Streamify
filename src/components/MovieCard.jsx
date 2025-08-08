const MovieCard = ({poster_key}) => {
  return (
    <div>
      <div className="shrink-0 w-44">
        <img className="w-full h-64 object-cover rounded-md" src={`https://image.tmdb.org/t/p/w500${poster_key}`} alt="poster-image" />
      </div>
    </div>
  )
}

export default MovieCard