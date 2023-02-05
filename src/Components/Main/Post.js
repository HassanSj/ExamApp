import "./Modal2.css";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Post = ({ school, coordinators, data }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <>
      <div className="col-lg-4 col-6 portfolio-item filter-state">
        <div className="member d-flex align-items-start justify-content-between">
          <div className="member-info">
            <div className="top">
              <h4>{school.name}</h4>
              <span>{school.state}</span>
              <span>{school.borough}</span>
            </div>
            {/* <div className="bottom">
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
            </div> */}
          </div>
          {/* <div className="table">
            <table className="table table-bordered">
              <tr>
                <th className="text-center" colspan="2">
                  1st Grade
                </th>
              </tr>
              <tr>
                <td className="text-center">
                  {data.Students.FirstGrade.Active}
                </td>
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
                <td className="text-center">
                  {data.Students.ThirdGrade.Active}
                </td>
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
                data-bs-target="#exampleModal1"
              >
                View More
              </button>
            </div>
          </div> */}
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
                Detail Table
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
              <div class="coordinator d-flex align-items-start justify-content-between">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Index</th>
                      <th scope="col">Phone Number / ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Base Receipt</th>
                      <th scope="col">Activation</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Rehersal Receipt</th>
                      <th scope="col">Activation</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Notes Receipt</th>
                      <th scope="col">Activation</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Workshop Receipt</th>
                      <th scope="col">Activation</th>
                      <th scope="col">Payment Status</th>
                      <th scope="col">Books Receipt</th>
                      <th scope="col">Activation</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="green">Manual-check</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="green">Auto-check</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="green">Auto-check</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="green">Auto-check</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="green">Auto-check</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="green">Auto-check</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="red">Delete</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="coordinator deleted-table mt-4 d-flex align-items-start justify-content-between">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col" colspan="19">
                        Deleted Accounts
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="green">Restore</td>
                    </tr>
                    <tr>
                      <td>01 - tchr</td>
                      <td>0307553355 / 218 202</td>
                      <td>tchr Ahmed Abdelsamei Mohamed Mohamed Kheir</td>
                      <td class="orange">Waiting</td>
                      <td>
                        <span
                          data-bs-toggle="modal"
                          data-bs-target="#largeModal"
                        >
                          Link
                        </span>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td>Off</td>
                      <td>Off</td>
                      <td>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </td>
                      <td class="green">Restore</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
