import { useDispatch, useSelector } from "react-redux";

import { checklistener, statelistener } from "../Redux/Actions/ActionFile";

function HomeRedux() {
  const [response, setResponse] = useState();

  const res = fetch(
    "https://fakestoreapi.com/products/1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
    console.log(res),
    setResponse(res)
  );

  const biodata = [
    {
      id: 1,
      name: "hassanupdated",
      fathername: "sajjadupdated",
      designation: "manager",
    },
  ];
  const dispatch = useDispatch();
  const data = useSelector((initialevent) => initialevent.statecheck);
  console.log(data);
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

      <button
        onClick={() => {
          dispatch(statecheck(setResponse));
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
          {data &&
            data?.biodata?.map((result, index) => (
              <tr key={index}>
                <td>{result.id}</td>
                <td>{result.name}</td>
                <td>{result.designation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
export default HomeRedux;
