import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default set", () => {
	const state = expensesReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
	const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if id not found", () => {
	const action = { type: "REMOVE_EXPENSE", id: "-1" };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("Should ad an expense", () => {
	const expense = { description: "new test expense", amount: 2010 };
	const action = {
		type: "ADD_EXPENSE",
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[0].id,
		updates: { amount: 999 }
	};
	const state = expensesReducer(expenses, action);
	expect(state[0].amount).toBe(999);
});

test("Should not edit expense if expense not found", () => {
	const action = { type: "EDIT_EXPENSE", id: "-1", updates: { amount: 999 } };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
	const action = { type: "SET_EXPENSES", expenses: [expenses[1]] };
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});
