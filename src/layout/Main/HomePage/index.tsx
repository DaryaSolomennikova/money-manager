import React, { useState } from "react";
import "./style.css"
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";

const Main: React.FC<{ showLoginForm: boolean; setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showLoginForm, setShowLoginForm }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleRegistrationFormClose=() => {
    setShowRegistrationForm(false);
  }

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

  const handleSignUp = (nickname: string, email: string, password: string, confirmPassword: string) => {
    // Handle sign up logic
  };

  return (
    <section className="main">
       {showLoginForm && !showRegistrationForm && (
        <LoginForm onLogin={handleLogin} onSwitchToSignUp={handleSwitchForm} onClose={handleLoginFormClose} />
      )}
      {showRegistrationForm && (
        <RegistrationForm onSignUp={handleSignUp} onSwitchToLogin={handleSwitchForm} onClose={handleRegistrationFormClose} />
      )}
      <div className={`main-content ${showLoginForm || showRegistrationForm ? "none" : ""}`}>
        <h1 className="title">
          Manage your money <br /> very quickly
        </h1>
        <p className="main-description">Money Manager is a useful service that helps you manage your personal money resources. It provides an opportunity to regulate the expense, the total cash flow on a monthly basis and generates statistical data.</p>
        <button className="auth">How it work</button>
      </div>
    </section>
  );
};

export default Main;