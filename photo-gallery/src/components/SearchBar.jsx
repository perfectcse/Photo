function SearchBar({ onSearch }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search photos by author..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;