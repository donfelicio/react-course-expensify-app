import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: "INCREMENT",
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: "DECREMENT",
	decrementBy
});

const setCount = ({ count = 1 } = {}) => ({
	type: "SET",
	count
});

const resetCount = () => ({
	type: "RESET"
});

//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (
	state = { count: 0 },
	{ type, incrementBy, decrementBy, count }
) => {
	switch (type) {
		case "INCREMENT":
			return { count: state.count + incrementBy };
		case "DECREMENT":
			return { count: state.count - decrementBy };
		case "RESET":
			return { count: 0 };
		case "SET":
			return { count: count };
		default:
			return state;
	}
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 15 }));

//unsubscribe();

// store.dispatch({
// 	type: "INCREMENT",
// 	incrementBy: 10
// });

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 6 }));

store.dispatch(setCount({ count: 101 }));
