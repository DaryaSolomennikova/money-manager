import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

const AboutPage: React.FC<{
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
    <div className="about">
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
        className={`about-content ${
          showLoginForm || showRegistrationForm ? "none" : ""
        }`}
      >
        <h1>Our website is currently on work, we apologize for this...</h1>
      </div>
    </div>
  );
};

export default AboutPage;
