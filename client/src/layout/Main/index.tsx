import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import { Link } from "react-router-dom";

const Main: React.FC<{
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showLoginForm, setShowLoginForm }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleRegistrationFormClose = () => {
    setShowRegistrationForm(false);
  };

  const handleSwitchForm = () => {
    if (showLoginForm) {
      setShowRegistrationForm(true);
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
      setShowRegistrationForm(false);
    }
  };

  const handleLogin = (email: string, password: string) => {
    // Handle login logic
  };

  const handleSignUp = (
    nickname: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    // Handle sign up logic
  };

  return (
    <section className="main">
      {showLoginForm && !showRegistrationForm && (
        <LoginForm
          onLogin={handleLogin}
          onSwitchToSignUp={handleSwitchForm}
          onClose={handleLoginFormClose}
        />
      )}
      {showRegistrationForm && (
        <RegistrationForm
          onSignUp={handleSignUp}
          onSwitchToLogin={handleSwitchForm}
          onClose={handleRegistrationFormClose}
        />
      )}
      <div
        className={`main-content ${
          showLoginForm || showRegistrationForm ? "none" : ""
        }`}
      >
        <h1 className="title">
          Manage your money <br /> very quickly
        </h1>
        <p className="main-description">
          Money Manager is a useful service that will help you manage your
          personal money. After all, it is very important to take into account
          our expenses and incomes. Without this, it is impossible to fully
          assess how much we earn and how much we spend. And most importantly,
          it is the accounting of our expenses that will help you understand
          what you can save on.
        </p>
        <Link to="/about" className="auth">
          {" "}
          How it work{" "}
        </Link>
      </div>
    </section>
  );
};

export default Main;
