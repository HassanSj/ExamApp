import "../Navbar/Navbar.css";

const Filter = ({ name, borough, state }) => {
  return (
    <div className="col-lg-4 col-6 portfolio-item filter-state">
      <div className="member d-flex align-items-start justify-content-between">
        <div className="member-info">
          <div className="top">
            <h4>{name}</h4>
            <span>{state}</span>
            <span>{borough}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
