// Higher Order Component (HOC) = A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
	<div>
		<h1>info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = WrappedComponent => {
	return props => (
		<div>
			{props.isAdmin && <p>This is private info, please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = WrappedComponent => {
	return props => (
		<div>
			{!props.isAuthenticated ? (
				<p>Please authenticate yourself</p>
			) : (
				<WrappedComponent {...props} />
			)}
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo info="These are the details" isAdmin={true} />,
// 	document.getElementById("app")
// );
ReactDOM.render(
	<AuthInfo info="These are the details" isAuthenticated={false} />,
	document.getElementById("app")
);
