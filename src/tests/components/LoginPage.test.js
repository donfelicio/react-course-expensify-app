import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage";

test("Should render login page component", () => {
	const wrapper = shallow(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
});

test("Should call startLogin on button click", () => {
	const onLoginSpy = jest.fn();
	const wrapper = shallow(<LoginPage startLogin={onLoginSpy} />);
	wrapper.find("button").simulate("click");
	expect(onLoginSpy).toHaveBeenCalled();
});
