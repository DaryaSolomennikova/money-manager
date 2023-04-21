import React, { useState } from "react";
import LoginForm from "../LoginForm";
import "./style.css";

const Main: React.FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  return (
    <section className="main">
      {showLoginForm ? (
        <LoginForm onLogin={() => setShowLoginForm(false)} />
      ) : (
        <div>
        <h1 className="title">Manage your money <br /> very quickly</h1>
        <button className="auth" onClick={handleShowLoginForm}>Log in</button>
        </div>
      )}
    </section>
  );
};

export default Main;