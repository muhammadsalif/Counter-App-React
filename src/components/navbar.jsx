import React, { Component } from "react";

// Stateless Functional Component sfc shortcut
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-dark ml-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
