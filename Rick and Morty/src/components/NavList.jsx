import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavList = () => {
  return (
    <div className=" d-flex   bg-secondary border border-success rounded justify-content-between container mt-2">
      <nav className="navbar navbar-expand-sm navbar-dark  p-2  ">
        <div className="container-fuild ">
          <button
            className="navbar-toggler m-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="navbar-collapse collapse "
            id="navbarSupportedContent"
          >
            <div className="navbar-nav ">
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-5 ${isActive ? " active color-button  py-2 px-5  border rounded-3" : ""}`
                }
                to="home"
              >
                Personajes
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-5 ${isActive ? "active color-button  py-2 px-5  border rounded-3" : ""}`
                }
                to="find"
              >
                Buscar personaje
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-5 ${
                    isActive
                      ? "active color-button  py-2 px-5  border rounded-3"
                      : ""
                  }`
                }
                to="chapters"
              >
                Lista de capitulos
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `nav-item nav-link me-5 ${isActive ? "active color-button  py-2 px-5  border rounded-3" : ""}`
                }
                to="findByChapter"
              >
                Buscar capitulo
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
