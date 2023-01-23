import React, { useState, useEffect, useMemo, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import SchoolCard from "./Listing";
import img from "../img/profile-img.jpg";
import "./Modal3.css";
import { Modal, Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./Modal.css";
import Filter from "./Filter";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const name = useRef();
  const statename = useRef();
  const boroughname = useRef();
  const coordinator = useRef();
  const teacher = useRef();
  const principle = useRef();
  const subteacher = useRef();
  const mobile = useRef();
  const landline = useRef();
  const firstactive = useRef();
  const firstunactive = useRef();
  const secondactive = useRef();
  const secondunactive = useRef();
  const thirdactive = useRef();
  const thirdunactive = useRef();
  const handleClick = () => {
    alert("parent click");
  };
  const state = [
    {
      id: 1,
      statename: "Punjab",
    },
    {
      id: 2,
      statename: "Sindh",
    },
    {
      id: 3,
      statename: "KPK",
    },
    {
      id: 4,
      statename: "Islamabad",
    },
  ];
  const borough = ["Borough1", "Borough2", "Borough3", "Borough4", "Borough5"];
  const [data, setData] = useState([
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
    },
  ]);

  const [selectedState, setSelectedState] = useState();
  const [selectedBorough, setSelectedBorough] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [allResult, setallResult] = useState("All States");

  const addSchool = () => {
    const datareceive = [
      {
        Name: name.current.value,

        State: {
          SName: statename.current.value,
        },
        Borough: boroughname.current.value,
        Staff: {
          CordinatorName: coordinator.current.value,
          TeacherName: teacher.current.value,
          PrincipleName: principle.current.value,
          SubTeacherName: subteacher.current.value,
          Contact: {
            Mobile: mobile.current.value,
            LandLine: landline.current.value,
          },
        },
        Students: {
          FirstGrade: {
            Active: firstactive.current.value,
            UnActive: firstunactive.current.value,
          },
          SecondGrade: {
            Active: secondactive.current.value,
            UnActive: secondunactive.current.value,
          },
          ThirdGrade: {
            Active: thirdactive.current.value,
            UnActive: thirdunactive.current.value,
          },
        },
      },
    ];
    setData((current) => [...current, data]);

    console.log(datareceive);
  };

  useEffect(() => {
    setSearchResults(data);
  }, ["Data Filtered"]);
  function getFilteredList() {
    if (!selectedState) {
      return data;
    }
    //console.log(data.filter((item) => item.State.SName === selectedState));
    return data.filter((item) => item.State.SName === selectedState);
  }
  var filteredList = useMemo(getFilteredList, [selectedState, data]);
  function getFilteredList2() {
    if (!selectedBorough) {
      return data;
    }

    return data.filter(
      (item) =>
        item.Borough === selectedBorough && item.State.SName === selectedState
    );
  }
  var filteredList2 = useMemo(getFilteredList2, [selectedBorough, data]);
  function handleCategoryChange(event) {
    const mapEmployeeNames = () => {
      data.map(function (employee) {
        if (employee.State.SName === event.target.value) {
          return employee.Borough;
        }
      });
    };

    console.log(mapEmployeeNames);
    console.log(event.target.value);
    setSelectedState(event.target.value);
  }
  function handleCategoryChange2(event) {
    console.log(event.target.value);

    setSelectedBorough(event.target.value);
  }

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
                <li>
                  <select
                    id="inputState"
                    class="form-select"
                    onChange={handleCategoryChange}
                  >
                    <option>{allResult}</option>
                    {state.map((option, index) => {
                      return <option key={index}>{option.statename}</option>;
                    })}
                  </select>
                </li>
                <li>
                  <select
                    id="inputState"
                    class="form-select"
                    onChange={handleCategoryChange2}
                  >
                    {data.map(function (employee, key) {
                      if (employee.State.SName === selectedState) {
                        return <option key={key}>{employee.Borough}</option>;
                      }
                    })}
                  </select>
                </li>
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
            <div className="col-lg-4 d-flex  justify-content-end">
              <div className="waiting d-flex align-items-center text-center">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Show all waiting accounts
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row portfolio-container">
                {(() => {
                  if (selectedState) {
                    if (selectedBorough) {
                      return filteredList2.map((element, index) => (
                        <Filter {...element} key={index} />
                      ));
                    }
                    return filteredList.map((element, index) => (
                      <Filter {...element} key={index} />
                    ));
                  } else {
                    return <SchoolCard searchResults={searchResults} />;
                  }
                })()}
                {/* {(() => {
                  if (selectedBorough) {
                    return filteredList2.map((element, index) => (
                      <Filter {...element} key={index} />
                    ));
                  } else {
                    return null;
                  }
                })()} */}
                {/* {selectedState ? (
                  filteredList.map((element, index) => (
                    <Filter {...element} key={index} />
                  )) ||
                  selectedBorough ? (
                    filteredList2.map((element, index) => (
                      <Borough {...element} key={index} />
                    ))
                  )
                ) : (
                  <SchoolCard
                    handleClick={handleClick}
                    searchResults={searchResults}
                  />
                )} */}

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

        {/* <div className="sport-list">
          {filteredList.map((element, index) => (
            <Filter {...element} key={index} />
          ))}
        </div> */}
      </main>
      <div
        className="modal fade"
        id="exampleModal2"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-contentz">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Waiting List
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
            <div class="modal-bodyz">
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
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-contentx">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Coordinator Information
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
            <div className="modal-bodyx">
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  School Name
                </label>
                <input type="text" className="form-control" ref={name} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  State
                </label>
                <input type="text" className="form-control" ref={statename} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  Borough
                </label>
                <input type="text" className="form-control" ref={boroughname} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  Coordinator Name
                </label>
                <input type="text" className="form-control" ref={coordinator} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  Teacher Name
                </label>
                <input type="text" className="form-control" ref={teacher} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  Principle Name
                </label>
                <input type="text" className="form-control" ref={principle} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  SubTeacher Name
                </label>
                <input type="text" className="form-control" ref={subteacher} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  LandLine
                </label>
                <input type="text" className="form-control" ref={landline} />
              </div>
              <div className="form-groupx">
                <label for="recipient-name" className="col-form-label">
                  Mobile
                </label>
                <input type="text" className="form-control" ref={mobile} />
              </div>
              <div class="form-row" style={{ display: "flex" }}>
                <label
                  for="recipient-name"
                  className="col-form-label"
                  style={{ marginLeft: "66px", marginTop: "22px" }}
                >
                  FirstGrade
                </label>
                <div
                  style={{
                    width: " 168px",
                    marginTop: " 57px",
                    height: " 52px",
                    marginLeft: " -40px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Active"
                    ref={firstactive}
                  />
                </div>
                <div
                  style={{
                    width: "181px",
                    marginLeft: "32px",
                    marginTop: "56px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="UnActive"
                    ref={firstunactive}
                  />
                </div>
              </div>
              <div
                class="form-row"
                style={{ display: "flex", marginTop: "-40px" }}
              >
                <label
                  for="recipient-name"
                  className="col-form-label"
                  style={{ marginLeft: "66px", marginTop: "22px" }}
                >
                  SecondGrade
                </label>
                <div
                  style={{
                    width: " 168px",
                    marginTop: " 57px",
                    height: " 52px",
                    marginLeft: " -55px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Active"
                    ref={secondactive}
                  />
                </div>
                <div
                  style={{
                    width: "181px",
                    marginLeft: "32px",
                    marginTop: "56px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="UnActive"
                    ref={secondunactive}
                  />
                </div>
              </div>
              <div
                class="form-row"
                style={{ display: "flex", marginTop: "-45px" }}
              >
                <label
                  for="recipient-name"
                  className="col-form-label"
                  style={{ marginLeft: "66px", marginTop: "22px" }}
                >
                  ThirdGrade
                </label>
                <div
                  style={{
                    width: " 168px",
                    marginTop: " 57px",
                    height: " 52px",
                    marginLeft: " -44px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Active"
                    ref={thirdactive}
                  />
                </div>
                <div
                  style={{
                    width: "181px",
                    marginLeft: "32px",
                    marginTop: "56px",
                  }}
                  class="form-group col-md-6"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="UnActive"
                    ref={thirdunactive}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footerx">
              <button
                type="button"
                className="btn btn-primary"
                onClick={addSchool}
              >
                Submt Detials
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Home;
