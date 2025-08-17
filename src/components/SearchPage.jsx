import SearchBar from "./SearchBar";
import SearchContainer from "./SearchContainer";
import background_image from "../assets/background_image.jpg";

const SearchPage = () => {
  return (
    <div className="relative">
        <img className="h-screen w-screen object-cover" src={background_image} alt="background_image" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-full">
            <div className="max-w-2xl mx-auto">
                <SearchBar />
            </div>
            <div className="mx-6 md:mx-16 lg:mx-28">
              <SearchContainer />
            </div>
        </div>
    </div>
  )
}

export default SearchPage