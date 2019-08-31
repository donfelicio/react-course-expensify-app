import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("Should render ExpenseForm", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseForm with expense data", () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
	expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
	wrapper.find("form").simulate("submit", { preventDefault: () => {} });
	expect(wrapper.state("error").length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test("Should set description OnInputChange", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find("input")
		.at(0)
		.simulate("change", { target: { value: "New Description" } });
	expect(wrapper.state("description")).toBe("New Description");
});

test("Should set note on textarea change", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find("textarea")
		.simulate("change", { target: { value: "New Note" } });
	expect(wrapper.state("note")).toBe("New Note");
});

test("Should set amount on amount change", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find("input")
		.at(1)
		.simulate("change", { target: { value: "23.50" } });
	expect(wrapper.state("amount")).toBe("23.50");
});

test("Should not set amount on amount change - invalid input", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper
		.find("input")
		.at(1)
		.simulate("change", { target: { value: "12.122" } });
	expect(wrapper.state("amount")).toBe("");
});

test("Should call onSubmit prop for valid form submission", () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(
		<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
	);
	wrapper.find("form").simulate("submit", { preventDefault: () => {} });
	expect(wrapper.state("error")).toEqual("");
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});

test("Should set new date on date change", () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find("withStyles(SingleDatePicker)").prop("onDateChange")(now);
	expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set calender to focussed with setCalendarFocus onChange", () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find("withStyles(SingleDatePicker)").prop("onFocusChange")({
		focused: true
	});
	expect(wrapper.state("calendarFocused")).toBe(true);
});
