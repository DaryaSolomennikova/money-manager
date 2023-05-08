import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <Link className="nav__link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/about">
            How it work
          </Link>
        </li>
        <li>
          <Link className="nav__link" to="/services">
            Services
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
