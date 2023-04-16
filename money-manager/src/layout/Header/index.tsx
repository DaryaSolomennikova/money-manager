import React from "react";
import  Logo  from "./Logo";
import  Navigation  from "./Navigation";
import AuthorizationBtn from "./Authorization"

export const Header = () => {
  return (
    <header className="header">
    <div className = "header__item">
      <Logo />
      <Navigation />
    </div>
      <AuthorizationBtn />
    </header>
  );
};

export default Header;