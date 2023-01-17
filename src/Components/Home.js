import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Fotter";
import SearchBar from "./SearchBar";
import ListPage from "./Listing";
import Modal from "./Modal";
function Home() {
  const state = ["State1", "State2", "State3", "State4", "State5"];
  const borough = ["Borough1", "Borough2", "Borough3", "Borough4", "Borough5"];
  const data = [
    {
      id: 1,
      Name: "Army Public ",
      State: "Punjab",
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
    },
    {
      id: 2,
      Name: "Army Public School Cantt",
      State: "Punjab",
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
    },
    {
      id: 3,
      Name: "Army Public School Fort ",
      State: "Punjab",
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
    },
    {
      id: 4,
      Name: "Army Public School Ordinance ",
      State: "Punjab",
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
    },
    {
      id: 5,
      Name: "Roots International ",
      State: "Punjab",
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
    },
    {
      id: 6,
      Name: "BeaconHouse School",
      State: "Punjab",
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
    },
    {
      id: 7,
      Name: "SLS Montessori  ",
      State: "Punjab",
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
    },
  ];
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(data);
  }, []);

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
                <img
                  src="asets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />{" "}
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
          <h1>Accounts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Accounts</li>
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
                <select>
                  {borough.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
                <select>
                  {state.map((option, index) => {
                    return <option key={index}>{option}</option>;
                  })}
                </select>
              </ul>
            </div>
            <div className="col-lg-3 d-flex">
              <SearchBar data={data} setSearchResults={setSearchResults} />
            </div>
            <div className="col-lg-1 d-flex">
              <div className="add-button-form d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-primary add-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-lg-4 d-flex justify-content-end">
              <ul
                id="portfolio-flters"
                className="waiting d-flex align-items-center"
              >
                <li data-filter=".filter-waiting">Show all waiting accounts</li>
              </ul>
            </div>
          </div>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row portfolio-container">
                <ListPage searchResults={searchResults} />

                {/* <div className="col-lg-4 col-6 portfolio-item filter-waiting">
                  <ListPage searchResults={searchResults} />
                </div>

                <div className="col-lg-4 col-6 portfolio-item filter-borough">
                  <ListPage searchResults={searchResults} />
                </div>

                <div className="col-lg-4 col-6 portfolio-item filter-borough">
                  <ListPage searchResults={searchResults} />
                </div>

                <div className="col-lg-4 col-6 portfolio-item filter-borough">
                  <div className="member d-flex align-items-start justify-content-between">
                    <div className="member-info">
                      <div className="top">
                        <h4>School Name</h4>
                        <span>Borough</span>
                      </div>
                      <div className="bottom">
                        <h5>Cordinator Name</h5>
                        <span>Teacher - principal - sub-techer</span>
                        <span>0912345678</span>
                        <span>1766354</span>
                        <span className="orange">Rao Kashan</span>
                        <span className="orange">Rao Kashan</span>
                      </div>
                    </div>
                    <div className="table">
                      <table className="table table-bordered">
                        <tr>
                          <th className="text-center" colspan="2">
                            1st Grade
                          </th>
                        </tr>
                        <tr>
                          <td className="text-center">60</td>
                          <td className="text-center">30</td>
                        </tr>
                        <tr>
                          <th className="text-center" colspan="2">
                            2nd Grade
                          </th>
                        </tr>
                        <tr>
                          <td className="text-center">60</td>
                          <td className="text-center">30</td>
                        </tr>
                        <tr>
                          <th className="text-center" colspan="2">
                            3rd Grade
                          </th>
                        </tr>
                        <tr>
                          <td className="text-center">60</td>
                          <td className="text-center">30</td>
                        </tr>
                      </table>
                      <div className="text-center">
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                          data-bs-toggle="modal"
                          data-bs-target="#fullscreenModal"
                        >
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Coordinator Information
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      State:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="recipient-name" className="col-form-label">
                      Borough:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Discard
                </button>
                <button type="button" className="btn btn-primary">
                  Submt Detials
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
export default Home;
