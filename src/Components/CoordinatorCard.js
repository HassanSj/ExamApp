import React, { useState } from "react";

const Card = ({ data }) => {
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
                <td>{data.id}</td>
                <td>{data.Staff.Contact.Mobile}</td>
                <td>{data.Staff.CordinatorName}</td>
                <td>{data.State.SName}</td>
                <td>{data.Borough}</td>
                <td>HBL</td>
                <td>23/12/2012</td>
                <td>300</td>
                <td>{data.Name}</td>
                <td>{data.Students.FirstGrade.Active}\60</td>
                <td>{data.Students.SecondGrade.Active}/50</td>
                <td>{data.Students.ThirdGrade.Active}/80</td>
                <td>
                  {data.Students.FirstGrade.Active}+=
                  {data.Students.SecondGrade.Active}+=
                  {data.Students.ThirdGrade.Active}/180
                </td>
                <td>{data.Wallet}</td>
                <td>{data.Record}</td>
                <td>{data.AllEarnings}</td>
                <td>{data.CashOut}</td>
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
export default Card;
