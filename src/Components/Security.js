import Footer from "./Footer";
import Navbar from "./Navbar";
import img from "../img/profile-img.jpg";
function Security() {
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
        {/* End Icons Navigation */}
      </header>

      <Navbar />
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Access &amp; Security</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Access &amp; Security</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <div className="page-tabs pagetitle">
          <div className="row">
            <div className="col-lg-5 d-flex">
              <ul id="portfolio-flters" className="d-flex align-items-center">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-administrator">Administrator A</li>
                <li data-filter=".filter-distribution">Distribution B</li>
                <li data-filter=".filter-accounting">Accounting C</li>
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
          </div>
        </div>
        <section className="section dashboard access-security">
          <div className="row">
            <div className="col-lg-12">
              <div className="row portfolio-container">
                <div className="row portfolio-item filter-administrator">
                  <div className="d-flex align-items-start justify-content-between">
                    <div
                      className="nav w-30 card flex-column nav-pills v-pills-tab me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <div className="card-body">
                        <div
                          className="nav-link first-pill-tab active"
                          id="v-pills-accounting-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-accounting"
                          role="tab"
                          aria-controls="v-pills-accounting"
                          aria-selected="true"
                        >
                          Accounts
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Co-Ordinators
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Materials
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Archives
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Metrices
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Prices &amp; Rewards
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-content w-100 card"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-accounting"
                        role="tabpanel"
                        aria-labelledby="v-pills-accounting-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Prefix</th>
                                <th scope="col">Passcode</th>
                                <th scope="col">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />{" "}
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan={5}>
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
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row portfolio-item filter-distribution">
                  <div className="d-flex align-items-start justify-content-between">
                    <div
                      className="nav w-30 card flex-column nav-pills v-pills-tab me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <div className="card-body">
                        <div
                          className="nav-link first-pill-tab active"
                          id="v-pills-accounting-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-accounting"
                          role="tab"
                          aria-controls="v-pills-accounting"
                          aria-selected="true"
                        >
                          Accounts
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Co-Ordinators
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Materials
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Archives
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Metrices
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Prices &amp; Rewards
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-content w-100 card"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-accounting"
                        role="tabpanel"
                        aria-labelledby="v-pills-accounting-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Prefix</th>
                                <th scope="col">Passcode</th>
                                <th scope="col">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />{" "}
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan={5}>
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
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        ...
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row portfolio-item filter-accounting">
                  <div className="d-flex align-items-start justify-content-between">
                    <div
                      className="nav w-30 card flex-column nav-pills v-pills-tab me-3"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <div className="card-body">
                        <div
                          className="nav-link first-pill-tab active"
                          id="v-pills-accounting-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-accounting"
                          role="tab"
                          aria-controls="v-pills-accounting"
                          aria-selected="true"
                        >
                          Accounts
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-profile"
                          role="tab"
                          aria-controls="v-pills-profile"
                          aria-selected="false"
                        >
                          Co-Ordinators
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-messages-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-messages"
                          role="tab"
                          aria-controls="v-pills-messages"
                          aria-selected="false"
                        >
                          Materials
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Archives
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Metrices
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="v-pills-settings-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#v-pills-settings"
                          role="tab"
                          aria-controls="v-pills-settings"
                          aria-selected="false"
                        >
                          Prices &amp; Rewards
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-content w-100 card"
                      id="v-pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="v-pills-accounting"
                        role="tabpanel"
                        aria-labelledby="v-pills-accounting-tab"
                      >
                        <div className="coordinator d-flex align-items-start justify-content-between">
                          <table className="table table-striped">
                            <thead>
                              <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Prefix</th>
                                <th scope="col">Passcode</th>
                                <th scope="col">Remove</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  Rana Muhammad Utban{" "}
                                  <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  A-1 <i className="bi bi-pencil-square" />{" "}
                                </td>
                                <td>
                                  1000 <i className="bi bi-pencil-square" />
                                </td>
                                <td>
                                  <i className="bi bi-trash" />
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td colSpan={5}>
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
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-messages"
                        role="tabpanel"
                        aria-labelledby="v-pills-messages-tab"
                      >
                        ...
                      </div>
                      <div
                        className="tab-pane card-body fade"
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                      >
                        ...
                      </div>
                    </div>
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
                <h5 className="modal-title">Add New Modal</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
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
        {/* End Show Add New Modal*/}
      </main>
      {/* End #main */}
      <Footer />
    </>
  );
}
export default Security;
