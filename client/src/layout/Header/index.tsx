import React from "react";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import User from "../../components/User";
import "./style.css";
// import LoginForm from "../../components/LoginForm";
import LoginBtn from "../../components/LoginBtn";

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


