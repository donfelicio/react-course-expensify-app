import React from "react";
import { connect } from "react-redux";
import {
	setTextFilter,
	sortByAmount,
	sortByDate,
	setStartDate,
	setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
	state = {
		calendarFocused: null
	};

	onDatesChange = ({ startDate, endDate }) => {
		this.props.setStartDate(startDate);
		this.props.setEndDate(endDate);
	};

	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};

	onTextChange = e => {
		this.props.setTextFilter(e.target.value);
	};

	onSortChange = e => {
		switch (e.target.value) {
			case "amount":
				return this.props.sortByAmount();
			default:
				return this.props.sortByDate();
		}
	};

	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						{" "}
						<input
							type="text"
							placeholder="Search expenses"
							className="text-input"
							value={this.props.filters.text}
							onChange={this.onTextChange}
						/>
					</div>
					<div className="input-group__item">
						{" "}
						<select
							value={this.props.filters.sortBy}
							className="select"
							onChange={this.onSortChange}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						{" "}
						<DateRangePicker
							startDate={this.props.filters.startDate}
							startDateId={
								this.props.filters.startDate
									? this.props.filters.startDate.toString()
									: ""
							}
							endDate={this.props.filters.endDate}
							endDateId={
								this.props.filters.endDate
									? this.props.filters.endDate.toString()
									: ""
							}
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							numberOfMonths={1}
							isOutsideRange={() => {
								false;
							}}
							showClearDates={true}
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	setTextFilter: text => dispatch(setTextFilter(text)),
	sortByDate: () => dispatch(sortByDate()),
	sortByAmount: () => dispatch(sortByAmount()),
	setStartDate: startDate => dispatch(setStartDate(startDate)),
	setEndDate: endDate => dispatch(setEndDate(endDate))
});

const mapStateToProps = state => ({
	filters: state.filters
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ExpenseListFilters);
