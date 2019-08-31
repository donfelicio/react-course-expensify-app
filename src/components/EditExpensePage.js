import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
	onClick = e => {
		this.props.removeExpense({ id: this.props.expense.id });
		this.props.history.push("/");
	};
	onSubmit = expense => {
		this.props.editExpense(this.props.expense.id, expense);
		this.props.history.push("/");
	};
	render() {
		return (
			<div>
				<ExpenseForm
					expense={this.props.expense}
					onSubmit={this.onSubmit}
				/>
				<button onClick={this.onClick}>Remove</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	editExpense: (id, expense) => dispatch(editExpense(id, expense)),
	removeExpense: expenseId => dispatch(removeExpense(expenseId))
});

const mapStateToProps = (state, props) => {
	return {
		expense: state.expenses.find(
			expense => expense.id === props.match.params.id
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditExpensePage);
