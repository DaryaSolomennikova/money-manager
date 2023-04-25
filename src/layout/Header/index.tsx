import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import User from "./User";
import "./style.css";
import LoginForm from "../Main/LoginForm";
import LoginBtn from "../Header/LoginBtn";

export const Header = ({ setShowLoginForm }: { setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <header className="header">
      <div className="header__item">
      <Logo />
      <Navigation />
      </div>
      <LoginBtn onClick={() => setShowLoginForm(true)} />
      <User />
    </header>
  );
};

export default Header;


