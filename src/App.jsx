import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import { fetchImages } from "./api/unsplash";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (newQuery) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetchImages(newQuery, 1);
      if (result && result.results) {
        setImages(result.results);
        setQuery(newQuery);
        setPage(2);
      } else {
        console.error("No images found in the API response");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setIsLoading(true);
      const result = await fetchImages(query, page);
      if (result && result.results) {
        setImages((prev) => [...prev, ...result.results]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
      setError("Failed to load more images.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} onImageClick={setSelectedImage} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}

      <ImageModal
        isOpen={selectedImage !== null}
        image={selectedImage}
        onRequestClose={closeModal}
      />
    </div>
  );
}

export default App;
