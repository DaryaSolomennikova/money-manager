import React, { useState } from "react";

interface RegistrationFormProps {
  onSignUp: (nickname: string, email: string, password: string, confirmpassword: string) => void;
  onSwitchToLogin: () => void;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSignUp, onSwitchToLogin, onClose }) => {
  const [nickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nickname && email && password && password) {
      onSignUp(nickname, email, password, password);
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <form className="frame" onSubmit={handleSubmit}>
      <button className="close-btn" onClick={onClose}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.3 5.71a1 1 0 0 0-1.41 0L12 10.59l-5.89-5.9a1 1 0 0 0-1.41 1.41L10.59 12l-5.9 5.89a1 1 0 0 0 1.41 1.41L12 13.41l5.89 5.9a1 1 0 0 0 1.41-1.41L13.41 12l5.89-5.89a1 1 0 0 0 0-1.4z" />
        </svg>
      </button>
      <div className="form">
        <label className="name" htmlFor="email">
          Name
        </label>
        <input
          className="field"
          type="text"
          id="text"
          value={nickname}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form">
        <label className="name" htmlFor="email">
          Email:
        </label>
        <input
          className="field"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form">
          <label className="name" htmlFor="password">
            Password:
          </label>
          <input
            className="field"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form">
          <label className="name" htmlFor="password">
          Confirm password
          </label>
          <input
            className="field"
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="form__btn" type="submit">
          Sign up
        </button>
        <p>
        Already have an account? <a href="#" onClick={onSwitchToLogin}>Log in</a>
        </p>
      </form>
    );
  };
  

export default RegistrationForm;
