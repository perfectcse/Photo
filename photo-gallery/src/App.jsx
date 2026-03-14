import { useState, useCallback, useReducer } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { favouritesReducer, initialState } from "./reducer/favouritesReducer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialState
  );

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold text-blue-500 mb-6">
        Photo Gallery App
      </h1>

      <SearchBar onSearch={handleSearch} />

      <Gallery
        searchTerm={searchTerm}
        favourites={favourites}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;