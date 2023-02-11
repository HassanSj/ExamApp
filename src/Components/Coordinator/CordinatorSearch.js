import { useEffect } from "react";

const CoordinatorSearch = ({ coordinator, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(coordinator);

    const resultsArray = coordinator.filter((post) =>
      post.name.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  useEffect(() => {
    setSearchResults(coordinator);
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
export default CoordinatorSearch;
