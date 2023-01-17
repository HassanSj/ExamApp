import React from "react";
import Navbar from "./Navbar";
import img from "../img/profile-img.jpg";
function Coordinator() {
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
                <img src={img} alt="Profile" className="rounded-circle" />{" "}
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
          <h1>Coordinator</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Coordinator</li>
            </ol>
          </nav>
        </div>

        <div className="page-tabs pagetitle">
          <div className="row">
            <div className="col-lg-4 d-flex">
              <ul id="portfolio-flters" className="d-flex align-items-center">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-state">State</li>
                <li data-filter=".filter-borough">Borough</li>
              </ul>
            </div>
            <div className="col-lg-3 d-flex">
              <form
                className="search-form d-flex align-items-center"
                method="POST"
                action="#"
              >
                <input
                  type="text"
                  name="query"
                  placeholder="Search"
                  title="Enter search keyword"
                />
                <button type="submit" title="Search">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="col-lg-1 d-flex">
              <div className="add-button-form d-flex align-items-center">
                <div className="dropdown">
                  <button
                    className="btn sort-btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
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
            <div className="col-lg-4 d-flex justify-content-end">
              <ul
                id="portfolio-flters"
                className="waiting d-flex align-items-center"
              >
                <li>
                  <a
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    create -to date - cashout list
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
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
                        <td>01</td>
                        <td>0307553355</td>
                        <td>Ubaidullah</td>
                        <td>Punjab</td>
                        <td>Borough</td>
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
                        <td>01</td>
                        <td>0307553355</td>
                        <td>Ubaidullah</td>
                        <td>Punjab</td>
                        <td>Borough</td>
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
                        <td>01</td>
                        <td>0307553355</td>
                        <td>Ubaidullah</td>
                        <td>Punjab</td>
                        <td>Borough</td>
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
                        <td>01</td>
                        <td>0307553355</td>
                        <td>Ubaidullah</td>
                        <td>Punjab</td>
                        <td>Borough</td>
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
                        <td>01</td>
                        <td>0307553355</td>
                        <td>Ubaidullah</td>
                        <td>Punjab</td>
                        <td>Borough</td>
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
            </div>
          </div>
        </section>
      </main>

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
export default Coordinator;
