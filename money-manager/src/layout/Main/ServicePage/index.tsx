import React, { useState } from "react";
import "./style.css"
import LoginForm from "../LoginForm";
import expenses from '../../../expenses.png'
import balance from '../../../balance.png'
import income from '../../../income.png'

interface AboutPageProps {
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicePage: React.FC<{ showLoginForm: boolean; setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>> }> = ({ showLoginForm, setShowLoginForm }) => {
  const [isMainContentVisible, setIsMainContentVisible] = useState(true);

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleLoginBtnClick = () => {
    setIsMainContentVisible(false);
  };

  return (
    <main className="service">
      {showLoginForm && (
        <LoginForm onLogin={() => {}} onClose={handleLoginFormClose} />
      )}
      <div className={`service-content ${showLoginForm ? "none" : ""}`}>
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
        <form className="transaction-form">
          <h1 className="transaction-header">Add Transaction</h1>
          <label className="input-label" htmlFor="title">TITLE</label>
          <input type="text" id="title" className="input" placeholder="TITLE" />
          <label className="input-label" htmlFor="amount">AMOUNT</label>
          <input type="text" id="amount" className="input" placeholder="AMOUNT" />
          <label className="input-label" htmlFor="select">TYPE</label>
          <select id="select" className="input">
            <option value="INCOME">Income</option>
            <option value="EXPENSES">Expenses</option>
          </select>
          <button type="submit" className="button">Add</button>
        </form>
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
  )
}

export default ServicePage;
