import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Actions
const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = 0
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});

const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

const setTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text
});

const sortByAmount = () => ({
	type: "SET_SORT_BY",
	sortBy: "amount"
});

const sortByDate = () => ({
	type: "SET_SORT_BY",
	sortBy: "date"
});

const setStartDate = startDate => ({
	type: "SET_START_DATE",
	startDate
});

const setEndDate = endDate => ({
	type: "SET_END_DATE",
	endDate
});

// Expenses Reducer

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter(expense => expense.id !== action.id);
		case "EDIT_EXPENSE":
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

const filtersReducerDefault = {
	text: "",
	sortBy: "date", //date or amount
	startDate: undefined,
	endDate: undefined
};

const filtersReducer = (state = filtersReducerDefault, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER":
			return { ...state, text: action.text };
		case "SET_SORT_BY":
			return { ...state, sortBy: action.sortBy };
		case "SET_START_DATE":
			return { ...state, startDate: action.startDate };
		case "SET_END_DATE":
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};

// Get Visible Expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch =
				typeof startDate !== "number" || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== "number" || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === "date") {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === "amount") {
				return a.amount > b.amount ? 1 : -1;
			}
		});
};

// Store creatoin

const store = createStore(
	combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: "Rent", amount: 100, createdAt: 1000 })
);

const expenseTwo = store.dispatch(
	addExpense({ description: "Coffee", amount: 200, createdAt: -1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter("rent"));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate(50));

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate(0));

// const demoState = {
// 	expenses: [
// 		{
// 			id: "sdfsdfsdf",
// 			description: "January rent",
// 			note: "This was the final payment for that address",
// 			amount: 54500,
// 			createdAt: 0
// 		}
// 	],
// 	filters: {
// 		text: "rent",
// 		sortBy: "date", //date or amount
// 		startDate: undefined,
// 		endDate: undefined
// 	}
// };

// const user = {
// 	name: "Jen",
// 	age: 24
// };

// console.log({
// 	...user,
// 	age: 27
// });
