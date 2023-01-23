import Coordinator from "./CoordinatorCard";

const CoordinatorList = ({ searchResults }) => {
  const results = searchResults.map((data) => (
    <Coordinator key={data.id} data={data} />
  ));

  const content = results?.length ? results : <p>No Matching Data</p>;

  return content;
};
export default CoordinatorList;
