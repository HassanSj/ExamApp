import React from "react";
import Navbar from "./Navbar";
import img from "../img/profile-img.jpg";
function Materials() {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
                <img src={img} alt="Profile" className="rounded-circle" />
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Kevin Anderson</h6>
                  <span>Web Designer</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <Navbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Materials</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Materials</li>
            </ol>
          </nav>
        </div>

        <div className="page-tabs pagetitle">
          <div className="row">
            <div className="col-lg-5 d-flex">
              <ul id="portfolio-flters" className="d-flex align-items-center">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-administrator">1st Year</li>
                <li data-filter=".filter-distribution">2nd Year</li>
                <li data-filter=".filter-accounting">3rd Year</li>
              </ul>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="add-button-form d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary add-button"
                  data-bs-toggle="modal"
                  data-bs-target="#ExtralargeModal"
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex  justify-content-end">
              <div className="add-button-form d-flex align-items-center">
                <button
                  type="button"
                  style={{ marginRight: "20px" }}
                  className="btn btn-primary add-button"
                  data-bs-toggle="modal"
                  data-bs-target="#ExtralargeModal"
                >
                  +
                </button>
              </div>
              <div className="add-button-form d-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="btn sort-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Base
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section dashboard materials">
          <div className="row">
            <div className="col-lg-12">
              <div className="row portfolio-container">
                <div className="row portfolio-item filter-administrator">
                  <div className="d-flex align-items-start justify-content-between">
                    <div
                      className="nav w-30 card flex-column v-pills-tab nav-pills me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <div className="card-body">
                        <p
                          className="nav-link first-pill-tab active"
                          id="v-pills-english-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-english"
                          role="tab"
                          aria-controls="v-pills-english"
                          aria-selected="true"
                        >
                          English
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-maths-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-maths"
                          role="tab"
                          aria-controls="v-pills-maths"
                          aria-selected="false"
                        >
                          Maths
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-physics-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-physics"
                          role="tab"
                          aria-controls="v-pills-physics"
                          aria-selected="false"
                        >
                          Physics
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-chemistry-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-chemistry"
                          role="tab"
                          aria-controls="v-pills-chemistry"
                          aria-selected="false"
                        >
                          Chemistry
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-arabic-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-arabic"
                          role="tab"
                          aria-controls="v-pills-arabic"
                          aria-selected="false"
                        >
                          Arabic
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-islamiyat-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-islamiyat"
                          role="tab"
                          aria-controls="v-pills-islamiyat"
                          aria-selected="false"
                        >
                          Islamiyat
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-biology-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-biology"
                          role="tab"
                          aria-controls="v-pills-biology"
                          aria-selected="false"
                        >
                          Biology
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-drawing-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-drawing"
                          role="tab"
                          aria-controls="v-pills-drawing"
                          aria-selected="false"
                        >
                          Drawing
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-state-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-state"
                          role="tab"
                          aria-controls="v-pills-state"
                          aria-selected="false"
                        >
                          Stats
                        </p>
                        <p
                          className="nav-link"
                          id="v-pills-economics-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-economics"
                          role="tab"
                          aria-controls="v-pills-economics"
                          aria-selected="false"
                        >
                          Economics
                        </p>
                        <p className="nav-link">
                          <div className="add-button-form d-flex align-items-center">
                            <button
                              type="button"
                              style={{ margin: "auto" }}
                              className="btn btn-primary add-button"
                              data-bs-toggle="modal"
                              data-bs-target="#ExtralargeModal"
                            >
                              +
                            </button>
                          </div>
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-content w-100 card"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-english"
                        role="tabpanel"
                        aria-labelledby="v-pills-english-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-maths"
                        role="tabpanel"
                        aria-labelledby="v-pills-maths-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-physics"
                        role="tabpanel"
                        aria-labelledby="v-pills-physics-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-chemistry"
                        role="tabpanel"
                        aria-labelledby="v-pills-chemistry-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-arabic"
                        role="tabpanel"
                        aria-labelledby="v-pills-arabic-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-islamiyat"
                        role="tabpanel"
                        aria-labelledby="v-pills-islamiyat-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-biology"
                        role="tabpanel"
                        aria-labelledby="v-pills-biology-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-drawing"
                        role="tabpanel"
                        aria-labelledby="v-pills-drawing-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-state"
                        role="tabpanel"
                        aria-labelledby="v-pills-state-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-economics"
                        role="tabpanel"
                        aria-labelledby="v-pills-economics-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Preview</th>
                                <th scope="col">Code</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Reupload</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ fontSize: "x-large" }}>
                                  Chemistry 2005{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  Preview{" "}
                                  <i className="bi bi-pencil-square"></i>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  1000 <i className="bi bi-pencil-square"></i>
                                </td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    style={{ borderColor: "transparent" }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      className="bi bi-trash"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                                      <path
                                        fill-rule="evenodd"
                                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                      ></path>
                                    </svg>
                                  </button>
                                </td>
                                <td style={{ fontSize: "x-large" }}>
                                  <i
                                    style={{ transform: "rotate(256deg)" }}
                                    className="fa-solid fa-rotate-right"
                                  ></i>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colspan="5">
                                  <button
                                    type="button"
                                    style={{ margin: "auto" }}
                                    className="btn btn-primary add-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#ExtralargeModal"
                                  >
                                    +
                                  </button>
                                </td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="modal fade" id="ExtralargeModal" tabindex="-1">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Non omnis incidunt qui sed occaecati magni asperiores est
                mollitia. Soluta at et reprehenderit. Placeat autem numquam et
                fuga numquam. Tempora in facere consequatur sit dolor ipsum.
                Consequatur nemo amet incidunt est facilis. Dolorem neque
                recusandae quo sit molestias sint dignissimos.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Materials;
