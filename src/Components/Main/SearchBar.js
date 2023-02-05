import { useEffect } from "react";

const SearchBar = ({ school, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(school);

    const resultsArray = school.filter(
      (post) =>
        post.name.includes(e.target.value) ||
        post.state.includes(e.target.value) ||
        post.borough.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  useEffect(() => {
    setSearchResults(school);
  }, []);

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
