import Post from "./Post";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((school) => (
    <Post key={school.schoolID} school={school} />
  ));

  const content = results?.length ? results : <p>No Matching Data</p>;

  return content;
};
export default ListPage;
