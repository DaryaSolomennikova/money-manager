import React, { useState } from 'react';

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
  }
  
  const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onLogin(email, password);
    };

  return (
    <form className="frame" onSubmit={handleSubmit}>
      <div className="form">
        <label className="name" htmlFor="email">Email:</label>
        <input className="field"
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form">
        <label className="name" htmlFor="password">Password:</label>
        <input className="field"
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button className="form__btn" type="submit">Log in</button>
        <p>Don't have an account? <a href="/">Sign Up</a></p>
    </form>
  );
};

export default LoginForm;