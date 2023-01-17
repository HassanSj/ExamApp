import "./Navbar.css";

const Post = ({ data }) => {
  return (
    <div className="col-lg-4 col-6 portfolio-item filter-state">
      <div className="member d-flex align-items-start justify-content-between">
        <div className="member-info">
          <div className="top">
            <h4>{data.Name}</h4>
            <span>{data.State}</span>
            <span>{data.Borough}</span>
          </div>
          <div className="bottom">
            <h4>{data.Staff.CordinatorName}</h4>

            <span>
              {data.Staff.TeacherName}
              {"-"}
              {data.Staff.PrincipleName}
              {"-"}
              {data.Staff.SubTeacherName}
            </span>

            <span>{data.Staff.Contact.LandLine}</span>
            <span>{data.Staff.Contact.Mobile}</span>
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
              <td className="text-center">{data.Students.FirstGrade.Active}</td>
              <td className="text-center">
                {data.Students.FirstGrade.UnActive}
              </td>
            </tr>
            <tr>
              <th className="text-center" colspan="2">
                2nd Grade
              </th>
            </tr>
            <tr>
              <td className="text-center">
                {data.Students.SecondGrade.Active}
              </td>
              <td className="text-center">
                {data.Students.SecondGrade.UnActive}
              </td>
            </tr>
            <tr>
              <th className="text-center" colspan="2">
                3rd Grade
              </th>
            </tr>
            <tr>
              <td className="text-center">{data.Students.ThirdGrade.Active}</td>
              <td className="text-center">
                {data.Students.ThirdGrade.UnActive}
              </td>
            </tr>
          </table>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-primary w-100"
              data-bs-toggle="modal"
              data-bs-target="#fullscreenModal"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
