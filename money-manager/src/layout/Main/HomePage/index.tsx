import React, { useState } from "react";
import LoginForm from "../LoginForm";
import "./style.css";

const Main: React.FC<{ showLoginForm: boolean; setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showLoginForm, setShowLoginForm }) => {
  const [isMainContentVisible, setIsMainContentVisible] = useState(true);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleLoginBtnClick = () => {
    setIsMainContentVisible(false);
  };

  return (
    <section className="main">
      {showLoginForm && (
        <LoginForm onLogin={() => {}} onClose={handleLoginFormClose} />
      )}
      <div className={`main-content ${showLoginForm ? "none" : ""}`}>
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
