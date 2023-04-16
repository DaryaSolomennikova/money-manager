import React from "react";

const Navigation: React.FC = () => {
    return (
      <nav>
        <ul>
          <li>
            <a className="nav__link" href="/">Home</a>
          </li>
          <li>
            <a className="nav__link" href="/about">How it work</a>
          </li>
          <li>
            <a className="nav__link" href="/services">Services</a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navigation;