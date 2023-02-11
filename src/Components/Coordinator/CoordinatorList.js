import Coordinator from "./CoordinatorCard";

const CoordinatorList = ({ searchResults }) => {
  const results = searchResults?.map((coordinator) => (
    <Coordinator key={coordinator.schoolID} coordinator={coordinator} />
  ));

  const content = results?.length ? results : <p>No Matching Data</p>;

  return content;
};
export default CoordinatorList;
