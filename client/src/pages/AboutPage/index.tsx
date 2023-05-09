import React, { useState } from "react";
import "./style.css";
import LoginForm from "../../components/LoginForm";
import cards from "../../images/cards.jpg";
import addForm from "../../images/add-form.jpg";
import historyForm from "../../images/history-form.jpg";
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
        <div className="cards">
          <p>
          <span>1.</span> There are 3 blocks on our website: Balance, Income and Expenses
          </p>
          <div className="cards__desc">
            <img src={cards} alt="cards: balance, income, expenses" />
            <ul className="cards_list">
              <li>The balance reflects our current cash balance.</li>
              <li>
                Income reflects the total amount of money earned or received
                over a certain period of time.
              </li>
              <li>
                Expenses reflect the total amount of money spent on final goods
                and services.
              </li>
            </ul>
          </div>
        </div>
        <div className="line-h"></div>
        <div className="service-form">
          <div className="add-form">
            <p>
              <span>2.</span> This is a form for adding our income and expenses. Everything
              is simple here!
            </p>
            <img src={addForm} alt="form for add transaction" />
            <ul className="description__add-form">
              <li>
                The <span>title field</span> is intended for entering the name
                of our expenses or income.
              </li>
              <li>
                In the <span>amount field</span> - the cost of your expenses or
                income.{" "}
              </li>
              <li>
                And in the last <span>field</span>, select the <span>type</span>{" "}
                of transaction - expense or income.
              </li>
            </ul>
          </div>
          <div className="line-v"></div>
          <div className="history-form">
            <p><span>3.</span> All your income and expenses are displayed in the history.</p>
            <img src={historyForm} alt="history form" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
