import React, { useState } from "react";

const CoordinatorFilter = ({ id, Name, State, Borough, Staff, Students }) => {
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
                <td>{id}</td>
                <td>{Staff.Contact.Mobile}</td>
                <td>{Staff.CoordinatorName}</td>
                <td>{State.SName}</td>
                <td>{Borough}</td>
                <td>HBL</td>
                <td>23/12/2012</td>
                <td>300</td>
                <td>GovtboysSchool</td>
                <td>12\60</td>
                <td>21/50</td>
                <td>30/80</td>
                <td>63/180</td>
                <td>23150.21</td>
                <td>Records</td>
                <td>100231.32</td>
                <td>
                  <span className="badge badge-warning"> 3210.23</span>
                </td>
                <td>
                  <a href="#">
                    <i className="bi bi-trash"></i>
                  </a>
                </td>
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
                    <div
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
                    ></div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};
export default CoordinatorFilter;
