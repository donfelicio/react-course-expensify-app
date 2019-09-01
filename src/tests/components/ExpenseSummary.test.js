import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpenseSummary } from "../../components/ExpenseSummary";

test("Should render the ExpenseSummary component", () => {
	const expensesTotal = 100;
	const wrapper = shallow(
		<ExpenseSummary
			expenseCount={expenses.length}
			expenseTotal={expensesTotal}
		/>
	);
	expect(wrapper).toMatchSnapshot();
});

test("Should render the filtered ExpenseSummary component", () => {
	const expensesTotal = 195;
	const wrapper = shallow(
		<ExpenseSummary expenseCount={1} expenseTotal={expensesTotal} />
	);
	expect(wrapper).toMatchSnapshot();
});

test("Should render the ExpenseSummary with an empty input", () => {
	const wrapper = shallow(
		<ExpenseSummary expenseCount={0} expenseTotal={0} />
	);
	expect(wrapper).toMatchSnapshot();
});
