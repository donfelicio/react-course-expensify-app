import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
	addExpense({ description: "Water Bill", amount: 4500, createdAt: 500 })
);
store.dispatch(addExpense({ description: "Gas Bill" }));
store.dispatch(
	addExpense({ description: "Rent", amount: 1095, createdAt: 1000 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
