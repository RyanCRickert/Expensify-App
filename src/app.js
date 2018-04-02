import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: "Water bill", amount: 10000 , createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: "Gas bill", amount: 15000 , createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({ description: "Rent", amount: 55000 , createdAt: 2000}));
const expenseFour = store.dispatch(addExpense({ description: "Food", amount: 35000 , createdAt: -1000}));


const visibleExpenses = getVisibleExpenses(store.getState().expenses, store.getState().filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));