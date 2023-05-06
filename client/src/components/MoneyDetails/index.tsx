import React from "react";
import "../../src/layout/Main/ServicePage";
import expenses from "../../../expenses.png";
import balance from "../../../balance.png";
import income from "../../../income.png";

interface MoneyDetailsProps {
  balanceAmount: number;
  incomeAmount: number;
  expensesAmount: number;
}

const MoneyDetails: React.FC<MoneyDetailsProps> = (props) => {
  const { balanceAmount, incomeAmount, expensesAmount } = props;

  return (
    <div className="finance-container">
      <div className="balance item">
        <img className="details-img" src={balance} alt="balance" />
        <div>
          <div className="balance-content content">
            <p className="details-text">Your Balance</p>
            <p className="details-money" data-testid="balanceAmount">
              $ {balanceAmount}
            </p>
          </div>
        </div>
      </div>
      <div className="income item">
        <img className="details-img" src={income} alt="income" />
        <div>
          <div className="income-content content">
            <p className="details-text">Your Income</p>
            <p className="details-money" data-testid="incomeAmount">
              $ {incomeAmount}
            </p>
          </div>
        </div>
      </div>
      <div className="expenses item">
        <img className="details-img" src={expenses} alt="expenses" />
        <div>
          <div className="expenses-content content">
            <p className="details-text">Your Expenses</p>
            <p className="details-money" data-testid="expensesAmount">
              $ {expensesAmount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyDetails;
