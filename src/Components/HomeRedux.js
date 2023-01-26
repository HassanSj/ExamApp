import { useDispatch, useSelector } from "react-redux";
import { checklistener, statelistener } from "../Redux/Actions/ActionFile";

function HomeRedux() {
  const dispatch = useDispatch();
  const data = useSelector((initialevent) => initialevent.listener);
  function handleCategoryChange(event) {
    console.log(event.target.value);
    dispatch(checklistener(event.target.value));
  }
  function handlestate(event) {
    console.log(event.target.value);

    console.log(data);
  }
  const Name = "Schools Name Changed";
  return (
    <>
      <h1>React Testing Listener</h1>
      <select onChange={handleCategoryChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="white">White</option>
      </select>
      <select>
        {data?.map((option, index) => {
          return <option key={index}>{option.State.SName}</option>;
        })}
      </select>

      <button
        onClick={() => {
          dispatch(statelistener(Name));
        }}
      >
        dispatch
      </button>

      <table className="table table-striped" style={{ borderRadius: "10px" }}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">State</th>
            <th scope="col">Borough</th>
            <th scope="col">CordinatorName</th>
            <th scope="col">TeacherName</th>
            <th scope="col">PrincipleName</th>
            <th scope="col">SubTeacherName</th>
            <th scope="col">Mobile</th>
            <th scope="col">LandLine</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((result, index) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.Name}</td>
              <td>{result.State.SName}</td>
              <td>{result.Borough}</td>
              <td>{result.Staff.CordinatorName}</td>
              <td>{result.Staff.TeacherName}</td>
              <td>{result.Staff.PrincipleName}</td>
              <td>{result.Staff.SubTeacherName}</td>
              <td>{result.Staff.Contact.Mobile}</td>
              <td>{result.Staff.Contact.LandLine}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default HomeRedux;
