import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Popper from "../Popper/Popper";
import HeaderUser from "./HeaderUser/HeaderUser";

function NavBar() {
  return (
    <nav className="navbar navbar-dark mb-4">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" style={{ height: "70px" }} />{" "}
        <span className="d-inline-block fs-2 fw-bold align-middle">Gohei</span>
      </Link>
      <ul className="nav">
        <li className="nav-item dropdown">
          {/* <Link to="/signup" className="text-white">
            Iniciar sesión
          </Link> */}
          <Popper name="Usuario">
            <HeaderUser />
          </Popper>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
