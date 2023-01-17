import "./Navbar.css";

const Filter = ({ Name, State, Borough, Staff, Students }) => {
  return (
    <div className="col-lg-4 col-6 portfolio-item filter-state">
      <div className="member d-flex align-items-start justify-content-between">
        <div className="member-info">
          <div className="top">
            <h4>{Name}</h4>
            <span>{State}</span>
            <span>{Borough}</span>
          </div>
          <div className="bottom">
            <h4>{Staff.CordinatorName}</h4>

            <span>
              {Staff.TeacherName}
              {"-"}
              {Staff.PrincipleName}
              {"-"}
              {Staff.SubTeacherName}
            </span>

            <span>{Staff.Contact.LandLine}</span>
            <span>{Staff.Contact.Mobile}</span>
            <span className="orange">Rao Kashan</span>
            <span className="orange">Rao Kashan</span>
          </div>
        </div>
        <div className="table">
          <table className="table table-bordered">
            <tr>
              <th className="text-center" colspan="2">
                1st Grade
              </th>
            </tr>
            <tr>
              <td className="text-center">{Students.FirstGrade.Active}</td>
              <td className="text-center">{Students.FirstGrade.UnActive}</td>
            </tr>
            <tr>
              <th className="text-center" colspan="2">
                2nd Grade
              </th>
            </tr>
            <tr>
              <td className="text-center">{Students.SecondGrade.Active}</td>
              <td className="text-center">{Students.SecondGrade.UnActive}</td>
            </tr>
            <tr>
              <th className="text-center" colspan="2">
                3rd Grade
              </th>
            </tr>
            <tr>
              <td className="text-center">{Students.ThirdGrade.Active}</td>
              <td className="text-center">{Students.ThirdGrade.UnActive}</td>
            </tr>
          </table>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-100"
              bs-toggle="modal"
              bs-target="#fullscreenModal"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
