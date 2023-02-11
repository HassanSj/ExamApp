import React, { useState } from "react";

const Card = ({ coordinator }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
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
              <tr>
                <td>{coordinator.userID}</td>
                <td>{coordinator.phoneNumber}</td>
                <td>{coordinator.name}</td>
                <td>{coordinator.state}</td>
                <td>{coordinator.borough}</td>
                <td>{coordinator.bankAccountNumber}</td>
                <td>{coordinator.dateJoined}</td>
                <td>300</td>
              </tr>
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
