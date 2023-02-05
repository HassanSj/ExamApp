import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import img from "../img/profile-img.jpg";
function Rewards() {
  return (
    <>
      <>
        {/* ======= Header ======= */}
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
                {/* End Profile Iamge Icon */}
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
                      <i className="bi bi-person" />
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
                      <i className="bi bi-gear" />
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
                      <i className="bi bi-question-circle" />
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
                      <i className="bi bi-box-arrow-right" />
                      <span>Sign Out</span>
                    </a>
                  </li>
                </ul>
                {/* End Profile Dropdown Items */}
              </li>
              {/* End Profile Nav */}
            </ul>
          </nav>
        </header>

        <Navbar />
        <main id="main" className="main">
          <div className="pagetitle">
            <h1>Pricing &amp; Rewards</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  Pricing &amp; Rewards
                </li>
              </ol>
            </nav>
          </div>
          {/* End Page Title */}
          <div className="page-tabs pagetitle"></div>
          <section className="section dashboard pricing-rewards">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">Packages Prices</h5>
                    <div className="row">
                      <div className="col-12 d-flex">
                        <ul
                          id="portfolio-flters"
                          className="d-flex align-items-center"
                        >
                          <li data-filter="*" className="filter-active">
                            All
                          </li>
                          <li data-filter=".filter-1st">1st Year</li>
                          <li data-filter=".filter-2nd">2nd Year</li>
                          <li data-filter=".filter-3rd">3rd Year</li>
                        </ul>
                      </div>
                      {/* Left side columns */}
                      <div className="col-lg-12">
                        <div className="row portfolio-container mt-4">
                          <div className="portfolio-item filter-1st">
                            <div className="coordinator d-flex align-items-start justify-content-between">
                              <table className="table table-striped">
                                <tbody>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12 portfolio-item filter-2nd">
                            <div className="coordinator d-flex align-items-start justify-content-between">
                              <table className="table table-striped">
                                <tbody>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="col-12 portfolio-item filter-3rd">
                            <div className="coordinator d-flex align-items-start justify-content-between">
                              <table className="table table-striped">
                                <tbody>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>5800</td>
                                    <td>Base</td>
                                    <td>
                                      <a hre="#">
                                        <i className="bi bi-pencil-square" />
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Left side columns */}
                    </div>
                    <div className="d-flex text-center">
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
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-6">
                <div className="card info-card sales-card">
                  <div className="card-body">
                    <h5 className="card-title">Packages Prices</h5>
                    <div className="row">
                      {/* Left side columns */}
                      <div className="col-12">
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Students</th>
                                <th scope="col">Milestone Bonus</th>
                                <th scope="col">Total Earning</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  35000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>1000</td>
                              </tr>
                              <tr>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  35000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>1000</td>
                              </tr>
                              <tr>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  35000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>1000</td>
                              </tr>
                              <tr>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  35000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>1000</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      {/* End Left side columns */}
                    </div>
                    <div className="d-flex mt-4 text-center">
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
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Show Add New Modal */}
          <div className="modal fade" id="ExtralargeModal" tabIndex={-1}>
            <div className="modal-dialog modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Data</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">Form will be here</div>
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
          {/* End Show Add New Modal*/}
        </main>
        <Footer />
      </>
    </>
  );
}
export default Rewards;
