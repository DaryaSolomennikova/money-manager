import React, { useState } from "react";
import "./style.css";
import { Form, FormikProvider, useFormik } from "formik";
import FormikLogin from "../FormikLogin/FormikLogin";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToSignUp: () => void;
  onClose: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  onSwitchToSignUp,
  onClose,
}) => {
  const [email] = useState("");
  const [password] = useState("");
  const [error, setError] = useState("");

  const formiklogin = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(increment(values.amount))
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email && password) {
      onLogin(email, password);
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <FormikProvider value={formiklogin}>
      <Form className="frame" onSubmit={handleSubmit}>
        <button className="close-btn" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.3 5.71a1 1 0 0 0-1.41 0L12 10.59l-5.89-5.9a1 1 0 0 0-1.41 1.41L10.59 12l-5.9 5.89a1 1 0 0 0 1.41 1.41L12 13.41l5.89 5.9a1 1 0 0 0 1.41-1.41L13.41 12l5.89-5.89a1 1 0 0 0 0-1.4z" />
          </svg>
        </button>
        <FormikLogin
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        {/* <div className="form">
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
      </div>*/}
        <FormikLogin
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        {/* <div className="form">
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
      </div> */}
        {error && <div className="error">{error}</div>}
        <button
          className="form__btn"
          type="submit"
          onClick={(e: any) => formiklogin.handleSubmit(e)}
        >
          Log in
        </button>
        <p>
          Don't have an account?{" "}
          <button onClick={onSwitchToSignUp} className="link-button">Sign up</button>
        </p>
      </Form>
    </FormikProvider>
  );
};

export default LoginForm;
