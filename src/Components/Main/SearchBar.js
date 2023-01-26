const SearchBar = ({ data, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(data);

    const resultsArray = data.filter(
      (post) =>
        post.Name.includes(e.target.value) ||
        post.State.SName.includes(e.target.value) ||
        post.Borough.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <form
      className="search search-form d-flex align-items-center"
      onSubmit={handleSubmit}
    >
      <input
        className="search__input"
        type="text"
        name="query"
        placeholder="Search"
        title="Enter search keyword"
        onChange={handleSearchChange}
      />
      <button className="search__button" type="submit" title="Search">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};
export default SearchBar;
