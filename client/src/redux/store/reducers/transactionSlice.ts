import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../models/ITransaction";
import { TYPE_TRANSACTION_DB } from "./const";

interface ITransactionState {
  transaction: ITransaction[];
  countIncome: number;
  countExpenses: number;
  countBalance: number;
  history: ITransaction[];
}

const initialState: ITransactionState = {
  transaction: [],
  countIncome: 0,
  countExpenses: 0,
  countBalance: 0,
  history: [],
};

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    countTransactionAmount(state, action: PayloadAction<ITransaction>) {
      action.payload.type === TYPE_TRANSACTION_DB.INCOME
        ? (state.countIncome += +action.payload.amount)
        : (state.countExpenses += +action.payload.amount);
    },
    totalAmount(state, action: PayloadAction<ITransaction>) {
      action.payload.type === TYPE_TRANSACTION_DB.INCOME
        ? (state.countBalance += +action.payload.amount)
        : (state.countBalance -= +action.payload.amount);
    },
    addHistory(state, action: PayloadAction<ITransaction>) {
      state.history.push({ ...action.payload, id: Math.random() });
    },
    deleteTransaction(state, action: PayloadAction<string>) {
        state.history = state.history.filter(
          (item: any) => item.id !== action.payload
        );
      },
    updateCount(state, action: PayloadAction<ITransaction[]>) {
        state.countIncome = action.payload.reduce((sum, transaction) => {
          return transaction.type === TYPE_TRANSACTION_DB.INCOME ? sum + +transaction.amount : sum;
        }, 0);
        state.countExpenses = action.payload.reduce((sum, transaction) => {
          return transaction.type === TYPE_TRANSACTION_DB.EXPENSES ? sum + +transaction.amount : sum;
        }, 0);
        state.countBalance = action.payload.reduce((sum, transaction) => {
          return transaction.type === TYPE_TRANSACTION_DB.INCOME ? sum + +transaction.amount : sum - +transaction.amount;
        }, 0);
      },  
  },
});

export default transactionSlice.reducer;
