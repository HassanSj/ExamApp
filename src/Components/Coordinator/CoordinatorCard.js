import React, { useState } from "react";

const Card = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };
  const [result, setResult] = useState([data]);
  const [datas, setData] = useState([
    {
      id: 1,
      Name: "Army Public ",

      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 23150.21,
      Record: "Records",
      AllEarnings: 100231.32,
      CashOut: 100232321.32,
    },
    {
      id: 2,
      Name: "Army Public School Cantt",
      State: {
        Sid: 2,
        SName: "Sindh",
      },
      Borough: "Lahore",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 23150.21,
      Record: "Records",
      AllEarnings: 100231.32,
      CashOut: 100232321.32,
    },
    {
      id: 3,
      Name: "Army Public School Fort ",
      State: {
        Sid: 3,
        SName: "KPK",
      },
      Borough: "Karachi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 90150.21,
      Record: "Records",
      AllEarnings: 12231.32,
      CashOut: 199321.32,
    },
    {
      id: 4,
      Name: "Army Public School Ordinance ",
      State: {
        Sid: 4,
        SName: "Islamabad",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 230.21,
      Record: "Records",
      AllEarnings: 90231.32,
      CashOut: 1032321.32,
    },
    {
      id: 5,
      Name: "Roots International ",
      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Lahore",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 230.21,
      Record: "Records",
      AllEarnings: 1002.32,
      CashOut: 100221.32,
    },
    {
      id: 6,
      Name: "BeaconHouse School",
      State: {
        Sid: 1,
        SName: "Punjab",
      },
      Borough: "Sialkot",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 3150.21,
      Record: "Records",
      AllEarnings: 200231.32,
      CashOut: 1002321.32,
    },
    {
      id: 7,
      Name: "SLS Montessori  ",
      State: {
        Sid: 4,
        SName: "Islamabad",
      },
      Borough: "Rawalpindi",
      Staff: {
        CordinatorName: "Rao Kashan",
        TeacherName: "Mr.Ali",
        PrincipleName: "Mr.Bilal",
        SubTeacherName: "Mr.Zayn",
        Contact: {
          Mobile: "03348983493",
          LandLine: "0515255567",
        },
      },
      Students: {
        FirstGrade: {
          Active: 30,
          UnActive: 60,
        },
        SecondGrade: {
          Active: 30,
          UnActive: 60,
        },
        ThirdGrade: {
          Active: 30,
          UnActive: 60,
        },
      },
      Wallet: 150.21,
      Record: "Records",
      AllEarnings: 100231.32,
      CashOut: 100232321.32,
    },
  ]);
  const handleDelete = (index, e) => {
    setResult(result.filter((item, i) => i !== index));
  };
  return (
    <>
      {" "}
      <div className="col-12 portfolio-item filter-borough">
        <div className="coordinator d-flex align-items-start justify-content-between">
          <table
            className="table table-striped"
            style={{ borderRadius: "10px" }}
          >
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">Phone Number / ID</th>
                <th scope="col">Name</th>
                <th scope="col">State</th>
                <th scope="col">Borough</th>
                <th scope="col">Bankak</th>
                <th scope="col">Date Joined</th>
                <th scope="col">Milestone</th>
                <th scope="col">School</th>
                <th scope="col">Grade 1</th>
                <th scope="col">Grade 2</th>
                <th scope="col">Grade 3</th>
                <th scope="col">Total</th>
                <th scope="col">Current Wallet</th>
                <th scope="col">Records</th>
                <th scope="col">All earnings</th>
                <th scope="col">On going cash out</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {result.map((result, index) => (
                <tr key={index}>
                  <td>{result.id}</td>
                  <td>{result.Staff.Contact.Mobile}</td>
                  <td>{result.Staff.CordinatorName}</td>
                  <td>{result.State.SName}</td>
                  <td>{result.Borough}</td>
                  <td>HBL</td>
                  <td>{result.Date}</td>
                  <td>300</td>
                  <td>{result.Name}</td>
                  <td>{result.Students.FirstGrade.Active}\60</td>
                  <td>{result.Students.SecondGrade.Active}/50</td>
                  <td>{result.Students.ThirdGrade.Active}/80</td>
                  <td>
                    {result.Students.FirstGrade.Active}+=
                    {result.Students.SecondGrade.Active}+=
                    {result.Students.ThirdGrade.Active}/180
                  </td>
                  <td>{result.Wallet}</td>
                  <td>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                    >
                      {result.Record}
                    </button>
                  </td>

                  <td>{result.AllEarnings}</td>
                  <td>{result.CashOut}</td>
                  <td>
                    <button onClick={(e) => handleDelete(index, e)}>
                      <a href="#">
                        <i className="bi bi-trash"></i>
                      </a>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colspan="7">
                  <div className="progress">
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    {/* <div
                      className="progress-bar pb-step bg-danger"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar pb-step bg-warning"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div> */}
                    <button
                      style={{
                        color: "#ffbe00",
                        borderColor: "#ffbe00",
                        width: "61px",
                        height: "20px",

                        backgroundColor: "#ffbe00",
                        left: "-2px",
                        position: "relative",
                      }}
                    ></button>

                    <button
                      style={{
                        color: "red",
                        borderColor: "red",
                        width: "61px",
                        height: "20px",
                        padding: "19px",
                        backgroundColor: "red",
                        left: "2px",
                        position: "relative",
                      }}
                    ></button>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        show={show}
        onHide={handleClose}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-contents">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Receipt
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-bodys">
              <h1>Receipt Generates Here</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
