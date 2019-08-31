import React from "react";
import { shallow } from "enzyme";
import NotFoundPage from "../../components/NotFoundPage";
import expenses from "../fixtures/expenses";

test("Should render NotFoundPage component", () => {
	const wrapper = shallow(<NotFoundPage />);
	expect(wrapper).toMatchSnapshot();
});
