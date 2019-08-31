import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";
import Header from "../../components/header";
import toJSON from "enzyme-to-json";

test("Should render the header component", () => {
	// const renderer = new ReactShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();

	// console.log(renderer.getRenderOutput());

	const wrapper = shallow(<Header />);
	expect(toJSON(wrapper)).toMatchSnapshot();
	//expect(wrapper.find("h1").text()).toBe("Expensify");
});
