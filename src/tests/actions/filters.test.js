import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from "../../actions/filters";
import moment from "moment";

test("Should generate set start date action object", () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: "SET_START_DATE",
		startDate: moment(0)
	});
});

test("Should generate set end date action object", () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: "SET_END_DATE",
		endDate: moment(0)
	});
});

test("Should generate sort by date action object", () => {
	const action = sortByDate();
	expect(action).toEqual({ type: "SET_SORT_BY", sortBy: "date" });
});

test("Should generate sort by amount action object", () => {
	const action = sortByAmount();
	expect(action).toEqual({ type: "SET_SORT_BY", sortBy: "amount" });
});

test("Should generate set text filter action object", () => {
	const action = setTextFilter("rent");
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: "rent"
	});
});

test("Should generate set text filter action object to clear the text", () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: "SET_TEXT_FILTER",
		text: ""
	});
});
