import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {" "}
      <aside id="sidebar" class="sidebar">
        <div class="d-flex logo-container align-items-center justify-content-center">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
          </a>
        </div>

        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link">
              <i class="fa-solid fa-users"></i>
              <NavLink to="/dashboard">Accounts</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed">
              <i class="fa-solid fa-circle-user"></i>
              <NavLink to="/cordinator">Coordinators</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed">
              <i class="fa-solid fa-file-lines"></i>
              <NavLink to="/materials">Materials</NavLink>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="pricing-rewards.html">
              <i class="fa-solid fa-folder-plus"></i>
              <span>Archives</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="pricing-rewards.html">
              <i class="fa-solid fa-square-poll-vertical"></i>
              <span>Metrics</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" href="pricing-rewards.html">
              <i class="fa-solid fa-award"></i>
              <span>Pricing and Rewards</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" href="access-security.html">
              <i class="fa-solid fa-shield"></i>
              <span>Access & Security</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
export default Navbar;
