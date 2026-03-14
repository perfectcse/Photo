import { useMemo } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";

function Gallery({ searchTerm, favourites, dispatch }) {
  const { photos, loading, error } = useFetchPhotos();

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  if (loading) {
    return <p className="text-center">Loading photos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (filteredPhotos.length === 0) {
    return <p className="text-center">No photos found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {filteredPhotos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favourites={favourites}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default Gallery;