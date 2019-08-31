import moment from "moment";

const filtersReducerDefault = {
	text: "",
	sortBy: "date", //date or amount
	startDate: moment().startOf("month"),
	endDate: moment().endOf("month")
};

export default (state = filtersReducerDefault, action) => {
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
