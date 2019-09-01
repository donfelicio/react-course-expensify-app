import expensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses", () => {
	const total = expensesTotal([]);
	expect(total).toBe(0);
});

test("Should return total of single expense", () => {
	const total = expensesTotal([expenses[0]]);
	expect(total).toBe(195);
});

test("Should return total of multiple expenses", () => {
	const total = expensesTotal(expenses);
	expect(total).toBe(314695);
});
