import React, { useState } from "react";
import LoginForm from "../LoginForm";

function Registration() {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
  };

  const handleShowRegistrationForm = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="auth">
      {showLoginForm ? (
        <>   
        <LoginForm onLogin={() => setShowLoginForm(true)} />
          <p>
            Don't have an account?{" "}
            <button onClick={handleShowRegistrationForm}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <Registration />
          <p>
            Already have an account?{" "}
            <button onClick={handleShowLoginForm}>Log In</button>
          </p>
        </>
      )}
    </div>
  );
}

export default Registration;