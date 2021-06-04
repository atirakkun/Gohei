import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faTools,
  faChartBar,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

function HeaderUser(props) {
  return (
    <>
      <div
        className="nav-link icon"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onMouseEnter={props.hover}
        onMouseLeave={props.hover}
      >
        <span className="me-2 text-white">Usuario</span>
        <FontAwesomeIcon icon={faCaretDown} size="lg" color="white" />
        <FontAwesomeIcon icon={faUser} size="lg" color="white" />
      </div>
      <ul
        className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <Link className="dropdown-item icon" to="/user">
            <FontAwesomeIcon
              icon={faUser}
              size="lg"
              color="white"
              className="me-2"
            />
            Perfil
          </Link>
        </li>
        <li>
          <Link className="dropdown-item icon" to="/">
            <FontAwesomeIcon
              icon={faTools}
              size="lg"
              color="white"
              className="me-2"
            />
            Editar
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item icon" to="/">
            <FontAwesomeIcon
              icon={faChartBar}
              size="lg"
              color="white"
              className="me-2"
            />
            Estadísticas
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link className="dropdown-item icon" to="/">
            <FontAwesomeIcon
              icon={faCog}
              size="lg"
              color="white"
              className="me-2"
            />
            Configuración
          </Link>
        </li>
        <li>
          <Link className="dropdown-item icon" to="/">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              size="lg"
              color="white"
              className="me-2"
            />
            Cerrar sesión
          </Link>
        </li>
      </ul>
    </>
  );
}

export default HeaderUser;
