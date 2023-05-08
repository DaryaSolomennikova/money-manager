import React from "react";
import "./style.css";
import trashcan from "../../images/trashcan.png";

interface TransactionItemProps {
  title: string;
  amount: string;
  type: string;
  id: string;
  deleteTransaction: (id: string) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = (props) => {
  const { title, amount, type, id, deleteTransaction } = props;

  const handleDeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">$ {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          onClick={handleDeleteTransaction}
          data-testid="delete"
        >
          <img className="delete-img" src={trashcan} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
