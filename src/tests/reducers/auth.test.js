import authReducer from "../../reducers/auth";

test("Should set default state", () => {
	const state = authReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual({});
});

test("Should add uid to state after login", () => {
	const uid = "12345";
	const action = { type: "LOGIN", uid };
	const state = authReducer({}, action);
	expect(state).toEqual({ uid });
});

test("Should remove uid from state after logout", () => {
	const action = { type: "LOGOUT" };
	const state = authReducer({ uid: "12345" }, action);
	expect(state).toEqual({});
});
