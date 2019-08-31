import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
	const state = filtersReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual({
		text: "",
		sortBy: "date",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month")
	});
});

test("Should set sortBy to amount", () => {
	const state = filtersReducer(undefined, {
		type: "SET_SORT_BY",
		sortBy: "amount"
	});
	expect(state.sortBy).toBe("amount");
});

test("Should set soryBy to date", () => {
	const action = { typeOf: "SORT_BY_DATE" };
	const defaultState = {
		text: "",
		sortBy: "amount",
		startDate: moment().startOf("month"),
		endDate: moment().endOf("month")
	};
	const state = filtersReducer(defaultState, action);
});

test("Should set text filter", () => {
	const state = filtersReducer(undefined, {
		type: "SET_TEXT_FILTER",
		text: "testing"
	});
	expect(state.text).toBe("testing");
});

test("Should set startDate filter", () => {
	const state = filtersReducer(undefined, {
		type: "SET_START_DATE",
		startDate: moment(0).add(4, "days")
	});
	expect(state.startDate).toEqual(moment(0).add(4, "days"));
});

test("Should set endDate filter", () => {
	const state = filtersReducer(undefined, {
		type: "SET_END_DATE",
		endDate: moment(0).add(4, "days")
	});
	expect(state.endDate).toEqual(moment(0).add(4, "days"));
});
