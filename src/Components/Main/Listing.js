import Post from "./Post";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((data) => (
    <Post key={data.id} data={data} />
  ));

  const content = results?.length ? results : <p>No Matching Data</p>;

  return content;
};
export default ListPage;
