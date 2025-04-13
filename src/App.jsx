import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import { fetchImages } from "./api/unsplash";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (newQuery) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await fetchImages(newQuery, 1);
      if (result && result.results) {
        setImages(result.results);
      } else {
        console.error("No images found in the API response");
      }

      setQuery(newQuery);
      setPage(2);
    } catch (error) {
      setError("Failed to load image!");
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setError(null);
      const result = await fetchImages(query, page);
      setImages((prev) => [...prev, ...result.results]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error loading more images:", error);
      setError("Additional images could not be loaded!");
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
