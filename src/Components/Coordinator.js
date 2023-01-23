import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./Navbar";
import img from "../img/profile-img.jpg";
import CoordinatorCard from "./CoordinatorList";
import CoordinatorFilter from "./CoordinatorFilter";
import CoordinatorSearch from "./CordinatorSearch";
function Coordinator() {
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
  const [selectedState, setSelectedState] = useState();
  const [selectedBorough, setSelectedBorough] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [allResult, setallResult] = useState("All States");

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
            </div>
            <div className="col-lg-3 d-flex">
              <CoordinatorSearch
                data={data}
                setSearchResults={setSearchResults}
              />
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
              {(() => {
                if (selectedState) {
                  if (selectedBorough) {
                    return filteredList2.map((element, index) => (
                      <CoordinatorFilter {...element} key={index} />
                    ));
                  }
                  return filteredList.map((element, index) => (
                    <CoordinatorFilter {...element} key={index} />
                  ));
                } else {
                  return <CoordinatorCard searchResults={searchResults} />;
                }
              })()}
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
