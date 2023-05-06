import React from "react";
import "./style.css";

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="nav__list">
        <li>
          <a className="nav__link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav__link" href="/about">
            How it work
          </a>
        </li>
        <li>
          <a className="nav__link" href="/services">
            Services
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
