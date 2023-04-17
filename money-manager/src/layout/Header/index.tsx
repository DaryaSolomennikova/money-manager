import React from "react";
import  Logo  from "./Logo";
import  Navigation  from "./Navigation";
import User from "./User";

export const Header = () => {
  return (
    <header className="header">
    <div className = "header__item">
      <Logo />
      <Navigation />
    </div>
      <User />
    </header>
  );
};

export default Header;