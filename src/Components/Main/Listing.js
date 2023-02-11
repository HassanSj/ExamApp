import Post from "./Post";

const ListPage = ({ searchResults }) => {
  const results = searchResults.map((school, coordinators, years) => (
    <Post
      key={school.schoolID}
      school={school}
      coordinators={coordinators}
      years={years}
    />
  ));

  const content = results?.length ? results : <p>No Matching Data</p>;

  return content;
};
export default ListPage;
