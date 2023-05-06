import { Form, FormikProvider, useFormik } from "formik";
import React, { useState } from "react";
import FormikRegistration from "../FormikRegistration/FormikRegistration";

interface RegistrationFormProps {
  onSignUp: (
    nickname: string,
    email: string,
    password: string,
    confirmpassword: string
  ) => void;
  onSwitchToLogin: () => void;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSignUp,
  onSwitchToLogin,
  onClose,
}) => {
  const [nickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formikRegistration = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(increment(values.amount))
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nickname && email && password && password) {
      onSignUp(nickname, email, password, password);
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <FormikProvider value={formikRegistration}>
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
        <FormikRegistration
          label="Name"
          name="name"
          placeholder="Enter your name"
          type="name"
        />
        <FormikRegistration
          label="Email"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <FormikRegistration
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
        />
        <FormikRegistration
          label="Confirm password"
          name="confirmpassword"
          placeholder="Enter your password"
          type="confirmpassword"
        />
        <button
          className="form__btn"
          type="submit"
          onClick={(e: any) => formikRegistration.handleSubmit(e)}
        >
          Sign up
        </button>
        <p>
          Already have an account?
          <button onClick={onSwitchToLogin} className="link-button">
            Log in
          </button>
        </p>
      </Form>
    </FormikProvider>
  );
};

export default RegistrationForm;
