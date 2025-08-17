import { useDispatch, useSelector } from "react-redux";
import Language from "../utiles/language"
import { useRef } from "react";
import { API_Options } from "../utiles/constants";
import { addSearchMovies } from "../utiles/movieSlice";

const SearchBar = () => {

   const lang = useSelector((store)=>store.config?.languageselected);

   const dispatch = useDispatch();

   const searchInput = useRef(null);

   const getMovies = async() => {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput.current.value}&include_adult=false&page=1`,API_Options);
      const json = await data.json();
      // console.log(json);
      dispatch(addSearchMovies(json.results));
   }

   const handleClick = () => {
      getMovies();
   }

  return (
      <div>
      <form onSubmit={(e)=>e.preventDefault()} className="flex p-2 mt-44 mb-20 rounded-md bg-black w-full">
        <input ref={searchInput}  className="flex-grow py-2 px-4 border-2 bg-white border-neutral-300 rounded-md focus:outline-none" type="text" placeholder={Language[lang].searchplaceholder} />
        <button onClick={handleClick} className="flex-shrink-0 bg-red-700 ml-3 text-white py-2 px-4 rounded-md cursor-pointer">{Language[lang].langsearch}</button>
      </form>
    </div>
  )
}

export default SearchBar