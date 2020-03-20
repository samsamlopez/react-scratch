import React from "react";
import Navbar from "./appbar/Navbar";
import Footer from "./footer/Footer";
export { Navbar, Footer };

const LandingPage = ({ history }) => {
	return (
		<div>
			<SignIn history={history} />
		</div>
	);
};

export default LandingPage;
