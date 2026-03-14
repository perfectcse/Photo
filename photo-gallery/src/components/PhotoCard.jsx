function PhotoCard({ photo, favourites, dispatch }) {
  const isFavourite = favourites.some((item) => item.id === photo.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={photo.download_url}
        alt={photo.author}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex justify-between items-center">
        <p className="text-sm font-semibold text-gray-700">
          {photo.author}
        </p>

        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FAVOURITE", payload: photo })
          }
          className={`text-2xl transition ${
            isFavourite
              ? "text-red-500 scale-110"
              : "text-gray-400 hover:text-red-400"
          }`}
        >
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;