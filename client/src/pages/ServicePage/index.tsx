import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import expenses from "../../images/expenses.png";
import balance from "../../images/balance.png";
import income from "../../images/income.png";
import { Form, FormikProvider, useFormik } from "formik";
import FormikInput from "../../components/FormikInput/FormikInput";
// import { title } from "process";
import FormikSelect from "../../components/FormikSelect/FormikSelect";
// import { useAppDispatch, useAppSelector } from "../../redux/hooks/redux";
// import { userSlice } from "../../redux/store/reducers/UserSlice";

const ServicePage: React.FC<{
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showLoginForm, setShowLoginForm }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  // const {count} = useAppSelector(state => state.userReducer)
  // const {increment} = userSlice.actions;
  // const dispatch = useAppDispatch()

  // console.log(increment(5));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: "",
      amount: "",
      type: "income",
    },
    onSubmit: (values) => {
      console.log(values);
      // dispatch(increment(values.amount))
    },
  });

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

  const options = [
    {
      value: "income",
      label: "Income",
    },
    {
      value: "expenses",
      label: "Expenses",
    },
  ];

  return (
    <main className="service">
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
        className={`service-content ${
          showLoginForm || showRegistrationForm ? "none" : ""
        }`}
      >
        <div className="finance-container">
          <div className="balance item">
            <img src={balance} alt="balance" />
            <div className="balance-content content">
              <p className="detail-text">Your Balance</p>
              <p className="detail-money">$ 0</p>
            </div>
          </div>
          <div className="income item">
            <img src={income} alt="income" />
            <div className="income-content content">
              <p className="detail-text">Your Income</p>
              <p className="detail-money">$ 0</p>
            </div>
          </div>
          <div className="expenses item">
            <img src={expenses} alt="expenses" />
            <div className="expenses-content content">
              <p className="detail-text">Your Expenses</p>
              <p className="detail-money">$ 0</p>
            </div>
          </div>
        </div>

        <div className="transaction-details">
          <FormikProvider value={formik}>
            <Form className="transaction-form">
              <h1 className="transaction-header">Add Transaction</h1>
              <FormikInput
                name={"title"}
                value={formik.values.title}
                label={"TITLE"}
                placeholder={"TITLE"}
              />
              <FormikInput
                name={"amount"}
                value={formik.values.amount}
                label={"AMOUNT"}
                placeholder={"AMOUNT"}
              />
              <FormikSelect
                name={"type"}
                value={formik.values.type}
                label={"TYPE"}
                options={options}
              />
              <button
                type="submit"
                className="button"
                onClick={(e: any) => formik.handleSubmit(e)}
              >
                Add
              </button>
            </Form>
          </FormikProvider>
          <div className="history-transactions">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicePage;
