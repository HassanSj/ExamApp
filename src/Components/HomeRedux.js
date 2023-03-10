import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  checklistener,
  statelistener,
  apiresponse,
} from "../Redux/Actions/ActionFile";

function HomeRedux() {
  const [response, setResponse] = useState();
  const dispatch = useDispatch();
  const data = useSelector((initialevent) => initialevent.apiresponse);
  //console.log(data);
  async function fetchData() {
    try {
      const api = await axios.get("https://fakestoreapi.com/products/1");
      console.log(api.data);
      setResponse(api.data);
    } catch (error) {
      console.error(error);
    }
  }
  // const apiresult = () => {
  //   fetch("https://fakestoreapi.com/products/1")
  //     .then((response) => response.json())
  //     .then((data) => setResponse(data));
  // };
  //console.log("The Api Resultant Array is " + apiresult);
  // const res = fetch("https://fakestoreapi.com/products/1", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // console.log(res);
  function handleCategoryChange(event) {
    console.log(event.target.value);
    dispatch(checklistener(event.target.value));
  }
  function handlestate(event) {
    console.log(event.target.value);

    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const Name = "Schools Name Changed";
  return (
    <>
      <h1>User List</h1>

      <h1>React Testing Listener</h1>
      <ul>
        {response &&
          response?.data?.map((option, index) => <li key={index}>{option}</li>)}
      </ul>
      <select onChange={handleCategoryChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="white">White</option>
      </select>

      <button
        onClick={() => {
          dispatch(statelistener(setResponse));
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
